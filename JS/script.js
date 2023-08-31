// array de usuarios
const usuarios = []
let validado = false

// crear un usuario y contraseña

class UserPass {
    constructor(nombre, usuario, contraseña) {
        this.name = nombre
        this.usr = usuario
        this.pass = contraseña

    }

}

// Registro de usuario


function registro() {
    alert('favor crear un nuevo usuario')

    let name = prompt('ingrese su nombre')
    let user = prompt('ingrese su usuario')
    let pass = prompt('ingrese su contraseña')

    while (name === "" || user === "" || pass === "") {
        alert('debe escribir su nombre, usuario y password, no puede quedar en blanco')
        name = prompt('ingrese su nombre')
        user = prompt('ingrese su usuario')
        pass = prompt('ingrese su contraseña')
    }
    // validar que el usuario no este duplicado
    for (const i of usuarios) {
        if (user === i.usr) {
            alert('el nombre de usuario ya existe intentelo nuevamente')
            registro()
        }
    }
    // se agrega el usuario al array usuarios
    const usuario = new UserPass(name, user, pass)
    usuarios.push(usuario)
    for (const iterator of usuarios) {
        console.log(iterator)
    }

    alert("Gracias " + name + " no olvides tu usuario y contraseña" + "\n" + "Usuario: " + user + "\n" + "Password: " + pass)
    
}

// funcion que confirma si el usuario corresponde con la contraseña
function validar(user, pass) {
    for (const i of usuarios) {

        if (user === i.usr && pass === i.pass) {
            return i;
        } else {
            continue;
        }


    }
    return false
}

// login de usuario 
function loginAdm(user, pass) {
    if (usuarios.length === 0) {
        alert('No existen usuarios registrados cerrando aplicación')


    } else {
        for (intento = 5; intento--;) {
            user = prompt('escriba su nombre de usuario');
            pass = prompt('escriba su contraseña');
            validado = validar(user, pass)

            if (validado.usr === user) {
                alert('acceso otorgado');
                return validado;

            } else if (intento > 0) {

                alert('¡usuario o clave erronea!, te quedan ' + intento + ' intentos')

                continue

            }
            alert('maximo de intentos superados')



        }

    }
}



function modificarNombre(user) {

    const pos = usuarios.indexOf(user)

    user.name = prompt('escriba su nombre')

    usuarios.splice(pos, 1, user)
    alert(`Su nombre fue actualizado a ${user.name}, volviendo al menú`)
    menu2(validado)

}
function modificarUser(user) {

    const pos = usuarios.indexOf(user)

    user.usr = prompt('Escriba su nuevo nombre de usuario')

    usuarios.splice(pos, 1, user)
    alert(`Su usuario fue actualizado a ${user.usr}, cerrando sesión, ingrese nuevamente`)
    

}
function modificarPass(user) {

    const pos = usuarios.indexOf(user)

    user.pass = prompt('Escriba una nueva contraseña')
    passConfirm = prompt('repita su contraseña')

    while (user.pass !== passConfirm) {
        alert('su contraseña no coincide, favor escribirla nuevamente')
        user.pass = prompt('Escriba una nueva contraseña')
        passConfirm = prompt('repita su contraseña')
    }
    usuarios.splice(pos, 1, user)
    alert(`Su contraseña fue actualizada, cerrando sesión, ingrese nuevamente`)


}






// menú 2
function menu2(usr) {
    if (usr === false) {
        alert("acceso denegado")
    } else {

        let opcion = parseInt(prompt(`Bienvenido ${validado.name}, por favor elija una opción: \n 1. cambiar su nombre \n 2. cambiar nombre de usuario \n 3. cambiar contraseña \n 4. ver info de la cuenta \n 5. cerrar sesion`))
        if (opcion === 1) {
            // opcion 1 cambiar nombre
            modificarNombre(validado)
            menu2(validado)

        } else if (opcion === 2) {
            // opcion 2 cambiar usuario
            modificarUser(validado)



        } else if (opcion === 3) {
            // opcion 3 cambiar contraseña
            modificarPass(validado)

        } else if (opcion === 4) {
            // opcion 4 validar datos
            alert(`informacion de la cuenta: \n nombre: ${validado.name} \n usuario: ${validado.usr} \n Password: ${validado.pass}`)
            menu2(validado)
            

        } else if (opcion === 5) {
            // opcion 5 cerrar sesion
            alert('cerrando sesión, volviendo al menú principal')

        } else {
            alert('Elija una opcion correcta (1-5)')
            menu2(validado)
        }

    }


}



// ORDEN DE FUNCIONAMIENTO
// ciclo para volver al menú principal

let ciclo = true

//---------------captura de datos----------------
while (ciclo === true) {
    let opcion = parseInt(prompt('Bienvenido, por favor elija una opción: \n 1. registrar una cuenta \n 2. Iniciar sesión \n 3. cerrar'))
    if (opcion === 1) {
        // opcion 1 registrar cuenta
        registro()
    } else if (opcion === 2) {
        alert("ingresando al login")
        validado = loginAdm()
        menu2()

    } else if (opcion === 3) {
        alert("cerrando aplicacion")
        ciclo = false

    } else {
        alert('Debe elegir una opcion correcta')
    }

    //---------------procesamiento de los datos---------------

    // loginAdm()



    //---------------salida de los datos---------------
    // menu2()
    // modificarNombre()
    // modificarUser()
    // modificarpass()
    // opcion 4 del menú 2


}
















