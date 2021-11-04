import { getFirestore,doc,addDoc, setDoc,collection } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-firestore.js"
const db=getFirestore()
document.getElementById("botao").addEventListener("click",(event)=>{
  event.preventDefault()
    var titulo, conteudo, data
    titulo = document.getElementById("title")
    conteudo = document.getElementById("conteudo")
    data =  document.getElementById("data")
    var postagem={
        title: titulo.value,
        texto: conteudo.value,
        data: data.value
      }
      try {
        const POST = setDoc(doc(db,"conteúdos",postagem.title), postagem)
        
      }catch (e) {
        console.log(e)
      }finally{
        alert("Postagem Criada")
        titulo.value = ""
      } 
    })