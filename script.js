/***---------------CLASE -------------------------------------- */
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

/***-------------BASE DE DATOS UTILIZADA -------------------------------- */

let data = [
    {codigo: '0001', nombre: 'MARTILLO', stock: 20, ubicacion: 'A120302'},
    {codigo: '0002', nombre: 'CLAVOS', stock: 250, ubicacion: 'A211009'},
    {codigo: '0003', nombre: 'SIERRA', stock: 20, ubicacion: 'A233009'},
    {codigo: '0004', nombre: 'PEGAMENTO', stock: 30, ubicacion: 'A010302'},
    {codigo: '0005', nombre: 'CEMENTO', stock: 50, ubicacion: 'A031009'},
    {codigo: '0006', nombre: 'CUERDA', stock: 200, ubicacion: 'A232014'}
]


/****------------COMIENZO DE LA FUNCION -------------------------------- */

function inventario (nombreDB){  
  
    let menu = prompt("Bienvenidos al sistema de gestion de inventario v0.1\n\nSeleccionar una opcion:\n\n1-Ingresar nuevo producto\n2-Consultar Stock disponible\n3-Consultar ubicacion\n4-Dar de baja un producto\n5-Mostrar base de datos completa\n6-SALIR")
    while( menu!=6 ){
        //INGRESAR PRODUCTOS

        if( menu==1 ){
            let codigo = prompt("Ingrese el CODIGO del producto")
            let nombre = prompt("Ingrese NOMBRE del producto")
            let stock = Number(prompt("Ingrese CANTIDAD del producto"))
            let ubicacion = prompt("Ingrese la UBICACION del producto")
            const producto = new Producto(codigo, nombre.toUpperCase(), stock, ubicacion.toUpperCase())
            nombreDB.push(producto)
            
            let opcion = confirm("Desea ingresar otro producto?")
            if( opcion==true ){
                menu=1;
            }else{
                menu = prompt("Bienvenidos al sistema de gestion de inventario v0.1\n\nSeleccionar una opcion:\n\n1-Ingresar nuevo producto\n2-Consultar Stock disponible\n3-Consultar ubicacion\n4-Dar de baja un producto\n5-Salir")
            }
        // CONSULTA DE STOCK

        }else if( menu==2 ){
            let codigo = prompt("Consultar Stock por CODIGO o NOMBRE") 
            try{
                let busqueda = nombreDB.find( producto => (producto.codigo === codigo) || (producto.nombre === codigo.toUpperCase()) )
                alert(`El stock disponible de ${busqueda.nombre} es de ${busqueda.stock} unidades`)
            }
            catch(error){
                alert("El producto no fue encontrado!")
            }

            menu = prompt("Bienvenidos al sistema de gestion de inventario v0.1\n\nSeleccionar una opcion:\n\n1-Ingresar nuevo producto\n2-Consultar Stock disponible\n3-Consultar ubicacion\n4-Dar de baja un producto\n5-Mostrar base de datos completa\n6-SALIR")
        // CONSULTAR UBICACION

        }else if( menu==3){
            let codigo = prompt("Consultar Ubicacion por CODIGO o NOMBRE") 
            try{
                let busqueda = nombreDB.find( producto => (producto.codigo === codigo) || (producto.nombre === codigo.toUpperCase()) )
                alert(`La ubicacion del producto ${busqueda.nombre} es ${busqueda.ubicacion}`)
            }
            catch(error){
                alert("El producto no fue encontrado!")
            }
            menu = prompt("Bienvenidos al sistema de gestion de inventario v0.1\n\nSeleccionar una opcion:\n\n1-Ingresar nuevo producto\n2-Consultar Stock disponible\n3-Consultar ubicacion\n4-Dar de baja un producto\n5-Mostrar base de datos completa\n6-SALIR")
        //ELIMINAR UN PRODUCTO

        }else if( menu==4){
            let codigo = prompt("Eliminar Producto por CODIGO o NOMBRE")
            try{
                let producto = nombreDB.find(producto => (producto.codigo === codigo) || (producto.nombre === codigo.toUpperCase()) )
                let busqueda = nombreDB.findIndex( producto => (producto.codigo === codigo) || (producto.nombre === codigo.toUpperCase()) )
                let respuesta = confirm(`Seguro desea eliminar el producto ${producto.nombre}, en el indice ${busqueda}?`)
                    if(respuesta == true){
                        nombreDB.splice(busqueda, busqueda + 1)
                        alert("Producto eliminado")
                    }
                }
                catch(error){
                    alert("El producto no fue encontrado!")
                }
                menu = prompt("Bienvenidos al sistema de gestion de inventario v0.1\n\nSeleccionar una opcion:\n\n1-Ingresar nuevo producto\n2-Consultar Stock disponible\n3-Consultar ubicacion\n4-Dar de baja un producto\n5-Mostrar base de datos completa\n6-SALIR")
        }else if( menu==5){
            let vista = 'Productos disponibles en la base de datos: \n\n';
            nombreDB.forEach(item => {vista += item['codigo'] +' '+ item['nombre'] + '\n'});
            alert(vista);
            menu = prompt("Bienvenidos al sistema de gestion de inventario v0.1\n\nSeleccionar una opcion:\n\n1-Ingresar nuevo producto\n2-Consultar Stock disponible\n3-Consultar ubicacion\n4-Dar de baja un producto\n5-Mostrar base de datos completa\n6-SALIR")

        }
        else{
            alert("La opcion ingresada es incorrecta")
            menu = prompt("Bienvenidos al sistema de gestion de inventario v0.1\n\nSeleccionar una opcion:\n\n1-Ingresar nuevo producto\n2-Consultar Stock disponible\n3-Consultar ubicacion\n4-Dar de baja un producto\n5-Mostrar base de datos completa\n6-SALIR")
        }
        
        
    }
    
}

/***----------------LLAMADA A LA FUNCION -------------------------------------------- */


/*function mostrarInventario(nombreDB){
    let vista = 'Productos disponibles en la base de datos: \n\n';
    nombreDB.forEach(item => {vista += item['codigo'] +' '+ item['nombre'] + '\n';
    return vista;
    });
    alert(vista);
    

}*/



inventario(data)

//mostrarInventario(data)






