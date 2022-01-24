<template>
  <div v-show="show" class="wrapper">
    {{ msg }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'qqq',
      show: false
    }

  },
  methods: {
    showCpn(str) {
      this.msg = str
      this.show = true
    },
    hide() {
      this.show = false
    }
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  color: lightcoral;
  font-size: 20px;
}
</style>