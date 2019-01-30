import asyncComponent from 'config/asyncComponent';

export const HomePage = asyncComponent(() => import('./HomePage'));
export const AboutPage = asyncComponent(() => import('./AboutPage'));
export const ProfilePage = asyncComponent(() => import('./ProfilePage'));
export const AuthPage = asyncComponent(() => import('./AuthPage'));
export const ListPage = asyncComponent(() => import('./ListPage'));
export const PostPage = asyncComponent(() => import('./PostPage'));
export const NotFoundPage = asyncComponent(() => import('./NotFoundPage'));
export const EditorPage = asyncComponent(() => import('./EditorPage'));
