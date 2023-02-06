importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js");

firebase.initializeApp({
    apiKey: "AIzaSyCwDRXVfuRHKld_DYRz_-h1D1PvBzgwLXY",
    authDomain: "bawarchicotz.firebaseapp.com",
    projectId: "bawarchicotz",
    storageBucket: "bawarchicotz.appspot.com",
    messagingSenderId: "589840391518",
    appId: "1:589840391518:web:e71a0911e9b68b70b4c3cf",
    measurementId: "G-77YJX72F7L",
    databaseURL: "...",
});


const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
});
