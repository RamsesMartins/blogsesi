import { getFirestore,doc,addDoc,collection } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-firestore.js"
const db=getFirestore()
document.getElementById("botao").addEventListener("click",(event)=>{
  event.preventDefault()
    var titulo, conteudo, data
    titulo = document.getElementById("title").value
    conteudo = document.getElementById("conteudo").value
    data =  document.getElementById("data").value
    var postagem={
        title: titulo,
        texto: conteudo,
        data: data
      }
      try {
        const docRef = addDoc(collection(db, "conteúdos"), postagem);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

    })