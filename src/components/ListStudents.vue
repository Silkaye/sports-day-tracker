<template>
  <div class="is-flex is-justify-content-center">
    <div class="scrolltest">
      <table class="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Birth Year</th>
            <th>Gender</th>
            <th>House</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="student in students" :key="student">
            <td>{{ student.id }}</td>
            <td>{{ student.firstName }}</td>
            <td>{{ student.lastName }}</td>
            <td>{{ student.birthYear }}</td>
            <td>{{ student.gender }}</td>
            <td>{{ student.house }}</td>
            <td>
              <button @click="deleteStudent(student.id)">
                <span class="material-icons deleteIcon">delete</span>
              </button>
              <button>
                <student-update-modal 
                :student = "student"/>
              </button>
              
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import studentUpdateModal from "../components/studentUpdateModal";
export default {
  components: {
    studentUpdateModal,
  },
  computed: {
    students() {
      return this.$store.state.student.items;
    },
  },
  created() {
    this.$store.dispatch("student/getStudents");
  },
  methods: {
    deleteStudent(id) {
      console.log(id);
      this.$store.dispatch("student/deleteStudent", {
        id,
        onSuccess: () => {
          this.$store.dispatch("student/getStudents");
        },
      });
    },
  },
};
</script>

<style scoped lang="scss">
.scrolltest {
  overflow: auto;

  @media (max-width: 760px) {
    margin: 0 auto;
    width: 450px;
  }

  @media (max-width: 570px) {
    margin: 0 auto;
    width: 300px;
  }
}

.deleteIcon {
  color: red;
  padding-right: 5px;

  @media (max-width: 897px) {
    padding-right: 0;
  }
}
</style>