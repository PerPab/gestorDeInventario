
function inventario (nombreDB){  
  
    let menu = prompt("Bienvenidos al sistema de gestion de inventario v0.1\n\nSeleccionar una opcion:\n\n1-Ingresar nuevo producto\n2-Consultar Stock disponible\n3-Consultar ubicacion\n4-Dar de baja un producto\n5-Salir")
    while( menu!=5 ){
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

            menu = prompt("Bienvenidos al sistema de gestion de inventario v0.1\n\nSeleccionar una opcion:\n\n1-Ingresar nuevo producto\n2-Consultar Stock disponible\n3-Consultar ubicacion\n4-Dar de baja un producto\n5-Salir")
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
            menu = prompt("Bienvenidos al sistema de gestion de inventario v0.1\n\nSeleccionar una opcion:\n\n1-Ingresar nuevo producto\n2-Consultar Stock disponible\n3-Consultar ubicacion\n4-Dar de baja un producto\n5-Salir")
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
            menu = prompt("Bienvenidos al sistema de gestion de inventario v0.1\n\nSeleccionar una opcion:\n\n1-Ingresar nuevo producto\n2-Consultar Stock disponible\n3-Consultar ubicacion\n4-Dar de baja un producto\n5-Salir")

        }else{
            alert("La opcion ingresada es incorrecta")
            menu = prompt("Bienvenidos al sistema de gestion de inventario v0.1\n\nSeleccionar una opcion:\n\n1-Ingresar nuevo producto\n2-Consultar Stock disponible\n3-Consultar ubicacion\n4-Dar de baja un producto\n5-Salir")
        }
        console.log(nombreDB)
    }
    console.log(nombreDB)
}








