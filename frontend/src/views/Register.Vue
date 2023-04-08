<!-- eslint-disable vue/comment-directive -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <AppHeader></AppHeader>
  <div className="register">
      <form @submit.prevent="Register">
          <h1 class="text-center mb-5">Đăng ký</h1>
          <div class="form-group mt-5">
              <label>Email</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
          </div>
          <div class="form-group">
              <label>Mật khẩu</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
          </div>
          <br>
          <button type="submit" class="btn btn-primary">Đăng ký</button>
          <p class="mt-5"><router-link to="/">Đăng Nhập</router-link></p>
      </form>
  </div>
</template>

<script>
import firebase from 'firebase/compat';
import { ref } from "vue";
import AppHeader from "@/components/AppHeader.vue"


export default {
    components: {
      AppHeader,
    },
  setup() {
      const email = ref("");
      const password = ref("");
      const Register = () => {
          firebase
              .auth()
              .createUserWithEmailAndPassword(email.value, password.value)
              .then(user => {
                  alert("Thêm tài khoản thành công!");
                  console.log(user);
              })
              .catch(err => alert(err.message));
      }
      return {
          Register,
          email,
          password
      }
  }
}
</script>

<style>
.register {
  /* margin-left: 25%;
  margin-right: 25%; */
  font-size: 20px;
  margin: auto;
  width: 1000px;
}

</style>