// 该文件用于创建vuex中的store
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

// actions 用于响应动作
const actions = {
  jia(context, value) {
    // console.log('action jia 被调用', context, value);
    context.commit('JIA', value);
  },
  jian(context, value) {
    context.commit('JIAN', value);
  },
  jiaOdd(context, value) {
    if (context.state.sum % 2) {
      context.commit('JIA', value);
    }
  },
  jiaWait(context, value) {
    setTimeout(() => {
      context.commit('JIA', value);
    }, 2000);
  },
};
// mutations
const mutations = {
  JIA(state, value) {
    // console.log('mutations中的加被调用了',a,b);
    state.sum += value;
  },
  JIAN(state, value) {
    state.sum -= value;
  },
};
//- 用于将state中的数据进行加工
const getters = {
  bigSum(state) {
    return state.sum * 10;
  },
};
//用于存储数据
const state = {
  sum: 0,
  school:'northEast',
  subject:'前端'
};
const store = new Vuex.Store({
  actions,
  mutations,
  state,
  getters,
});
export default store;
