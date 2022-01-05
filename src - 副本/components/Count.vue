<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h1>当前求和为放大10倍：{{ bigSum }}</h1>
    <h3>我在{{ school }}，学习{{ subject }}</h3>
    <h3>下方组件的总人数是:{{ personList.length }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <!-- <button @click="increment">+</button> -->
    <!-- <button @click="decrement">-</button> -->
    <!-- 若想用mapMutations的方法 必须要自己进行手动传参 -->
    <!-- <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button> -->
    <button @click="JIA(n)">+</button>
    <button @click="JIAN(n)">-</button>

    <!-- <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button> -->

    <!-- 若想用mapActions的方法 必须要自己进行手动传参 -->
    <!-- <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button> -->

    <button @click="jiaOdd(n)">当前求和为奇数再加</button>
    <button @click="jiaWait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  mounted() {
    console.log(this.$store);
  },
  name: "Count",
  data() {
    return {
      n: 1, //~用户选择的数字
    };
  },
  computed: {
    //~ 数组里面每个元素的值必须是store中state里面有的（保持一致）
    // ...mapState(['countAbout', 'personAbout',]),

    //+ 若想从mapState中直接取到 ，需要在vuex的每个模块中进行namespaced进行配置；这样就可以直接去countAbout中的state里面找sum，school，subject，就可以直接mastach语法中直接写了 不用一直点点点的的语法
    ...mapState('countAbout', ['sum', 'school', 'subject']),
    ...mapState('personAbout', ['personList',]),
    ...mapGetters('countAbout', ['bigSum'])

  },
  methods: {
    ...mapMutations('countAbout', ['JIA', 'JIAN']),
    ...mapActions('countAbout', ['jiaOdd', 'jiaWait']),
  },
};
</script>

<style lang="css" scoped>
button {
  margin-left: 10px;
}
</style>