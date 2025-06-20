    
fetch('estudiantes.json')
.then(res => res.json())
.then((obtenerdatos) => {
    datosJson = obtenerdatos;
});

let names = document.getElementById("nombres").value;
function registrarNota(nombre){
    
    let respuesta = parseInt(prompt("cual es tú nota?"));
    if (respuesta >= 0 && respuesta <= 100){
        console.log(respuesta);
    }
    else{
        alert("por favor inserte su nota");
    };
}




function registrarnota(){

 estudiantes.forEach(estudiante=> {
    
 });
}