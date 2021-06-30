<template>
  <myform class="form" :model='user' :rules='rules' ref='form'>
    <form-item label="用户名" prop="username" :rules='rules'>
      <!-- <formInput v-model='username'> </formInput> -->
      <formInput :value="user.username" @input="user.username = $event"></formInput>
    </form-item>
    <form-item label="密码" prop="password">
      <formInput type="password"  v-model="user.password"> </formInput>
    </form-item>
    <form-item>
     <button  @click="login">登 录</button>
    </form-item>
  </myform>
</template>

<script>
import formItem from "./component/form/form-item.vue";
import myform from "./component/form/form.vue";
import formInput from "./component/form/form-input.vue";
export default {
  name: "fromText",
  components: { myform, formItem, formInput },
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
          },
          {
            min: 6,
            max: 12,
            message: "请输入6-12位密码",
          },
        ],
      },
    };
  },
  methods: {
    login() {
        this.$refs.form.validate(valid =>{
            if(valid){
                alert('验证成功')
            }else{
                alert('验证失败')
                return false
            }
        })
    },
  },
};
</script>

<style>
  .form {
    width: 30%;
    margin: 150px auto;
  }
</style>
