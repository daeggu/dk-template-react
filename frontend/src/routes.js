import { 
      ReduxPage,
      PostListPage, EditorPage } from 'pages';

export default [
      {
            path: '/redux',
            component : ReduxPage
      },
      {
            path: '/posts/page/:page',
            component: PostListPage,
      },
      {
            path: '/posts',
            exact: true,
            component: PostListPage
      },
      {
            path: '/editor',
            component: EditorPage
      }
]