<template>
  <div class="option-title">{{ event.title }}</div>
  <div class="option-subtitle">Select categories to record</div>

  <div class="container">
    <div class="tile is-ancestor">
      <div class="tile is-3 is-vertical is-parent">
        <div
          class="tile is-child box"
          :class="{ selected: categories[0].selected }"
          @click="makeSelection(0)"
        >
          <category-card :category="categories[0]" />
        </div>
        <div
          class="tile is-child box"
          :class="{ selected: categories[4].selected }"
          @click="makeSelection(4)"
        >
          <category-card :category="categories[4]" />
        </div>
        <div
          class="tile is-child box"
          :class="{ selected: categories[8].selected }"
          @click="makeSelection(8)"
        >
          <category-card :category="categories[8]" />
        </div>
        <div
          class="tile is-child box"
          :class="{ selected: categories[12].selected }"
          @click="makeSelection(12)"
        >
          <category-card :category="categories[12]" />
        </div>
      </div>

      <div class="tile is-3 is-vertical is-parent">
        <div
          class="tile is-child box"
          :class="{ selected: categories[1].selected }"
          @click="makeSelection(1)"
        >
          <category-card :category="categories[1]" />
        </div>
        <div
          class="tile is-child box"
          :class="{ selected: categories[5].selected }"
          @click="makeSelection(5)"
        >
          <category-card :category="categories[5]" />
        </div>
        <div
          class="tile is-child box"
          :class="{ selected: categories[9].selected }"
          @click="makeSelection(9)"
        >
          <category-card :category="categories[9]" />
        </div>
        <div
          class="tile is-child box"
          :class="{ selected: categories[13].selected }"
          @click="makeSelection(13)"
        >
          <category-card :category="categories[13]" />
        </div>
      </div>

      <div class="tile is-3 is-vertical is-parent">
        <div
          class="tile is-child box"
          :class="{ selected: categories[2].selected }"
          @click="makeSelection(2)"
        >
          <category-card :category="categories[2]" />
        </div>
        <div
          class="tile is-child box"
          :class="{ selected: categories[6].selected }"
          @click="makeSelection(6)"
        >
          <category-card :category="categories[6]" />
        </div>
        <div
          class="tile is-child box"
          :class="{ selected: categories[10].selected }"
          @click="makeSelection(10)"
        >
          <category-card :category="categories[10]" />
        </div>
        <div
          class="tile is-child box"
          :class="{ selected: categories[14].selected }"
          @click="makeSelection(14)"
        >
          <category-card :category="categories[14]" />
        </div>
      </div>

      <div class="tile is-3 is-vertical is-parent">
        <div
          class="tile is-child box"
          :class="{ selected: categories[3].selected }"
          @click="makeSelection(3)"
        >
          <category-card :category="categories[3]" />
        </div>
        <div
          class="tile is-child box"
          :class="{ selected: categories[7].selected }"
          @click="makeSelection(7)"
        >
          <category-card :category="categories[7]" />
        </div>
        <div
          class="tile is-child box"
          :class="{ selected: categories[11].selected }"
          @click="makeSelection(11)"
        >
          <category-card :category="categories[11]" />
        </div>
        <div
          class="tile is-child box"
          :class="{ selected: categories[15].selected }"
          @click="makeSelection(15)"
        >
          <category-card :category="categories[15]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryCard from "../components/CategoryCard.vue";

export default {
  name: "EventsView",
  components: {
    CategoryCard,
  },
  props: ["event"],
  data() {
    return {
      categories: [],
    };
  },
  created() {
    this.categories = this.$store.getters["events/getCategories"];
  },
  methods: {
    makeSelection(index) {
      if (this.categories[index].selected === false) {
        this.categories[index].selected = true;
      } else {
        this.categories[index].selected = false;
      }
      this.$store.dispatch("events/addCategories", this.categories);
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/styles/variables.scss";

.navButton {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 30%;
}

.tileholder {
  max-width: 1000px;
}

.box {
  transition: 0.2s ease-in-out;
  background-color: #f2f2f2;
}

.box:hover {
  background-color: $primary;
  transition: 0.2s ease-in-out;
  cursor: pointer;
}

.selected {
  box-shadow: 0 0 0 4px $primary-alt;
}

.option-title {
  font-size: 34px;
  margin-bottom: 30px;
  font-weight: bold;
  text-align: center;
}

.option-subtitle {
  font-size: 20px;
  margin-bottom: 30px;
  font-weight: bold;
  text-align: center;
}
</style>