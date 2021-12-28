import { createStore } from 'vuex';
import { authStoreModule, AuthStoreState } from '../auth/auth.store';
import { postStoreModule, PostStoreState } from '../post/post.store';
import { userStoreModule, UserStoreState } from '../user/user.store';
import { localStorageStorePlugin } from './app.store.plugin';
import {
  appNotificationStoreModule,
  AppNotificationStoreState,
} from './notification/components/app-notification.store';

export interface RootState {
  appName: string;
  post: PostStoreState;
  auth: AuthStoreState;
  notification: AppNotificationStoreState;
  user: UserStoreState;
}

/**
 * 创建 Store
 */
const store = createStore({
  state: {
    appName: '唑下宠物',
  } as RootState,

  modules: {
    post: postStoreModule,
    auth: authStoreModule,
    notification: appNotificationStoreModule,
    user: userStoreModule,
  },

  plugins: [localStorageStorePlugin],
});

/**
 * 默认导出
 */
export default store;
