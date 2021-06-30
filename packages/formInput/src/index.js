import input from './src/form-input.vue'

input.install = Vue => {
    Vue.component(input.name,input)
}
export default input