<template>
  <div
    class="absolute top-14 w-11/12 mx-6 h-10 flex justify-center items-center z-50"
  >
    <transition name="fade">
      <div
        v-if="show"
        class="rounded py-2 py-4"
        :class="{
          'bg-green-400': type === 'success',
          'bg-red-600': type === 'danger',
          'bg-blue-400': type === 'info'
          }"
      >
        {{ message }}
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      show: (state) => state.alert.show,
      type: (state) => state.alert.type,
      message: (state) => state.alert.message,
    }),
  },
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.05s ease-in;
}
.fade-enter,
.fade-leave-to {
  transform: translateY(-100px);
  opacity: 0;
}
</style>
