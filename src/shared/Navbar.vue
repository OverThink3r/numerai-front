<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <router-link class="navbar-brand" to="/chat">NumerAI</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <router-link class="nav-link" to="/users">Usuarios</router-link>
                </li>
            </ul>
        </div>
        <span class="navbar-text btn btn-outline-danger text-danger mx-3" style="cursor: pointer" @click="logOut">Salir</span>
    </nav>
</template>

<script>
export default {
  methods: {
    logOut(){
      localStorage.clear()
      this.$router.push({name: 'loginPage'})
    }
  }
}
</script>

<style scoped>

</style>