<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h1>当前求和为放大10倍：{{ bigSum }}</h1>
    <h3>我在{{ school }}，学习{{ subject }}</h3>
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
    <button @click="JIA(n)">-</button>
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

  },
  name: "Count",
  data() {
    return {
      n: 1, //~用户选择的数字
    };
  },
  computed: {
    //, mapstate返回的是一个对象，对象里面he就对应去取state中的sum值 (第一种写法)；he本身就是个函数，所以才能用在compoted中
    // ...mapState({ he: 'sum', xuexiao: 'school', xueke: 'subject' })
    // ~ 第二种写法，数组中每个元素要与state中保持一致
    ...mapState(['sum', 'school', 'subject']),
    ...mapGetters(['bigSum'])
  },
  methods: {
    // increment() {
    //   this.$store.dispatch('jia', this.n)
    // },

    // decrement() {
    //   this.$store.dispatch('jian', this.n)
    // },
    //! 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations
    // ...mapMutations({increment:'JIA',decrement:'JIAN'}),

    //= 若想使用数组的写法，这个方法名要与mutations中保持一致，同时也需要修改在按钮上调用方法的名字
    ...mapMutations(['JIA', 'JIAN']),


    // ...mapActions({ incrementOdd: 'jiaOdd', incrementWait: 'jiaWait' }),

    // = 若想使用数组的写法，这个方法名要与actions中保持一致，同时也需要修改在按钮上调用方法的名字
    ...mapActions(['jiaOdd','jiaWait']),
    // incrementOdd() {
    //   this.$store.dispatch('jiaOdd', this.n)
    // },
    // incrementWait() {
    //   this.$store.dispatch('jiaWait', this.n)
    // },
  },
};
</script>

<style lang="css" scoped>
button {
  margin-left: 10px;
}
</style>