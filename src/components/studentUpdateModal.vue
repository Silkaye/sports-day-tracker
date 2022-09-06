<template>
  <modal-reuse ref="modalReuse" :onModalSubmit="updateStudent">
    <form>
      <div class="field">
        <label class="title">Id</label>
        <input v-model="studentInfo.id" class="input" disabled />
      </div>
      <div class="field">
        <label class="title">First Name</label>
        <input v-model="studentInfo.firstName" class="input" />
      </div>
      <div class="field">
        <label class="title">Last Name</label>
        <input v-model="studentInfo.lastName" class="input" />
      </div>
      <div class="field">
        <label class="title">Birth Year</label>
        <!-- <input v-model="studentInfo.birthYear" class="input" /> -->
        <div class="control">
          <div class="select">
            <select v-model="studentInfo.birthYear">
              <option value="" disabled selected>Select</option>
              <option v-for="year in years" :key="year" :value="year">
                {{ year }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="field">
        <label class="title">Gender</label>
        <div class="control">
          <div class="select">
            <select v-model="studentInfo.gender">
              <option value="" disabled selected>Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
      </div>
      <div class="field">
        <label class="title">House</label>
        <div class="control">
          <div class="select">
            <select v-model="studentInfo.house">
              <option value="" disabled selected>Select</option>
              <option value="blue">Blue</option>
              <option value="yellow">Yellow</option>
            </select>
          </div>
        </div>
      </div>
    </form>

    <template #activator>
      <button>
        <span class="material-icons editIcon">edit</span>
      </button>
    </template>
  </modal-reuse>
</template>

<script>
import ModalReuse from "./ModalReuse.vue";

export default {
  components: {
    ModalReuse,
  },
  props: {
    student: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      studentInfo: { ...this.student },
    };
  },
  computed: {
    modal() {
      return this.$refs.modalReuse;
    },
    years() {
      const year = new Date().getFullYear();
      return Array.from(
        { length: year - 1950 },
        (value, index) => 2000 + index
      );
    },
  },
  methods: {
    updateStudent() {
      this.$store.dispatch("student/updateStudent", {
        data: this.studentInfo,
        onSuccess: () => {this.modal.close(), this.$store.dispatch("student/getStudents")}
      });
    },
  },
};
</script>

<style scoped>
.field {
  text-align: left;
}

.editIcon {
  color: green;
}
</style>