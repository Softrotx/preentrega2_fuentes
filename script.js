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
function sumaCostoProductos (){
    
    if(login.user === finalUser && login.pass === finalPass){
        alert('Esta aplicacion permite sumar el costo de todos los productos que se agreguen, por compras superiores $15000 se aplican hasta un 40% de descuento')
        let numero = parseInt(prompt("ingrese el valor del producto"))
        let carrito = 0

        while(!isNaN(numero)){
            carrito+= numero
            numero = parseInt(prompt("ingrese otro producto, o una F para finalizar "))
            
        }
    alert ('precio final: ' + "$" + carrito)
    return carrito
        
        
    }else{
        alert('acceso denegado')
        
        
    }

}

function aplicarDescuento(){
    if(login.user === finalUser && login.pass === finalPass){
        if (total >= 100_000) {
            let montoConDescuento = total * 0.6 
            alert ('¡se aplicó un 40% de descuento!')
            alert ('total a pagar : ' + '$' + montoConDescuento)
        
        } else if (total >= 50_000) {
            let montoConDescuento = total * 0.7
            alert ('¡se aplicó un 30% de descuento!')
            alert ('total a pagar : ' + '$' + montoConDescuento)

        } else if (total >= 30_000) {
            let montoConDescuento = total * 0.8
            alert ('¡se aplicó un 20% de descuento!')
            alert ('total a pagar : ' + '$' + montoConDescuento)

        } else if ( total >=15_000){
                let montoConDescuento = total * 0.9
                alert ('¡se aplicó un 10% de descuento!')
                alert ('total a pagar : ' + '$' + montoConDescuento)
        } else {
            alert('Solo se realizan descuentos sobre $15000')
            alert ('total a pagar : ' + '$' + total)
        }
    
    alert ('cerrando aplicacion')
    }

}

let login = loginAdm()
let total = sumaCostoProductos()
aplicarDescuento()

