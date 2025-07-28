async function agregarRegistro(nombre, datos) {
    try{
        let respuesta = await fetch('https://api.restful-api.dev/objects',
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify({
                name: nombre,
                data: datos
            }),

        })
        if(!respuesta.ok){
            throw new Error("Error en la solicitud: "+ respuesta.statusText) 
        }
        let data = await respuesta.json();
        console.log("Registro creado", data)
    }catch(error){
        console.error("Algo salio mal al crear el registro :", error)
    }
    
}

agregarRegistro("Mia", "Estudiante")