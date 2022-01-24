import Vue from 'vue';
import Toast from './Toast.vue';
// console.log(Toast); // 这个toast就是个组件对象
const ToastConstructor = Vue.extend(Toast); //~通过extend方法就能够拿到组件的构造函数
export function showToast(str) {
  const toastComponent = new ToastConstructor(str).$mount();
  console.log(toastComponent);
  document.body.appendChild(toastComponent.$el);
  toastComponent.showCpn(str);
  setTimeout(() => {
    toastComponent.hide();
    toastComponent.$el.parentNode.removeChild(toastComponent.$el);
  }, 1000);
}
