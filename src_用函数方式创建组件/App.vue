<template>
  <div id="app">
    <button @click="handleClick">按钮</button>
  </div>
</template>

<script>
import { showToast } from './components/toast/toast';
export default {
  name: "App",
  mounted() {
  },
  data() {
    return {}
  },
  methods: {
    handleClick() {
      showToast('啦啦啦')
    }
  },
};
</script>

<style>
</style>
