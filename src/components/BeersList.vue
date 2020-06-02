<template>
  <div>
    <h1 style="text-align:center">All Beers</h1>
    <ul>
      <li v-for="(beer, i) in beers" :key="i" @click="gotoDetails(beer.id)">
        <beer-list-item
          v-bind:name="beer.name"
          v-bind:description="beer.description"
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
      this.$router.push({
        name: "bearDetails",
        params: { beerId: beerId }
      });
    }
  }
};
</script>

<style scoped lang="scss"></style>
