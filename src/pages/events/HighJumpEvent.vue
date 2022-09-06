<template>
  <main>
    <category-select v-if="this.page.categories" :event="event"/>
    <roll-call v-else-if="this.page.rollcall"/>


    <div class="columns">
      <div class="column is-6">
        <button class="button is-success navButton" @click="back()">Back</button>
      </div>
      <div class="column is-6">
        <button class="button is-success navButton" @click="next()">Next</button>
      </div>
    </div>

  </main>
</template>

<script>
import CategorySelect from '../../components/CategorySelect.vue';
import RollCall from '../../components/RollCall.vue';
export default {
  name: 'HighJumpEvent',
  components: {
    CategorySelect,
    RollCall
  },
  data() {
    return {
      event: 
      {
        title: 'High Jump'
      },
      page: 
      {
        categories: true,
        rollcall: false
      }
    }
  },
  methods: {
    back() {
      if (this.page.categories) {
        this.$router.push({ name: "Events" });
      } else if (this.page.rollcall) {
        this.page.categories = true;
        this.page.rollcall = false;
      }
    },
    next() {
        if (this.page.categories) {
            this.page.categories = false;
            this.page.rollcall = true;
        } else if (this.page.rollcall) {
            this.$router.push({ name: "Events" });
        }
    },
    // test() {
    //     console.log(this.$store.getters["events/getCategories"]);
    // }
  }
};

</script>

<style>
  .navButton {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 30%;
}
</style>