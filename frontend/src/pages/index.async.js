import asyncRoute from 'lib/asyncRoute';

export const HomePage = asyncRoute(() => import('./HomePage'));
export const AboutPage = asyncRoute(() => import('./AboutPage'));
export const ProfilePage = asyncRoute(()=> import('./ProfilePage'));
export const ContactPage = asyncRoute(()=> import('./ContactPage'));
export const ReduxPage = asyncRoute(()=> import('./ReduxPage'));