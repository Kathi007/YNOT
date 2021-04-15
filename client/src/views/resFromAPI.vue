<template>
  <div class="flex items-center justify-center">
    <p class="text-3xl text-center">{{$t('resFromAPI.loading')}}</p>
  </div>
</template>

<script>
import axios from 'axios'
// import jwt_decode from 'jwt-decode'

export default {
  components: {
  },
  created () {
    this.callAPI();
  },
  methods: {
    async callAPI() {
      let res = await axios.get(`http://localhost:3001/user/getuser/${this.$route.query.id}`)   
      console.log("API "+res.data)
      this.$store.dispatch("setToken", {aT: this.$route.query.aT, rT: this.$route.query.rT, userId: this.$route.query.id});
      this.$store.dispatch("setUser", res.data);
      this.$router.push("/home");
    },
  },
};
</script>

<style lang="scss" scoped></style>
