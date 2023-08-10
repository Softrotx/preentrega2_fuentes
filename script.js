// usuario y clave de usuario
const finalUser = 'user'
const finalPass = 'user1234*'

// login de usuario 
function loginAdm (user, pass){
    alert('Ingrese su usuario de comprador frecuente')
    for(intento = 6;intento--;){
        
        if(user === finalUser && pass === finalPass){
            alert ('acceso otorgado');
            break
            
        } else if(intento > 0){

            alert('tienes ' + intento + ' intentos')
            user = prompt('escribe el nombre de usuario');
            pass = prompt('escribe la contraseña');
            continue

        } 
    alert('maximo de intentos superados')
    
    }
//tuve que investigar un poco de esto , si no no podia hacer funcionar suma() con el usuario si me equivocaba una vez
return {user, pass}; 
}

// suma el costo de productos si fue validada la clave anterior
function sumaCostoProductos (user, pass){
    if(user === finalUser && pass === finalPass){
        alert('Esta aplicacion permite sumar el costo de todos los productos que se agreguen, por compras superiores $15000 se aplica hasta un 40% de descuento')
        let numero = parseFloat(prompt("ingrese el valor del producto, ejemplo 10000"))
        let carrito = 0

        while(!isNaN(numero)){
            carrito+= numero
            alert('total: ' + '$' + carrito)
            numero = parseFloat(prompt("ingrese otro producto, o una F para finalizar "))
            
            
        }
   
    return carrito
        
        
    }else{
        alert('acceso denegado')
        
        
    }

}
// funcion para calculo de descuento
function descuento (monto, descuento ){
    montoDescuento = monto / 100 * descuento
    montoFinal = monto - montoDescuento
    alert("Se aplicó un " + descuento + "%" + " de descuento")
    return montoFinal
}




function aplicarDescuento(){
    if(login.user === finalUser && login.pass === finalPass){
        if (total >= 100_000) {
            //llama a la funcion descuento
            let montoConDescuento = descuento(total, 40)
            alert ('total a pagar : ' + '$' + montoConDescuento)
        
        } else if (total >= 50_000) {
            //llama a la funcion descuento
            let montoConDescuento = descuento(total, 30)
            alert ('total a pagar : ' + '$' + montoConDescuento)

        } else if (total >= 30_000) {
            //llama a la funcion descuento
            let montoConDescuento = descuento(total, 20)
            alert ('total a pagar : ' + '$' + montoConDescuento)

        } else if ( total >=15_000){
            //llama a la funcion descuento
            let montoConDescuento = descuento(total, 10)
                alert ('total a pagar : ' + '$' + montoConDescuento)
        } else {
            alert('Solo se realizan descuentos sobre $15000')
            alert ('total a pagar : ' + '$' + total)
        }
    
    alert ('cerrando aplicacion')
    }

}

//orden del proceso
let login = loginAdm()
let total = sumaCostoProductos(login.user, login.pass)
aplicarDescuento()

