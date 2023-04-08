import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import App from './App.vue'
import firebase from 'firebase/compat';
import './assets/main.css'

import router from './router';

const firebaseConfig = {
    apiKey: "AIzaSyCtm9uzx_t_FmCVsju6EBLmGNf61b5SLPU",
    authDomain: "nlcn-account.firebaseapp.com",
    projectId: "nlcn-account",
    storageBucket: "nlcn-account.appspot.com",
    messagingSenderId: "585066234408",
    appId: "1:585066234408:web:9417a8880e59d445a06b1d"
  };

firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app');

// createApp(App).mount('#app')
