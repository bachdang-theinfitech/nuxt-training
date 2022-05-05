export const state = () => ({
  loggedIn: false,
  user: null,
});

export const mutations = {
  SET_LOGIN(state) {
    state.loggedIn = true;
  },
};

export const actions = {
  login({ commit }) {
    commit("SET_LOGIN");
  },
};
