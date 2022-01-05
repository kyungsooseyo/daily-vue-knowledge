
<template>
  <div>
    <h1>人员列表</h1>
    <h3>上方组件的求和为:{{ sum }}</h3>
    <h3>列表中第一人的名字是:{{ firstPersonName }}</h3>
    <input type="text" placeholder="请输入名字" v-model="name" />
    <button @click="add">添加</button>
    <button @click="addWang">添加一个姓王的人</button>
    <ul>
      <li v-for="item in personList" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>


<script>
import { nanoid } from 'nanoid'
export default {
  name: 'Person',
  data() {
    return {
      name: ''
    }
  },
  computed: {
    personList() {
      return this.$store.state.personAbout.personList
    },
    sum() {
      return this.$store.state.countAbout.sum
    },
    firstPersonName() {
      // = 要想取getters中的数据，要用下面这种语法（不用mapGetters确实有点恶心）
      return this.$store.getters['personAbout/firstPersonName']
    }
  },
  methods: {
    add() {
      const personObj = { id: nanoid(), name: this.name }
      //! 若想commit personAbout中的mutations，且不想用mapMuatations方法，需要用到 / 来指定
      this.$store.commit('personAbout/ADD_PERSON', personObj)
      this.name = ''
    },
    addWang() {
      const personObj = { id: nanoid(), name: this.name }
      //+ 要调用特定模块中的actions 也要用这种路径的方式
      this.$store.dispatch('personAbout/addPersonWang', personObj)
      this.name = ''
    }
  }
}
</script>
<style lang="">
</style>