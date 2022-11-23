const email = document.getElementById("txtEmail");
const error = document.getElementById("emailVal");
const btnEnviar = document.getElementById("btnEnviar");
let mensaje ="";

btnEnviar.onclick = function () {
let vemail = email.value;
let arroba = 0;
//PROCESOS
arroba = vemail.indexOf("@");
if(arroba < 0){
    mensaje = "Email invalido";
}else{
    window.location.replace("index.html");
    //window.location.assign("pagina1.html");
}
//SALIDA
error.innerText = mensaje;

}
