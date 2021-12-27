import { Module } from 'vuex';
import { RootState } from '@/app/app.store';
import {
  authLoginStoreModele,
  AuthLoginStoreState,
} from './login/auth-login.store';

export interface AuthStoreState {
  login: AuthLoginStoreState;
}

export const authStoreModule: Module<AuthStoreState, RootState> = {
  /**
   * 命名空间
   */
  namespaced: true,

  /**
   * 数据
   */
  state: {} as AuthStoreState,

  /**
   * 获取器
   */
  getters: {},

  /**
   * 修改器
   */
  mutations: {},

  /**
   * 动作
   */
  actions: {},

  /**
   * 模块
   */
  modules: {
    login: authLoginStoreModele,
  },
};
