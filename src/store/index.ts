import { store } from 'quasar/wrappers';
import Vuex from 'vuex';

export interface StateInterface {
  example: unknown;
}

export default store(({ Vue }) => {
  Vue.use(Vuex);

  return new Vuex.Store<StateInterface>({
    modules: {
      // example
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: !!process.env.DEV,
  });
});
