

class Producto {

    constructor(codigo,nombre, stock = 0, ubicacion ){
        this.codigo = codigo;
        this.nombre = nombre.toUpperCase();
        this.stock = stock;
        this.ubicacion = ubicacion.toUpperCase()
    }

    //METODOS

    aumentarStock(cantidad){
        this.stock += cantidad;
    }

    disminuirStock(cantidad){
        if(this.stock > cantidad){
            this.stock -= cantidad;
        }else{alert("No hay suficiente stock disponible")}
    }

    cambiarUbicacion(nuevaUbicacion){
        this.ubicacion = nuevaUbicacion
    }
}




