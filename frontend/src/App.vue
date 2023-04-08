<script>
import { useRouter } from "vue-router";
import firebase from "firebase/compat";
import { onBeforeMount } from "vue";
// import AppHeader from '@/components/AppHeader.vue';
export default {
  // components: {
  //   AppHeader,
  // },
  setup () {
    const router = useRouter();
    onBeforeMount(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if(user) {
          router.replace("/library");
        }
      });
    });
  },
// data() {
//        return {
//          username: localStorage.authUser
//        }

// }
};

</script>
<template>
  
  
  <br>
    <div class="container mt-3">
      <router-view />

    </div>
</template>

<style>
  .page {
    max-width: 1366px;
    margin: auto;
  }
  .mt-3{
    max-width: 1366px;
  }
</style>