<template>
  <div class="is-flex is-justify-content-center">
    <table class="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Email</th>
          <th>Admin Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user">
          <td>{{ user.id }}</td>
          <td>{{ user.username }}</td>
          <td v-if="user.admin"><span class="material-icons">check</span></td>
          <td v-else><span class="material-icons">close</span></td>
          <td v-if="user.admin">
            <button
              @click="demoteUser(user.id, user.username)"
              class="button is-block is-danger is-light is-fullwidth"
            >
              Demote
            </button>
          </td>
          <td v-else>
            <button
              @click="promoteUser(user.id, user.username)"
              class="button is-block is-primary is-light is-fullwidth"
            >
              Promote
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    users() {
      return this.$store.state.userList.items;
    },
  },
  created() {
    this.$store.dispatch("userList/getUsers");
  },
  methods: {
    promoteUser(id, username) {
      let admin = true;
      this.updateUser(id, admin, username);
    },
    demoteUser(id, username) {
      let admin = false;
      this.updateUser(id, admin, username);
    },
    updateUser(id, admin, username) {
      this.$store.dispatch("userList/updateUser", {
        data: {
          id: id,
          admin: admin,
          username: username,
        },
        onSuccess: () => this.$store.dispatch("userList/getUsers"),
      });
    },
  },
};
</script>

<style scoped>
</style>