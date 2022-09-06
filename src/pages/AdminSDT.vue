<template>
  <main class="adminSDT">
    <!-- POST LIST START -->
    <section class="options">
      <div class="options-type">Administrative Options</div>

      <div class="group-width is-flex is-justify-content-center">
        <div class="columns is-desktop">
          <div
            class="column"
          >
            <div class="item bottom-border">
              <div @click="addStudents()" class="button">Add Students</div>
            </div>
          </div>

          <div
            class="column"
          >
            <div class="item bottom-border">
              <div @click="assignAdmin()" class="button">
                Assign Administrator
              </div>
            </div>
          </div>

          <div
            class="column"
          >
            <div class="item bottom-border">
              <div @click="listStudents()" class="button">Student List</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- POST LIST END -->
    <div v-if="isAddStudent">
      <add-students />
    </div>

    <div v-if="isAssignAdmin">
      <assign-admin />
    </div>

    <div v-if="isListStudents">
      <list-students />
    </div>
  </main>
</template>

<script>
import AddStudents from "../components/AddStudents.vue";
import AssignAdmin from "../components/AssignAdmin.vue";
import ListStudents from "../components/ListStudents.vue";
import useAuth from "../composition/useAuth";
export default {
  components: {
    AddStudents,
    AssignAdmin,
    ListStudents,
  },
  data() {
    return {
      isAddStudent: false,
      isAssignAdmin: false,
      isListStudents: false,
    };
  },
  setup() {
    return useAuth();
  },
  watch: {
    isAuthenticated(isAuth) {
      if (!isAuth) {
        this.$router.push("/");
      }
    },
  },
  methods: {
    addStudents() {
      if (this.isAddStudent === true) {
        this.isAddStudent = false;
      } else {
        this.isAddStudent = true;
        this.isAssignAdmin = false;
        this.isListStudents = false;
      }
    },
    assignAdmin() {
      if (this.isAssignAdmin === true) {
        this.isAssignAdmin = false;
      } else {
        this.isAssignAdmin = true;
        this.isAddStudent = false;
        this.isListStudents = false;
      }
    },
    listStudents() {
      if (this.isListStudents === true) {
        this.isListStudents = false;
      } else {
        this.isListStudents = true;
        this.isAssignAdmin = false;
        this.isAddStudent = false;
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/styles/variables.scss";

.button {
  background-color: $dark;
  color: $light;
  width: 200px;
  padding-top: 25px;
  padding-bottom: 25px;
}

.item {
  text-align: center;
}

.options {
  margin-bottom: 50px;
}

.group-width {
  max-width: 600px;
  margin: 0 auto;
}

.options-type {
  font-size: 34px;
  margin-bottom: 30px;
  font-weight: bold;
  text-align: center;
}

</style>