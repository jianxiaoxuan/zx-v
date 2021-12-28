import { RouteRecordRaw } from 'vue-router';
import UserShow from './show/user-show.vue';
import UserPosts from './show/components/user-posts.vue';

/**
 * 定义路由
 */
const routes: Array<RouteRecordRaw> = [
  {
    name: 'userShow',
    path: '/users/:userId',
    component: UserShow,
    props: true,
    children: [
      {
        name: 'userPosts',
        path: '',
        component: UserPosts,
      },
    ],
  },
];

/**
 * 默认导出
 */
export default routes;
