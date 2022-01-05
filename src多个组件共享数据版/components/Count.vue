<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h1>当前求和为放大10倍：{{ bigSum }}</h1>
    <h3>我在{{ school }}，学习{{ subject }}</h3>
    <h3>下方组件的总人数是:{{personList.length}}</h3>
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

  },
  name: "Count",
  data() {
    return {
      n: 1, //~用户选择的数字
    };
  },
  computed: {
  
    ...mapState(['sum', 'school', 'subject','personList']),
    ...mapGetters(['bigSum'])
  },
  methods: {
   
    //= 若想使用数组的写法，这个方法名要与mutations中保持一致，同时也需要修改在按钮上调用方法的名字
    ...mapMutations(['JIA', 'JIAN']),

    // = 若想使用数组的写法，这个方法名要与actions中保持一致，同时也需要修改在按钮上调用方法的名字
    ...mapActions(['jiaOdd','jiaWait']),
  },
};
</script>

<style lang="css" scoped>
button {
  margin-left: 10px;
}
</style>