import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 数据的存储
  state: {
    userInfo: {
      userName: '未登录'
    }
  },
  // 计算属性
  getters: {

  },
  // 通过方法改变state的内容(不能处理异步操作)
  mutations: {
    changeLogin(state, status) {
      state.userInfo = status;
    }
  },
  // 异步操作 提交state的值
  actions: {
    longinAction({ commit }, user) {
      commit('changeLonin', user);
    }
  },
  // 
  modules: {
  }
})
