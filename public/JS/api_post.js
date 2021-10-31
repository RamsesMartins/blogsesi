import { getFirestore,doc,addDoc, setDoc,collection } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-firestore.js"
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
        const POST = setDoc(doc(db,"conteúdos",postagem.title), postagem)
        alert("Postagem Criada")
      } catch (e) {
        console.log(e)
      }
    })