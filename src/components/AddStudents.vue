<template>
  <div class="page-wrapper">
    <div class="container">
      <div class="form-container">
        <form>
          <div class="columns">
            <div class="column">
              <div class="field">
                <label class="label">First Name</label>
                <div class="control">
                  <input
                    v-model="form.firstName"
                    class="input"
                    type="text"
                    placeholder="First Name"
                  />
                  <form-errors :errors="v$.form.firstName.$errors" />
                </div>
              </div>
            </div>

            <div class="column is-6">
              <div class="field">
                <label class="label">Last Name</label>
                <div class="control">
                  <input
                    v-model="form.lastName"
                    class="input"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
                <form-errors :errors="v$.form.lastName.$errors" />
              </div>
            </div>
          </div>

          <div class="columns">
            <div class="column">
              <div class="field">
                <label class="label">Birth Year</label>
                <div class="control">
                  <div class="select">
                    <select v-model="form.birthYear">
                      <option value="" disabled selected>Select</option>
                      <option v-for="year in years" :key="year" :value="year">
                        {{ year }}
                      </option>
                    </select>
                  </div>
                </div>
                <form-errors :errors="v$.form.birthYear.$errors" />
              </div>
            </div>

            <div class="column">
              <div class="field">
                <label class="label">House</label>
                <div class="control">
                  <div class="select">
                    <select v-model="form.house">
                      <option value="" disabled selected>Select</option>
                      <option value="blue">Blue</option>
                      <option value="yellow">Yellow</option>
                    </select>
                  </div>
                </div>
                <form-errors :errors="v$.form.house.$errors" />
              </div>
            </div>

          </div>

          <div class="columns">

            <div class="column">
              <div class="field">
                <label class="label">Gender</label>
                <div class="control">
                  <div class="select">
                    <select v-model="form.gender">
                      <option value="" disabled selected>Select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>
                <form-errors :errors="v$.form.gender.$errors" />
              </div>
            </div>

          </div>

          <div class="field is-grouped">
            <div class="control">
              <button
                type="button"
                @click="addStudent"
                class="button is-link"
              >
                Submit
              </button>
            </div>
            <div class="control">
              <button class="button is-text">Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import {
  required,
  helpers,
} from "@vuelidate/validators";
import FormErrors from "../components/FormErrors.vue";

const setupInitialData = () => ({
  firstName: "",
  lastName: "",
  birthYear: "",
  house: "",
  gender: "",
});

export default {
  components: {
    FormErrors,
  },
  data() {
    return {
      form: setupInitialData(),
    };
  },
  computed: {
    years() {
      const year = new Date().getFullYear();
      return Array.from(
        { length: year - 1900 },
        (value, index) => 2000 + index
      );
    },
  },
  validations() {
    return {
      form: {
        firstName: {
          required: helpers.withMessage("Field 'First Name' cannot by empty!", required)
        },
        lastName: {
          required: helpers.withMessage("Field 'Last Name' cannot by empty!", required)
        },
        birthYear: {
          required: helpers.withMessage("You must select a birth year!", required)
        },
        house: {
          required: helpers.withMessage("You must select a house!", required)
        },
        gender: {
          required: helpers.withMessage("You must select a gender!", required)
        },
      },
    };
  },
  setup() {
    return { v$: useVuelidate() };
  },
  methods: {
    async addStudent() {
      const isValid = await this.v$.$validate();

      if (isValid) {
        this.v$.$reset();
        console.log(this.form);
        this.$store.dispatch("student/addStudent", {
          data: this.form,
          onSuccess: () => {
            this.form = setupInitialData();
          },
        });
      }
    },
  },
};
</script>

<style scoped>
.form-container {
  max-width: 960px;
  margin: 0 auto;
  margin-top: 40px;
}
.tag {
  margin: 3px;
}
</style>