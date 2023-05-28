<template>
    <register class="h-75 gradient-form vw-100" style="background-color: #eee; padding-: 5rem;">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-xl-10">
                    <div class="card rounded-3 text-black">
                        <div class="row g-0">
                            <div class="col-lg-6">
                                <div class="card-body p-md-5 mx-md-4">

                                    <div class="text-center">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                             style="width: 185px;" alt="logo">
                                        <h4 class="mt-1 mb-5 pb-1">Chat GG better than the copy ;)</h4>
                                    </div>

                                    <form @keypress.enter="startLogin">
                                        <p>Please login to your account</p>

                                        <div class="form-outline mb-2">
                                            <label class="form-label" for="form2Example11">Usuario</label>
                                            <input type="email" id="form2Example11" class="form-control"
                                                   placeholder="Phone number or email address" v-model="email"/>
                                        </div>

                                        <div class="form-outline mb-2">
                                            <label class="form-label" for="form2Example22">Contraseña</label>
                                            <input type="password" id="form2Example22" class="form-control" v-model="password"/>
                                        </div>

                                        <div class="text-center pt-1 mb-5 pb-1">
                                            <button
                                              class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                                              type="button"
                                              @click="startLogin"
                                              :disabled="loginInProcess"
                                            >
                                              Iniciar sesión
                                            </button>
                                        </div>

                                        <!-- <div class="d-flex align-items-center justify-content-center pb-4">
                                            <p class="mb-0 me-2">¿No tienes una cuenta?</p>
                                            <button type="button" class="btn btn-outline-danger">Create new</button>
                                        </div> -->

                                    </form>

                                </div>
                            </div>
                            <div class="col-lg-6 d-flex align-items-center login-gradient">
                                <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                                    <h4 class="mb-4">We are more than just a company</h4>
                                    <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </register>
</template>

<script>
import {AuthService} from "../services/AuthService.js";
export default {
  data() {
    return {
      email: null,
      password: null,
      loginInProcess: false,
    }
  },
  methods: {
    async startLogin(){
        try {
            this.loginInProcess = true
            if (!this.email || !this.password) return
            const {token} = await AuthService.login(this.email, this.password)
            this.loginInProcess = false
            localStorage.setItem('token', token)
            this.$router.push('/users')
        } catch (error) {
            this.loginInProcess = false
        }
      

    }
  }
}
</script>

<style scoped>
.login-gradient {
  background: #159957;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #155799, #159957);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #155799, #159957); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
</style>