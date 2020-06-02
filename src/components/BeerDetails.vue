<template>
  <div v-if="beerDetails">
    <button type="button" @click="gotoMain()">Back</button>
    <br />
    <h1 style="text-align:center">Beer Details</h1>
    Beer No: {{ beerDetails.id }}
    <div class="details-portion">
      <img :src="beerDetails.image_url" />
      <br />
      <span>{{ beerDetails.tagline }}</span>
      <br />Beer Name :
      <span>{{ beerDetails.name }}</span>
      <br />Description :
      <span>{{ beerDetails.description }}</span>
      <br />First Brewed :
      <span>{{ beerDetails.first_brewed }}</span>
      <br />Brewer Tips :
      <span>{{ beerDetails.brewers_tips }}</span>
      <br />Contributed By :
      <span>{{ beerDetails.contributed_by }}</span>
      <br />Food Pairing :
      <span v-for="(pairing, i) in beerDetails.food_pairing" :key="i"
        >{{ pairing }}, &nbsp;</span
      >
    </div>
  </div>
</template>

<script>
import { getBeerById } from "../services/beers-service";
export default {
  name: "BeerDetails",
  data() {
    return {
      beerDetails: undefined
    };
  },
  mounted() {
    let id = this.$route.params.beerId;
    if (id) {
      this.getBearDetails(id);
    }
  },
  methods: {
    async getBearDetails(id) {
      let details = await getBeerById(id);
      this.beerDetails = details;
    },
    gotoMain() {
      this.$router.push("/");
    }
  }
};
</script>
<style scoped lang="scss">
img {
  height: 30vh;
  width: 20vh;
  border: black 2px double;
}
.details-portion {
  margin-top: 2rem;
}
</style>
