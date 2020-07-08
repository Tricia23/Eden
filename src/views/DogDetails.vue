<template>
  <div class="">
    <Header />
    <ListingDetails />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import ListingDetails from "@/components/ListingDetails.vue";

export default {
  name: "about",
  props: ["dog", "name"],
  components: {
    ListingDetails
  }
};
</script>
