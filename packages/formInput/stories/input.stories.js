
import formInput from '../'

export default {
    title:" formInput ",
    components: formInput 
}
export const Text = () => ({
    components:{ formInput },
    template:'<formInput v-model="value"></formInput>',
    data(){
        return {
            value:'admin'
        }
    }
})

export const Password = () => ({
    components: {  formInput  },
    template: '<formInput  type="password" v-model="value"></formInput>',
    data () {
      return {
        value: 'admin'
      }
    }
  })
  

// import LgInput from '../'

// export default {
//   title: 'LgInput',
//   component: LgInput
// }

// export const Text = () => ({
//   components: { LgInput },
//   template: '<lg-input v-model="value"></lg-input>',
//   data () {
//     return {
//       value: 'admin'
//     }
//   }
// })

// export const Password = () => ({
//   components: { LgInput },
//   template: '<lg-input type="password" v-model="value"></lg-input>',
//   data () {
//     return {
//       value: 'admin'
//     }
//   }
// })
