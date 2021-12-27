import { createStore } from 'vuex';
import { authStoreModule, AuthStoreState } from '../auth/auth.store';
import { postStoreModule, PostStoreState } from '../post/post.store';
import { localStorageStorePlugin } from './app.store.plugin';

export interface RootState {
  appName: string;
  post: PostStoreState;
  auth: AuthStoreState;
}

/**
 * 创建 Store
 */
const store = createStore({
  state: {
    appName: '宁皓网',
  } as RootState,

  modules: {
    post: postStoreModule,
    auth: authStoreModule,
  },

  plugins: [localStorageStorePlugin],
});

/**
 * 默认导出
 */
export default store;
