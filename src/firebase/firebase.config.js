import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyB1Kd3j90nxfqdqyVCSyBG6jM1tRw6rZZk",
    authDomain: "ema-jon-aurt-61m.firebaseapp.com",
    projectId: "ema-jon-aurt-61m",
    storageBucket: "ema-jon-aurt-61m.appspot.com",
    messagingSenderId: "1064666564155",
    appId: "1:1064666564155:web:7872759ced1007665bfe1e"
};

const app = initializeApp(firebaseConfig);

export default app