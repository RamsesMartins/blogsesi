const firebase = require("firebase");

firebase.initializeApp({
    apiKey: "",
    authDomain:"",
    projectId:"",
})
var db = firebase.firestore();