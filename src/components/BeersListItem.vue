<template>
  <div>
    <span class="title-text">{{ name }}</span>
    <p>{{ description }}.</p>
  </div>
</template>

<script>
export default {
  name: "BeersListItem",
  props: ["name", "description"]
};
</script>

<style scoped lang="scss">
.title-text {
  font-size: large;
  font-weight: 600;
}
</style>
