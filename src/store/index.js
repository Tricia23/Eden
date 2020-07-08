import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dogs: [],
    error: [],
    breeds: [],
    subBreeds: [],
    subImages: [],
    randomDogs: [],
  },
  getters: {
    subBreeds: (state) => state.subBreeds,
    breeds: (state) => state.breeds,
    randomDogs: (state) => state.randomDogs,
  },
  mutations: {
    addBreeds(state, payload) {
      state.breeds = payload;
    },
    addSubBreeds(state, payload) {
      state.subBreeds = payload;
    },
    addrandomDogs(state, payload) {
      state.randomDogs = payload;
    },
  },
  actions: {
    getSubBreeds({ commit }, name) {
      axios
        .get(`https://dog.ceo/api/breed/${name}/list`)
        .then((response) => {
          commit("addSubBreeds", response.data.message);
        })
        .then(() => {
          const subBreeds = [];
          state.subBreeds.map((subBreed) => {
            axios
              .get(
                `https://dog.ceo/api/breed/${name}/${subBreed}/images/random/1`
              )
              .then((response) => {
                subBreeds.push({
                  name: subBreed,
                  image: response.data.message[0],
                });
              });
          });
          commit("addBreeds", subBreeds);
        });
    },
    getRandomDogs({ commit }, name) {
      axios
        .get(`https://dog.ceo/api/breed/${name}/images/random/4`)
        .then((response) => {
          commit("addrandomDogs", response.data.message);
        });
    },
  },
});
