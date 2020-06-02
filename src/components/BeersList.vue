<template>
  <div>
    <h1 style="text-align:center">All Beers</h1>
    <ul>
      <li v-for="(beer, i) in beers" :key="i">
        <beer-list-item
          :beer="beer"
          @onGotoDetails="gotoDetails"
        ></beer-list-item>
      </li>
    </ul>
  </div>
</template>

<script>
import { getBeersList } from "../services/beers-service";
import BeersListItem from "./BeersListItem";
export default {
  name: "BeersList",
  components: {
    "beer-list-item": BeersListItem
  },
  data() {
    return {
      beers: []
    };
  },
  mounted() {
    this.getAllBeersList();
  },
  methods: {
    async getAllBeersList() {
      let allBeers = await getBeersList();
      this.beers = allBeers;
    },
    gotoDetails(beerId) {
      debugger;
      this.$router.push({
        name: "bearDetails",
        params: { beerId: beerId }
      });
    }
  }
};
</script>

<style scoped lang="scss"></style>
