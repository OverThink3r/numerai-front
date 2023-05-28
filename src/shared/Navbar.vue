<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Chatgg</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Usuarios</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Chart</a>
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