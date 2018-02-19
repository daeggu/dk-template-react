import { 
      ReduxPage,
      PostListPage, EditorPage } from 'pages';

export default [
      {
            path: '/redux',
            component : ReduxPage
      },
      {
            path: '/posts',
            exact: true,
            component: PostListPage
      },
      //위에 두개도 정상적으로 하나만 매칭되는지 확인.
      //일단 둘다 매칭은 되는데~ 위에 '/posts/:id',항목에서
      //posts의 태그들도 나오는 것 확인..

      //Match로 안먹음 TODO check id를 Page로 인식함..
      // {
      //       path: '/posts/page/:page',
      //       component: PostListPage,
      // },
      {
            path: '/editor',
            component: EditorPage
      }
]