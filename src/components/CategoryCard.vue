<template>
  <div class="event">
    <div class="details">
      <h2>{{ category.type }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryCard",
  props: ["category"],
};
</script>

<style scoped>
.event {
  text-align: center;
}
</style>