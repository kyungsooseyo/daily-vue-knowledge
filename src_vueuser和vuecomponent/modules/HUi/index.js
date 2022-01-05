import HButton from './components/HButton.vue';
import HInput from './components/HInput.vue';
const components = [HButton, HInput];
const HUI = {
  //= 执行install方法会自动将Vue传递过来
  install(Vue) {
    components.forEach(component=>{
      Vue.component(component.name,component)
    })
  },
};
export default HUI;
