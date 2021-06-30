import vue from 'vue'
// import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// import Login from './src/Login.vue'
import Login from './src/from-text.vue'

// vue.use(ElementUI)

new vue({
    el:'#app',
    render:h => h(Login),

})