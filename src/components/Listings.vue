<template>
  <div>
    <div v-if="isLoading">
      <loading :active.sync="isLoading" :can-cancel="false" :is-full-page="fullPage"></loading>
    </div>
    <!-- <div class="listing__search" v-else-if="!isLoading"> -->
    <div class="listing__search">
      <div class="wrap">
        <div class="search">
          <input
            type="text"
            v-model="search"
            class="searchTerm"
            placeholder="Search for a breed of your choice"
          />
          <button type="submit" class="searchButton">
            <i class="fa fa-search"></i>
          </button>
        </div>
      </div>
      <div class="wrapper">
        <div class="wrapper-inner">
          <div v-for="(dog, index) in filteredList" :key="index" class="square">
            <div class="square-inner">
              <router-link
                class="square"
                :to="{
                    name: 'ListingDetails',
                    params: { dog:dog, name:dog.name, randomDogs:breeds}  
                }"
              >
                <VueClazyLoad :src="dog.image">
                  <img :src="dog.image" />
                  <div class="preloader" slot="placeholder">
                    <clip-loader></clip-loader>
                  </div>
                  <span class="breed__name">Breed: {{dog.name}}</span>
                </VueClazyLoad>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { VueClazyLoad } from "vue-clazy-load";
import ClipLoader from "vue-spinner/src/ClipLoader.vue";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

class Dog {
  constructor(name, image) {
    this.name = name;
    this.image = image;
  }
}

export default {
  name: "listings",
  components: { Loading, VueClazyLoad, ClipLoader },
  data() {
    return {
      dogs: [],
      error: [],
      breeds: {},
      search: "",
      isLoading: true,
      fullPage: true
    };
  },
  methods: {
    doAjax() {
      this.isLoading = true;

      this.isLoading = false;
    }
  },

  mounted() {
    axios
      .get(`https://dog.ceo/api/breeds/list/all`)
      .then(response => {
        this.breeds = response.data.message;
      })
      .then(() => {
        const dogs = [];

        Object.keys(this.breeds).forEach(function(breed) {
          axios
            .get(`https://dog.ceo/api/breed/${breed}/images/random/`, {
            //   headers: {
            //     "Access-Control-Allow-Origin": "*"
            //   }
            })
            .then(response => {
              dogs.push(new Dog(breed, response.data.message));
            });
        });

        this.dogs = dogs;
      })
      .then(() => {
        setTimeout(() => {
          this.isLoading = false;
        }, 5000);
        
      });
  },
  computed: {
    filteredList() {
      return this.dogs.filter(dog => {
        return dog.name.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  }
};
</script>

<style scoped lang="scss">
@import url(https://fonts.googleapis.com/css?family=Open+Sans);

.listing__search {
  display: block;
  justify-content: center;
  margin-top: 3rem;
  padding-bottom: 4rem;
}

.search {
  width: 100%;
  position: relative;
  display: flex;
}

.searchTerm {
  width: 100%;
  border: 3px solid #802bb1;
  border-right: none;
  padding: 5px;
  height: 25px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #802bb1;
}

.searchTerm:focus {
  color: #333333;
}

.searchButton {
  width: 45px;
  height: 41px;
  border: 1px solid #802bb1;
  background: #802bb1;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
}

.wrap {
  width: 80%;
  margin: auto;
}

.wrapper {
  text-align: center;
  width: 100%;
  margin: 3rem auto 3rem auto;
}
.wrapper-inner {
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
}

.square {
  flex: 0 1 50%;
  text-decoration: none;
  margin-bottom: 10px;
}

.square img {
  width: 100%;
  display: block;
}

.square-inner {
  padding: 10px;
}

.square-inner img {
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.306764);
  border-radius: 6px;
  height: 150px;
  object-fit: cover;
}

.breed__name {
  margin-top: 15px;
  display: block;
  text-align: left;
  font-size: 12px;
  text-transform: capitalize;
  margin-left: 7px;
  color: #333333;
  font-weight: 600;
}

@media (min-width: 900px) {
  .wrap {
    width: 30%;
  }

  .searchTerm {
    height: 35px;
  }

  .searchButton {
    height: 51px;
  }

  .square {
    flex: 0 1 25%;
    margin-bottom: 15px;
  }

  .square-inner {
    padding: 20px;
  }
  .square-inner img {
    height: 250px;
  }
  .wrapper {
    width: 90%;
  }
  .breed__name {
    font-size: 18px;
  }

  @media (min-width: 650px) and (max-width: 1210px) {
    .square {
      flex: 0 1 33.33%;
      margin-bottom: 15px;
    }
    .wrap {
      width: 50%;
    }
  }
}
</style>