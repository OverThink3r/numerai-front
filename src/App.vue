<template>
<!--  <LoginRegisterPage />-->
<!--  <UsersPage />-->
  <router-view></router-view>


</template>

<script>
import LoginRegisterPage from "./pages/LoginRegisterPage.vue";
import UsersPage from "./pages/UsersPage.vue";

export default {
  components: {UsersPage, LoginRegisterPage}

}
</script>

<style scoped>
</style>
