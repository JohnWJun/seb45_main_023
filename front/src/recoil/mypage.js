import { atom } from 'recoil';

export const Edit = atom({
  key: 'editor',
  default: false,
});

export const Blogs = atom({
  key: 'blog',
  default: [],
});

export const Comments = atom({
  key: 'coment',
  default: [],
});

export const Routes = atom({
  key: 'routes',
  default: '/mypage',
});

export const User = atom({
  key: 'user',
  default: {},
});

export const sidebar = atom({
  key: 'sidebar',
  default: 0,
});

export const userInfo = atom({
  key: 'info',
  default: {
    nickname: '',
    nationality: '',
    password: '',
    birth: '',
    id: 0,
  },
});

export const bookmarkInfo = atom({
  key: 'bookmark',
  default: [
    {
      id: '',
      body: '',
      createdAt: '',
      tags: [],
      images: [],
      modifiedAt: '',
      title: '',
      view: '',
    },
  ],
});
