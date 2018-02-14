'use strict';

process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

/* 나중에 클라이언트쪽 코드에서 process.env.APP_ENV 값을 통하여 
서버일때만, 혹은 브라우저일때만 특정한 작업을 하도록 설정 할 수 있습니다. */
process.env.APP_ENV = 'server'; 

process.on('unhandledRejection', err => {
  throw err;
});

require('../config/env');

const webpack = require('webpack');
const config = require('../config/webpack.config.server'); // 서버용 환경설정을 지정
const paths = require('../config/paths');
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles');
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');

if (!checkRequiredFiles([paths.serverRenderJs])) {
  process.exit(1);
}

function build() {
  console.log('Creating an server production build...');

  let compiler = webpack(config);
  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) {
        return reject(err);
      }
      const messages = formatWebpackMessages(stats.toJson({}, true));
      if (messages.errors.length) {
        return reject(new Error(messages.errors.join('\n\n')));
      }
      return resolve({
        stats,
        warnings: messages.warnings,
      });
    });
  });
}

build();