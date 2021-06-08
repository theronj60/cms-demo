<template>
  <div>
    login page
    <div>
      <button class="py-2 px-4 bg-gray-400 text-white" @click="login()">login</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      credentials: {
        userName: 'user1234',
        password: 'password'
      }
    }
  },
  methods: {
    login() {
      this.$store.dispatch('logIn', this.credentials).then((response) => {
        this.$router.push('/')
      })
    }
  },
}
</script>

<style>

</style>
