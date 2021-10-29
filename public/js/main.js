const firebaseConfig = {
    apiKey: "AIzaSyAqDmRh4jLFRNBPk66HXP0jJQMdwWXrJvI",
    authDomain: "sesinovoensinomedio.firebaseapp.com",
    projectId: "sesinovoensinomedio",
    appId: "1:476150079392:web:a4bbe058602ec6ee308ec5",
  };

start()
function start(){
    const firebase = require("firebase-admin");

firebase.initializeApp(firebaseConfig)
var db = firebase.firestore();

console.log("teste")

db.collection("conteúdos").doc("teste").get().then(function(doc){
    if(doc.exists){
        console.log("existe")
    }else{
        console.log("Não existe")
    }
})
}
