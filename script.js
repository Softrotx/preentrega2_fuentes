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
    alert('Ingrese el costo de cada producto')
    if(login.user === finalUser && login.pass === finalPass){
        let numero = parseInt(prompt("ingrese el valor del producto"))
        let carrito = 0
        while(!isNaN(numero)){
            carrito+= numero
            numero = parseInt(prompt("ingrese otro producto, o una F para finalizar "))
            
        }
        alert ('precio final: ' + "$" + carrito)
        alert ('Gracias por su compra')
        
    }else{
        alert('acceso denegado')
        
    }
alert('cerrando aplicacion')
}


let login = loginAdm()
sumaCostoProductos()

