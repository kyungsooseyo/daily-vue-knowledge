<template>
  <div>
    <h1>当前求和为：{{sum}}</h1>
    <select v-model.number="n">
      <!-- 通过绑定的方式才能获取到真的数字123，否则就是字符串123 -->
      <!-- <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option> -->
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
export default {
  name: "Count",
  data() {
    return {
      n: 1, //~用户选择的数字
      sum: 0,
    };
  },
  methods: {
    increment() {
      this.sum += this.n;
    },
    decrement() {
      this.sum -= this.n;
    },
    incrementOdd() {
      if (this.sum % 2) {
        this.sum += this.n;
      }
    },
    incrementWait() {
      setTimeout(() => {
        this.sum += this.n;
      }, 2000);
    },
  },
};
</script>

<style lang="css" scoped>
button {
  margin-left: 10px;
}
</style>