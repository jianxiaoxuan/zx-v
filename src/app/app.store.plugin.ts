import { Plugin } from 'vuex';
import { setStorage } from './app.service';
import { RootState } from './app.store';

/**
 * 本地存储
 */
export const localStorageStorePlugin: Plugin<RootState> = store => {
  store.subscribe(mutation => {
    switch (mutation.type) {
      case 'auth/login/setLoginResponseData':
        setStorage('nid', mutation.payload.token);
        setStorage('uid', mutation.payload.id);
        break;
    }
  });
};
