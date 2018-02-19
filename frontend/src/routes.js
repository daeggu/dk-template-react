import { 
      ReduxPage,
      PostListPage, EditorPage } from 'pages';

export default [
      {
            path: '/redux',
            component : ReduxPage
      },
      {
            path: '/page/:page',
            component: PostListPage
      },
      {
            path: '/tag/:tag/:page?',
            component: PostListPage
      },
      {
            path: '/editor',
            component: EditorPage
      }
]