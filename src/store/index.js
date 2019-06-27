import Vue from 'vue';
import Vuex from 'vuex';
import order from './modules/authority';
import user from './modules/user';
import permission from './modules/permission';
import getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    order,
    app,
    user,
    permission
  },
  getters
});

export default store
