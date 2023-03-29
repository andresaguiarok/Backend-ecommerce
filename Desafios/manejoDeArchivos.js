const fs = require("fs");
const listaDeAutos = []

class ProductManager {
    constructor (){
        this.products = listaDeAutos
        this.path = "./data.json"
    }

    addProduct = async(title, description, price, thumbnail, code, stock) => {

        let nuevoAuto = {id: this.products.length+1, title, description, price, thumbnail, code, stock}

        if(nuevoAuto.title === '' || nuevoAuto.description === '' || 
           nuevoAuto.price === '' || nuevoAuto.thumbnail === '' ||
           nuevoAuto.code === '' || nuevoAuto.stock === '') return 'Complete los campos correctamente'
    
        let auto = this.products.find(auto => auto.code == nuevoAuto.code)
        if(auto) return  "El auto con este code ya fue ingresado"
    
        this.products.push(nuevoAuto)
            
        await fs.promises.writeFile(this.path, JSON.stringify(this.products, "null", 2), "utf-8")
    };

    readProducts = async () => {
        let listaDeAutos = await fs.promises.readFile(this.path, "utf-8")
        const autos = JSON.parse(listaDeAutos)
        return autos
    };

    getProducts = async() => {
        let mostrarAutos = await this.readProducts()
        return mostrarAutos
    };

    getProductById = async(autoId) => {
        let buscarId = await this.readProducts()
        let autoEncontrado = buscarId.find(auto => auto.id == autoId)
        
        if (!autoEncontrado) return "Not found"
        return autoEncontrado
    }

    updateProduct = async (autoId, {...datosNuevos}) => {
        await this.deleteProduct(autoId)
        
        let autoDesactualizado = await this.readProducts(autoId)
        let actualizarAuto = autoDesactualizado.find(auto => auto.id === autoId)
        if (!actualizarAuto) return "No existe"

        actualizarAuto = [{id : autoId, ...datosNuevos}, ...autoDesactualizado]

        await fs.promises.writeFile(this.path, JSON.stringify(actualizarAuto, "null",2), "utf-8")
        return "Producto actualizado"
    }

    deleteProduct = async(autoId) => {
        let traerDatos = await this.readProducts()
        let autosFiltrados = traerDatos.filter(auto => auto.id != autoId)

        await fs.promises.writeFile(this.path, JSON.stringify(autosFiltrados, "null", 2))
        return "Producto eliminado"
    }
}

  const autos = new ProductManager ();

//Prueba de objetos 
autos.addProduct('Ford Focus', 'Modelo: 2018' , 16.699 , 'Sin imagen' , "Ax34bv", 12);
autos.addProduct('Jeep Renage','Modelo: 2019' ,23.899 ,'Sin imagen' ,"Ab987xz",10);
autos.addProduct('Bmw 120i','Modelo: 2016' ,22.999 ,'Sin imagen' ,"Ac67mn8",8);
autos.addProduct('Ford Fiesta','Modelo: 2020' ,15.899 ,'Sin imagen' ,"Ay27op7",9);

//Prueba de objetos, el primero da "code ya ingresado" y el segundo da "complete los campos"
autos.addProduct('Jeep Renage','Modelo: 2015' ,18.899 ,'Sin imagen' ,"Ab987xz",8)
autos.addProduct('Audi A4', '', 21.999, 'dfd', '', '')

//getProducts trae el array con los objetos
autos.getProducts().then(auto => console.log(auto))

//El primer getProductById da el objeto delproducto y el segundo getProductById da "Not found"
autos.getProductById(3).then(auto => console.log(auto)) 
autos.getProductById(8).then(auto => console.log(auto))

//updateProduct actualiza el objeto
autos.updateProduct(1,{
    title : "Ford Focus Rs",
    description: "Modelo 2020",
    price : 22.599,
    thumbnail : "https://www.elcarrocolombiano.com/wp-content/uploads/2020/04/20202004-FORD-FOCUS-RS-PORTADA-01.jpg",
    code: "Ax34bv",
    stock: 8
})

autos.updateProduct(3,{
    title: "Bmw 120i",
    description: "Modelo: 2016",
    price: 22.999,
    thumbnail: "https://www.podersa.com.ar/plantilla/assets/vehiculos2/120I.jpg",
    code: "Ac67mn8",
    stock: 8
})

//deleteProduct elimina el producto cuyo id sea igual
autos.deleteProduct()