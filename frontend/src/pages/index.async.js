import asyncRoute from 'lib/asyncRoute';

export const AboutPage = asyncRoute(() => import('./AboutPage'));
export const ContactPage = asyncRoute(()=> import('./ContactPage'));
export const EditorPage = asyncRoute(()=> import('./EditorPage'));
export const HomePage = asyncRoute(() => import('./HomePage'));
export const PostListPage = asyncRoute(()=> import('./PostListPage'));
export const PostPage = asyncRoute(()=> import('./PostPage'));
export const ProfilePage = asyncRoute(()=> import('./ProfilePage'));
export const ReduxPage = asyncRoute(()=> import('./ReduxPage'));