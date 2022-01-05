// 该文件用于创建vuex中的store
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

// 求和相关配置

const countOptions = {
  namespaced: true,
  actions: {
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
  },
  mutations: {
    JIA(state, value) {
      // console.log('mutations中的加被调用了',a,b);
      state.sum += value;
    },
    JIAN(state, value) {
      state.sum -= value;
    },
  },
  state: {
    sum: 0,
    school: 'northEast',
    subject: '前端',
  },
  getters: {
    bigSum(state) {
      return state.sum * 10;
    },
  },
};

// 人员配置相关操作
const personOptions = {
  namespaced: true,
  actions: {
    addPersonWang(context, value) {
      if (value.name.indexOf('王') == 0) {
        context.commit('ADD_PERSON', value);
      }
    },
  },
  mutations: {
    ADD_PERSON(state, value) {
      state.personList.unshift(value);
    },
  },
  state: { personList: [{ id: 1, name: '张三' }] },
  getters: {
    firstPersonName(state) {
      return state.personList[0].name;
    },
  },
};

const store = new Vuex.Store({
  modules: {
    countAbout: countOptions,
    personAbout: personOptions,
  },
});
export default store;
