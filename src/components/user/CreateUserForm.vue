<template>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Nombre: </label>
                    <input type="text" class="form-control"  aria-describedby="emailHelp" v-model="name">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label" >Email: </label>
                    <input type="email" class="form-control" v-model="email">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Contraseña: </label>
                    <input type="password" class="form-control" v-model="password">
                </div>
                <div class="text-center">
                    <button type="submit" class="btn btn-primary" @click="saveUser">{{id ? 'Editar' : 'Crear'}}</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import {apiClient} from "../../api/chatggapi.js";

export default {
    props: [
      "userObj"
    ],
    data() {
        return {
            name: null,
            email: null,
            password: null,
            isSavingUser: false,
            id: null,
        }
    },
    methods: {
      setUser(user){
          this.name = user.name
          this.email = user.email
          this.id = user.id
      },
      async saveUser(){
          if (this.id){
              const userUpdates = {
                  name: this.name,
                  email: this.email,
                  password: this.password
              }
              const {data} = await apiClient.patch('/user/api/user/' + this.id + '/', userUpdates)
              console.log(data)
              this.$emit('userSaved')
              return
          }

          const newUser = {
              name: this.name,
              email: this.email,
              password: this.password
          }
          const {data} = await apiClient.post('/user/api/user/', newUser)
          console.log(data)
          this.$emit('userSaved')
      }
    },
    created() {
    }

}
</script>

<style scoped>

</style>