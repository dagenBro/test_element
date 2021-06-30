<template>
  <div>
      <input :type='type' :value='value' @input='handleInput' v-bind='$attrs'>
  </div>
</template>

<script>
export default {
    name:'form-input',
    inheritAttrs:false,
    props:{
        value:{
            type:String
        },
        type:{
            type:String,
            defalut:'text'
        }
    },
    methods:{
        handleInput(e){
            this.$emit('input',e.target.value)
            const findParent = parent => {
                while(parent){
                    if(parent.$options.name === 'form-item'){
                     break
                    }else{
                        parent = parent.$parent
                    }
                }
                return parent
            }
            const parent = findParent(this.$parent)
            console.log(parent)
            if(parent){
                parent.$emit('validate')
            }
        }
    }
}
</script>

<style>

</style>