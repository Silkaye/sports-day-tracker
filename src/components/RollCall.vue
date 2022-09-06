<template>
  <main class="rollcall">
    <div class="option-title">Roll Call</div>
    <div class="option-subtitle">
      Mark which students are present for this event
    </div>
    <div class="is-flex is-justify-content-center">
      <table class="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Attendance</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="student in students" :key="student">
            <td v-if="checkSelected(student.birthYear, student.gender)">
              {{ student.firstName }}
            </td>
            <td v-if="checkSelected(student.birthYear, student.gender)">
              {{ student.lastName }}
            </td>
            <td
              v-if="
                student.attendance &&
                checkSelected(student.birthYear, student.gender)
              "
            >
              Present
            </td>
            <td
              v-else-if="
                !student.attendance &&
                checkSelected(student.birthYear, student.gender)
              "
            >
              Absent
            </td>
            <td v-if="checkSelected(student.birthYear, student.gender)">
              <div class="button-options">
                <button
                  v-if="!student.attendance"
                  @click="
                    present(
                      student.id,
                      student.firstName,
                      student.lastName,
                      student.attendance
                    )
                  "
                  class="button is-block is-success is-light is-fullwidth"
                >
                  Mark As Present
                </button>
                <button
                  v-else
                  @click="
                    present(
                      student.id,
                      student.firstName,
                      student.lastName,
                      student.attendance
                    )
                  "
                  class="button is-block is-danger is-light is-fullwidth"
                >
                  Mark As Absent
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      categories: [],
      selections: [],
    };
  },
  created() {
    console.log(this.selections);
    this.categories = this.$store.getters["events/getCategories"];
    this.$store.dispatch("student/getStudents");
    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i].selected) {
        this.selections.push(this.categories[i].type);
      }
    }
  },
  computed: {
    students() {
      return this.$store.state.student.items;
    },
  },
  methods: {
    checkSelected(year, gender) {
      let ageGroup;
      let genderGroup;
      let compareString;

      switch (year) {
        case 2017:
          ageGroup = "U5";
          break;
        case 2016:
          ageGroup = "U6";
          break;
        case 2015:
          ageGroup = "U7";
          break;
        case 2014:
          ageGroup = "U8";
          break;
        case 2013:
          ageGroup = "U9";
          break;
        case 2012:
          ageGroup = "U10";
          break;
        case 2011:
          ageGroup = "U11";
          break;
        case 2010:
          ageGroup = "U12";
          break;
      }

      switch (gender) {
        case "male":
          genderGroup = "Boys";
          break;
        case "female":
          genderGroup = "Girls";
          break;
      }

      compareString = ageGroup + " " + genderGroup;

      for (let i = 0; i < this.selections.length; i++) {
        if (compareString === this.selections[i]) {
          return true;
        }
      }
    },
    present(id, firstName, lastName, attendance) {
      if (attendance === true) {
        attendance = false;
      } else {
        attendance = true;
      }
      this.updateStudent(id, firstName, lastName, attendance);
    },
    updateStudent(id, firstName, lastName, attendance) {
      this.$store.dispatch("student/updateStudent", {
        data: {
          id: id,
          firstName: firstName,
          lastName: lastName,
          attendance: attendance,
        },
        onSuccess: () => this.$store.dispatch("student/getStudents"),
      });
    },
  },
};
</script>

<style scoped>
.button-options {
  display: flex;
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