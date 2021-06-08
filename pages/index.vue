<template>
  <div>
    <div v-if="!isAuth">
      <Login />
    </div>
    <div v-else>
      Welcome
    </div>
  </div>
</template>

<script>
import Login from '../components/Login'

export default {
  components: {
    Login,
  },
  computed: {
    isAuth() {
      return this.$store.state.isAuth
    },
  },
}
</script>
