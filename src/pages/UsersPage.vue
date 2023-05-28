<template>
    <Navbar />
    <div class="container">
        <h2>Users Page</h2>
        <button
          class="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
          @click="loadUser({id: null, name: null, email: null, password: null})"
        >
            Crear usuario
        </button>
        <UsersTable @editUser="loadUser" ref="usersTable"/>
    </div>
    <CreateUserForm
      :userObj="userSelected"
      ref="userForm"
      @userSaved="reloadUsers"
    />
</template>

<script>
import Navbar from "../shared/Navbar.vue";
import UsersTable from "../components/user/UsersTable.vue";
import CreateUserForm from "../components/user/CreateUserForm.vue";

export default {
  data(){
    return {
        userSelected: null
    }
  },
  methods: {
   loadUser(userSelected){
       this.$refs.userForm.setUser(userSelected)
   },
   reloadUsers(){
       this.$refs.usersTable.loadUsers()
   }
  },
  components: {CreateUserForm, UsersTable, Navbar}
}
</script>

<style scoped>

</style>