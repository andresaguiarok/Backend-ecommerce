//Clase 5 (Manejo de archivos JavaScript)

// //FS Sinc (modelue de node)
//  const fs = require("fs")

// //Crea un archivo archivo de texto con module de node 
// fs.writeFileSync("./data.txt", "Hola Coders! \n", "utf-8")

// //Lee un archivo
// if(fs.existsSync){
//     const contenidoArchivo = fs.readFileSync("./data.text", "utf-8")
//     console.log(contenidoArchivo);
// }
// //Agrega un archivo
// fs.appendFileSync("./data.txt", "Esto es un texto que se agrega \n", "utf-8")

// //Elimina un archivo
// fs.unlinkSync("./data.txt")


//EVOLUCION DE FS NODE_________________________________________________________________________________

// fs.writeFile("./data.txt", "Estamos creando contenido" , "utf-8", (error) =>{
//     if(error) console.log("ocurrio un error");
// })

// let contenidoTexto = "Holaaa"

// fs.appendFile("./data.txt", "agrego esto", "utf-8", (err) =>{
//     if (err){
//         return err
//     }
//     console.log("Agregado listo");
// })

// fs.readFile("./data.txt", "utf-8", (err, contenido) =>{
//     if(err) console.log("ha ocurrido un error");
//     console.log(contenido);
// })

// fs.unlink("./data.txt", (err) =>{
//     if(err) console.log("ocurrio un error");
//     console.log("eliminado");
// })

//PROMESAS CON FS ____________________________________________________________________________________

//const fs = require ("fs")
const {promise, appendFile} = require("fs")
const fs = promise

//fs.writeFile("ruta", "texto", "utf-8", "callback")
const operacionAsyncronica = async () => {
    try{
        // fs.writeFile("./data.txt", "Texto nuevo", "utf-8")
        // .then (()=> console.log("termino de escribir"))
        // .catch(err => console.log(err))
        await fs.appendFile("./data.txt", "se agrega algo", "utf-8")

        let contenido = await fs.readFile("./data.txt", "uft-8")
        console.log(contenido);

        await fs.unLink

    }catch (err){
        console.log(err);
    }
}

operacionAsyncronica()