

    const solicitarNombre = () => {
      
        alert("Primera Pre entrega: PreEntrega1Salas");
        let nombreUsuario = prompt("Ingrese su nombre");
          let regex = new RegExp('^[A-Z]+$', 'i');
       
           do{
            if ( regex.test(nombreUsuario) ) {
                
                alert(`Bienvenido ${nombreUsuario},Gracias por visitarnos`);
              }else {
                alert('No es un nombre valido')
                continue;
              }
              
        } while(nombreUsuario === "");

    };
    
   
    
    
    const comprarProductos = () => {
        let producto = '';
        let cantidad = 0;
        let precio = 0;
        let totalCompra = 0;
        let seguirComprando = false;
    
        do {
            producto = parseInt(prompt("Ingrese el articulo que desea adquirir.\n\nEjemplo seleccione '1' para lapiz.\n\n1- lapiz\n2- lapicero\n3- engrapador \n4- hojas bond"));
            cantidad = parseInt(prompt('¿Cuántos deseas comprar?'));
    
            let cantidadValidada = validarCantidad(cantidad);
            switch (producto) {
                     case 1:
                         producto = "Lapiz";
                         precio = 3 ;
                         alert(`Ud ha elegido ${cantidadValidada} ${producto}  con un precio de ${precio}  c/u`);
                         break;
                     case 2:
                         producto = "Lapicero";
                         precio = 5;
                         alert(`Ud ha elegido ${cantidadValidada} ${producto}  con un precio de ${precio}  c/u`);
                         break;
                     case 3:
                        producto = "Engrapador";
                         precio = 10;
                         alert(`Ud ha elegido ${cantidadValidada} ${producto}  con un precio de ${precio}  c/u`);
                         break;
                     case 4:
                        producto = "Paquete de Hojas Bond";
                         precio = 20;
                         alert(`Ud ha elegido ${cantidadValidada} ${producto}  con un precio de ${precio}  c/u`);
                         break;
                     default:
                         alert('Alguno de los datos ingresados no son correctos.');
                        precio = 0;
                        cantidadValidada = 0;
                 }

                
                 totalCompra += precio * cantidadValidada
    
                seguirComprando = confirm('¿Querés agregar otro producto?');   
                pagarProducto = confirm('¿Desea pagar el producto?');          
                if (seguirComprando == false && pagarProducto == true){
                    alert('Gracias, Porfavor contestar 2 preguntas')
                    calculaEnvio(totalCompra); 
                }else if(seguirComprando == true && pagarProducto == true){
                   alert('Porfavor agregue otro producto antes de realizar el pago')
                }else if(seguirComprando == true && pagarProducto == false){
                    continue
                }else{
                    alert('Hasta Pronto');
                        return false;
                }
    
        } while (seguirComprando);
       
    };
    
    const validarCantidad = (cantidad) => {
        while (Number.isNaN(cantidad) || cantidad <= 0) {
            if (cantidad <= 0) {
                alert('Debe ingresar una cantidad válida.')
            } else {
                alert('Debe agregar un número.')
            }
            cantidad = parseInt(prompt('¿Cuántos deseas comprar?'));
        }
    
        return cantidad;
    };
    
    const calculaEnvio = (totalCompra) => {
        let delivery = false;
        let pagoefectivo = false;
        delivery = confirm('¿Deseas Delivery?');       
        pagoefectivo = confirm('Realizará pago ContraEntrega?');    
        if (delivery && pagoefectivo && totalCompra > 10) {
            alert('Felicidades tu delivery es gratuito y Ud. Pagará a la entrega de su producto, el total de tu compra es $ ' + totalCompra);
            return;
        }else if(delivery && pagoefectivo && totalCompra !== 0) {
            totalCompra += 5;
            alert('Ud. Pagará a la entrega de su producto, el envío cuesta $5 EL total de tu compra es $ ' + totalCompra);
            return;
        }else if(delivery == false && pagoefectivo && totalCompra !== 0) {
            totalCompra += 5;
            alert('Ud. Pagará a la entrega de su producto, Recojo en Tienda, total a cancelar es $ ' + totalCompra);
            return;
        }else if(delivery  && pagoefectivo == false && totalCompra !== 0) {
            totalCompra += 5;
            alert('Realizar pago en linea, Su pedido se esta despachando, total a cancelar es $ ' + totalCompra);
            return;
               
        }else{
            alert('Ud. escojió pagar en linea y recojer su producto, El total de tu compra es $ '+ totalCompra)
            
        }
    };
    

    
    
    solicitarNombre();
    comprarProductos();
