<template>
  <div class="list-item" v-if="beer">
    <span>
      <span class="title-text">{{ beer.name }}</span>
      <p>{{ beer.description }}.</p>
    </span>
    <button @click="goToDetails(beer.id)" class="list-button">Details</button>
  </div>
</template>

<script>
export default {
  name: "BeersListItem",
  props: ["beer"],
  methods: {
    goToDetails(beerId) {
      this.$emit("onGotoDetails", beerId);
    }
  }
};
</script>

<style scoped lang="scss">
.title-text {
  font-size: large;
  font-weight: 600;
}
.list-item {
  display: flex;
  justify-content: space-between;
}
.list-button {
  width: 55px;
  height: 25px;
  margin-top: 2rem;
}
</style>
