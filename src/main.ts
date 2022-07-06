import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from "@/utils/i18n"
import log from "./utils/log"
import Color from "./configs/Color"
import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
  measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID,
};

initializeApp(firebaseConfig);

const app = createApp(App);

app.use(store);
app.use(router);
app.use(i18n);

// variable global
app.config.globalProperties.Color = Color;

// function global
app.mixin({
  methods: { ...log },
});

app.mount("#app");
