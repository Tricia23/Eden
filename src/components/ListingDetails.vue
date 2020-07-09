
<template>
  <div class="listing__details">
    <Header />
    <div class="details__wrapper">
      <div>
        <h1>{{dog.name}}</h1>
        <div class="dog__image">
          <img :src="dog.image" />
        </div>
        <h2 class="other-text">Here are other images for this breed</h2>
        <div class="random__wrapper">
          <div class="wrapper-inner">
            <div v-for="(randomDog, index) in randomDogs" :key="index" class="square">
              <div class="square-inner">
              
                <img :src="randomDog" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="breeds.length == 0">
        <p class="no__subbreeds">This Dog has no Subbreeds*</p>
      </div>
      <div v-else>
        <h2>These are the subreeds</h2>
        <div class="sub__breed-wrap">
          <div class="wrapper">
            <div class="wrapper-inner">
              <div v-for="(breed, index) in breeds" :key="index" class="square">
                <div class="square-inner">
                  <VueClazyLoad :src="breed.image">
                    <img :src="breed.image" />
                    <div class="preloader" slot="placeholder">
                      <clip-loader></clip-loader>
                    </div>
                    <span>{{breed.name}}</span>
                  </VueClazyLoad>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { VueClazyLoad } from "vue-clazy-load";
import ClipLoader from "vue-spinner/src/ClipLoader.vue";
export default {
  name: "listings",
  props: ["dog", "name"],
  components: {
    Header,
    Footer,
    VueClazyLoad,
    ClipLoader
  },
  data() {
    return {
      dogs: [],
      error: [],
      subImages: []
    };
  },

  created() {
    this.$store.dispatch("getSubBreeds", this.$props.name);
    this.$store.dispatch("getRandomDogs", this.$props.name);
  },
  computed: mapGetters(["breeds", "randomDogs"])
};
</script>

<style scoped lang="scss">
.details__wrapper {
  width: 100%;
  display: block;
  padding-top: 4rem;
  width: 90%;
  margin: 4rem auto 2rem auto;
}
.details__wrapper h1 {
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1.3px;
  font-size: 20px;
}
.dog__image {
  display: flex;
  justify-content: center;
}
.details__wrapper p {
  width: 80%;
  margin: auto;
}
.dog__image img {
  height: 200px;
  width: 90%;
  object-fit: cover;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.306764);
  border-radius: 6px;
}

.wrapper-inner {
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
}
.sub__breed-wrap {
  width: 100%;
  display: flex;
  margin: 1rem auto 0 auto;
  height: 400px;
}

.square {
  flex: 0 1 50%;
}

.square img {
  width: 100%;
  display: block;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.306764);
  border-radius: 6px;
  height: 160px;
}

.square-inner {
  padding: 10px;
}

.square-inner span {
  font-size: 12px;
  text-align: left;
  margin-left: 7px;
  color: #333333;
  margin-top: 10px;
}
.wrapper {
  text-align: center;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.no__subbreeds {
  padding-top: 3rem;
  font-size: 18px;
  text-align: center;
  display: block;
  font-weight: 600;
  color: #be0d0d;
}
.random__wrapper {
  width: 100%;
  margin: 1rem auto;
}

.details__wrapper h2 {
  text-align: center;
  margin-top: 1rem;
}

.listing__details {
  background-image: url("../images/wall4.png");
}
@media (min-width: 900px) {
  .dog__image img {
    height: 400px;
    width: 50%;
  }

  .details__wrapper h1 {
    font-size: 40px;
  }

  .random__title {
    font-size: 40px;
  }

  .no__subbreeds {
    font-size: 30px;
  }
  .details__wrapper p {
    width: 80%;
    margin: auto;
  }
  .details__wrapper h2 {
    margin-top: 3rem;
  }
  .square {
    flex: 0 1 33.33%;
  }
  .square-inner {
    padding: 15px;
  }

  .random__wrapper {
    width: 45%;
    margin: 3rem auto;
  }
  .wrapper {
    text-align: center;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }

  .sub__breed-wrap {
    width: 50%;
    display: flex;
    margin: 2rem auto 0 auto;
    height: 400px;
  }

  .details__wrapper {
    width: 100%;
    display: block;
    padding-top: 4rem;
    width: 90%;
    margin: 4rem auto 5rem auto;
  }
}

@media (min-width: 650px) and (max-width: 1210px) {
  .square {
    flex: 0 1 33.33%;
  }
}
</style>