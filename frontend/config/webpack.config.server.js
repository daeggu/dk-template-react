const path = require('path');
const webpack = require('webpack');
const paths = require('./paths');
const getClientEnvironment = require('./env');

// 환경변수를 설정하기 위한 설정
const publicPath = paths.servedPath;
const publicUrl = publicPath.slice(0, -1);
const env = getClientEnvironment(publicUrl);

module.exports = {
  entry: paths.ssrJs,
  target: 'node', // node 전용으로 번들링 한다는것을 명시합니다.
  output: {
    path: paths.ssrBuild,
    filename: 'render.js',
    // Node.js 에서require 로 불러올 수 있게 함
    libraryTarget: 'commonjs2'
  },
  module: {
    // 각 파일들을 불러오게 될 때 설정
    rules: [
      {
        // oneOf 는 내부의 모든 로더를 시도해보고, 해당되는 것이 없다면
        // 최하단의 file-loader 를 실행시킵니다
        oneOf: [
          {
            // 자바스크립트 파일은 바벨을 사용하여 변환합니다
            test: /\.(js|jsx)$/,
            include: paths.appSrc,
            loader: require.resolve('babel-loader'),
            options: {
              cacheDirectory: true
            },
          },
          /* css 와 scss 파일을 불러 올 때에는, 
          css-loaders/locals 를 실행하는것이 중요합니다. 
          파일을 따로 만들어내지 않기 때문이죠 */
          {
            test: /\.css$/,
            loader: require.resolve('css-loader/locals'),
          },
          /* scss 의 경우엔, CSS Module 이 제대로 작동 하도록,
          production 과 동일하게 설정 하되, 
          여기에서도 css-loader/locals 를 적용합니다 */
          {
            test: /\.scss$/,
            use: [
              {
                loader: require.resolve('css-loader/locals'),
                options: {
                  importLoaders: 1,
                  modules: true,
                  localIdentName: '[name]__[local]___[hash:base64:5]'
                },
              },
              {
                loader: require.resolve('sass-loader'),
                options: {
                  includePaths: [paths.globalStyles]
                }
              }
            ]
          },
          // 만약에 자바스크립트도, 스타일도 아니라면, 파일로 취급합니다.
          // 여기서 emitFile: false 설정이 중요합니다.
          {
            loader: require.resolve('file-loader'),
            exclude: [/\.js$/, /\.html$/, /\.json$/],
            options: {
              name: 'static/media/[name].[hash:8].[ext]',
              // 경로만 만들고, 실제로 파일을 따로 저장하지는 않습니다.
              emitFile: false
            },
          }
        ]
      }
    ]
  },
  resolve: {
    // NODE_PATH 가 제대로 작동하도록, production 에서 사용한 설정을
    // 그대로 넣어줬습니다.
    modules: ['node_modules', paths.appNodeModules].concat(
      // It is guaranteed to exist because we tweak it in `env.js`
      process.env.NODE_PATH.split(path.delimiter).filter(Boolean)
    )
  },
  // 여기서는 환경 변수 관련 플러그인만 적용해주면 됩니다.
  plugins: [
    new webpack.DefinePlugin(env.stringified),
  ],
};