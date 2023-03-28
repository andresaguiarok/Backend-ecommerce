const listaDeAutos = []

class ProductManager {
    constructor (){
        this.products = listaDeAutos
    }

    /*Metodo que agrega objetos a un array , valida que todos los campos esten completos ,
    genera id automaticamente y valida si el code se repite  */
    addProduct(nuevoAuto){
        if(nuevoAuto.title === '' || nuevoAuto.description === '' || 
           nuevoAuto.price === '' || nuevoAuto.thumbnail === '' ||
           nuevoAuto.code === '' || nuevoAuto.stock === '') return 'Complete los campos correctamente'
        
        let auto = this.products.find(auto => auto.code === nuevoAuto.code)
        if (auto) return  "El auto con este code ya fue ingresado"

        return this.products.push({id: this.products.length+1, ...nuevoAuto})
    }

    //Metodo que retorna el array
    getProduct(){
        return this.products
    }

    //Metodo que busca el id de un objeto y devuelve si existe o no
    getProductById(autoId){
        let auto = this.products.find(auto => auto.id === autoId)
        if (!auto) return "Not Found"
        return auto
    }
}

const autos = new ProductManager ();

//Prueba de objeto agregados al array
autos.addProduct({
    title: 'Ford Focus',
    description: 'Modelo: 2018' ,
    price: 20.699 ,
    thumbnail: 'Sin imagen' ,
    code: "Ax34bv",
    stock: 12
})

autos.addProduct({
    title: 'Ford Fiesta',
    description: 'Modelo: 2020' ,
    price: 22.899 ,
    thumbnail: 'Sin imagen' ,
    code: "Ac67mn8",
    stock: 16
})

//Prueba de objeto cual da "Complete los campos correctamente"
console.log(autos.addProduct({
     title: 'Jeep Renage',
     description: 'Modelo: 2019' ,
     price: '' ,
     thumbnail: '' ,
     code: "Ad34jh",
     stock: ''
})); 

//Prueba de objeto cual el resultado da "El auto con este code ya fue ingresado"
console.log(autos.addProduct({
    title: 'Audi A4',
    description: 'Modelo 2018' ,
    price: '25.999' ,
    thumbnail: 'sin img' ,
    stock: 9 ,
    code : "Ax34bv"
})); 

//Retorna el array con sus objetos pusheados
console.log(autos.getProduct());

//Muestra que el id 5 no existe y retorna "Not Found"
console.log(autos.getProductById(2));

// deleteProduct = async(autoId) => {
//     let traerDatos = await this.readProducts()
//     let autosFiltrados = traerDatos.filter(auto => auto.id != autoId)

//     await fs.promises.writeFile(this.path, JSON.stringify(autosFiltrados))