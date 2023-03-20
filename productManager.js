const listaDeAutos = []

class ProductManager {
    constructor (){
        this.products = listaDeAutos
    }

    /*Metodo que agrega objetos a un array , valida que todos los campos esten completos ,
    general code automaticamente eh unico y valida si el code se repite  */
    addProduct(nuevoAuto){
        if(nuevoAuto.title === '' || nuevoAuto.description === '' || 
           nuevoAuto.price === '' || nuevoAuto.thumbnail === '' ||
           nuevoAuto.code === '' || nuevoAuto.stock === '') return 'Complete los campos correctamente'
        
        let auto = this.products.find(auto => auto.code === nuevoAuto.code)
        if (auto) return "El auto con este code ya fue ingresado"

        return this.products.push({code:this.products.length+1, ...nuevoAuto})
    }

    //Metodo que retorna el array
    getProduct(){
        return this.products
    }

    //Metodo que busca el code de un objeto y devuelve si existe o no 
    getProductById(code){
        let auto = this.products.find(auto => auto.code === code)
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
    stock: 12
})

autos.addProduct({
    title: 'Ford Focus',
    description: 'Modelo: 2020' ,
    price: 22.899 ,
    thumbnail: 'Sin imagen' ,
    stock: 16
})

//Prueba de objeto cual da "Complete los campos correctamente"
console.log(autos.addProduct({
    title: 'Jeep Renage',
    description: 'Modelo: 2019' ,
    price: '' ,
    thumbnail: '' ,
    stock: ''
})); 

//Prueba de objeto cual el resultado da "El auto con este code ya fue ingresado"
console.log(autos.addProduct({
    title: 'Audi A4',
    description: 'Modelo 2018' ,
    price: '25.999' ,
    thumbnail: 'sin img' ,
    stock: 9 ,
    code : 1
})); 

//Retorna el array con sus objetos pusheados
console.log(autos.getProduct());

//Muestra que el code 5 no existe
console.log(autos.getProductById(5));
