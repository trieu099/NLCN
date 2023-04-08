<template>
    <div class="home">
        <h1>
            Home {{name}}
        </h1>
        <router-link to="/logout"> Logout</router-link>
        <br>
        <button class="logout" @click="Logout">Logout</button>

    </div>
</template>
<script>
import { ref, onBeforeMount } from 'vue';
import firebase from 'firebase/compat';
export default {
    setup () {
        const user = firebase.auth().currentUser;
        
        const name = ref("");
        onBeforeMount(() => {
            if(user) {
                name.value = user.email.split('@')[0];
            }
        }
        )
        const Logout = () => {
            firebase
                .auth()
                .signOut()
                .then(() => console.log("Signed out"))
                .catch(err => alert(err.message));
                
        }
        return {
            name,
            Logout,
        }
    }
}

</script>