<template>
  <div class="container">
    <div class="d-flex flex-column justify-content-center">
      <div class="mx-auto">
        <router-link to="/">Back to Login Page</router-link> | <router-link to="/login">Login</router-link>
      </div>
      <h5 class="text-center my-3 text-danger">
        You are are logged out!
      </h5>
      <p class="text-center mt-3">Bye!</p>
    </div>
  </div>
</template>

<script>
export default {
  async created() {
    localStorage.clear()
},
};
</script>
