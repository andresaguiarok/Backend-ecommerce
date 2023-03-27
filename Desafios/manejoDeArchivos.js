const fs = require("fs");

class ProductManager {
    constructor (){
        this.products = []
        this.path = "./Desafios/data.json"
    }

    addProduct = async(title, description, price, thumbnail, code, stock) => {
        try {
            let nuevoAuto = {id: this.products.length+1, title, description, price, thumbnail, code, stock};

            if(nuevoAuto.title === '' || nuevoAuto.description === '' || 
               nuevoAuto.price === '' || nuevoAuto.thumbnail === '' ||
               nuevoAuto.code === '' || nuevoAuto.stock === '') return 'Complete los campos correctamente'
    
            let auto = this.products.find(auto => auto.code == nuevoAuto.code)
            if(auto) return  "El auto con este code ya fue ingresado"
    
            this.products.push(nuevoAuto)
            
            await fs.promises.writeFile(this.path, JSON.stringify(this.products))
        } catch (error) {
            return error
        }
    };

    readProducts = async () => {
        let listaDeAutos = await fs.promises.readFile(this.path, 'utf-8');
        const autos = JSON.parse(listaDeAutos);
        return autos
    }

    getProducts = async() => {
        try {
            let mostrarAutos = await this.readProducts()
            return mostrarAutos
        } catch (error) {
            console.log(error);
        }
    }

    getProductById = async(autoId) => {
        try {
            let buscarId = await this.readProducts()
            let autoBuscado = buscarId.find(auto => auto.id === autoId)
        
            if (!autoBuscado) return "Not Found"
            return autoBuscado
        } catch (error) {
            console.log(error);
        }
    }

    updateProduct = () => {}
}

  const autos = new ProductManager ();
// //Prueba de objetos I
// autos.addProduct('Ford Focus', 'Modelo: 2018' , 16.699 , 'Sin imagen' , "Ax34bv", 12)
// autos.addProduct('Jeep Renage','Modelo: 2019' ,23.899 ,'Sin imagen' ,"Ab987xz",16)

// //Prueba de objetos, el primero da "code ya ingresado" y el segundo da "complete los campos"
// autos.addProduct('Jeep Renage','Modelo: 2015' ,18.899 ,'Sin imagen' ,"Ab987xz",8)
// autos.addProduct('Audi A4', '', 21.999, 'dfd', '', '')

// //Prueba de objetos II
// autos.addProduct('Bmw 120i','Modelo: 2016' ,22.999 ,'Sin imagen' ,"Ac67mn8",16)
// autos.addProduct('Ford Fiesta','Modelo: 2020' ,15.899 ,'Sin imagen' ,"Ac67mn8",16)

autos.getProducts()
autos.getProductById(6)


// node ./Desafios/manejoDeArchivos.js