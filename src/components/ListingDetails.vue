
<template>
  <div>
    <Header />
    <div class="details__wrapper">
      <div>
        <h1>{{dog.name}}</h1>
        <div class="dog__image">
          <img :src="dog.image" />
        </div>
        <div class="random__wrapper">
          <div class="wrapper-inner">
            <div v-for="(randomDog, index) in randomDogs" :key="index" class="square">
              <div class="square-inner">
                <img :src="randomDogs.image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="breeds.length == 0">
        <p class="no__subbreeds">This Dog has no Subbreeds*</p>
      </div>

      <div class="sub__breed-wrap" v-else>
        <div class="wrapper">
          <div class="wrapper-inner">
            <div v-for="(breed, index) in breeds" :key="index" class="square">
              <div class="square-inner">
                <img :src="breed.image" />
                <span>{{breed.name}}</span>
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
export default {
  name: "listings",
  props: ["dog", "name"],
  components: {
    Header,
    Footer
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
    this.$store.dispatch("getRandomDogs");
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
  margin: 4rem auto 0 auto;
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
.sub__breed-wrap {
  width: 50%;
  display: flex;
  margin: 2rem auto 0 auto;
  height: 400px;
}
.wrapper {
  text-align: center;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
.wrapper-inner {
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
}

.square {
  flex: 0 1 33.33%;
}

.square img {
  width: 100%;
  display: block;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.306764);
  border-radius: 6px;
  height: 160px;
}

.square-inner {
  padding: 15px;
}

.square-inner span {
  font-size: 12px;
  text-align: left;
  margin-left: 7px;
  color: #333333;
  margin-top: 10px;
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
  width: 45%;
  margin: 3rem auto;
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
}
</style>