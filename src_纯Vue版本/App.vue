<template>
  <div id="app">
    <Count></Count>
  </div>
</template>

<script>
import Count from './components/Count.vue';
export default {
  mounted() {
    console.log(this, '---app')
  },
  name: "App",
  components: { Count },

  data() {
    return {};
  },

  methods: {},

};
</script>

<style>
</style>
