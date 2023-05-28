<template>
    <table class="table table-striped">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Acciones</th>
        </tr>
        </thead>
        <tbody>
        <tr v-if="usersData" v-for="({name, email, id}, idx) in usersData" :key="id">
            <th scope="row">{{idx + 1}}</th>
            <td>{{name}}</td>
            <td>{{email}}</td>
            <td class="p-0">
                <div class="m-0 p-0 d-flex justify-content-evenly">
                    <button
                      class="btn btn-warning"
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasExample"
                      aria-controls="offcanvasExample"
                      @click="$emit('editUser', usersData[idx])"
                    >
                        Editar
                    </button>
                    <button type="button" class="btn btn-danger" @click="deleteUser(id)">Eliminar</button>
                </div>
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script>
import {apiClient} from "../../api/chatggapi.js";

export default {
    data(){
        return {
            isLoadingUsers: false,
            usersData: []
        }
    },
    methods: {
      async loadUsers(){
          this.isLoadingUsers = true
          const {data} = await apiClient.get('/user/api/user')
          this.usersData = data
          this.isLoadingUsers = false
      },
        async deleteUser(userId){
          const {data} = await apiClient.delete('/user/api/user/' + userId)
          console.log(data)
          await this.loadUsers()
        }
    },
    async created() {
        await this.loadUsers()
    }
}
</script>

<style scoped>

</style>