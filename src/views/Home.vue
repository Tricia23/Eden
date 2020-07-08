<template>
  <div class="home">
    <Header />
    <Hero />
    <Listings />
    <Footer />
  </div>
</template>
<style lang="scss">
body {
  background-color: #f2f2f2;
  height: 100%;
  margin: 0;
}

@media (min-width: 768px) {
  html {
    position: relative;
    min-height: 100%;
  }
  body {
    background-color: #f2f2f2;
    height: 100%;
  }
}
</style>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Hero from "@/components/Hero.vue";
import Listings from "@/components/Listings.vue";


export default {
  name: "Home",
  components: {
    Header,
    Footer,
    Hero,
    Listings,
    
  }
};
</script>
