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
    menu1()
}

// funcion que confirma si el usuario corresponde con la contraseña
function validar(user, pass) {
    for (const i of usuarios) {
        
        if (user === i.usr && pass === i.pass) {
            return i;
        } 
        
    return false    
    }
}

// login de usuario 
function loginAdm(user, pass) {
    if (usuarios.length === 0) {
        alert('no existen usuarios registrados cerrando aplicacion')


    } else {
        for (intento = 5; intento--;) {
            user = prompt('escriba su nombre de usuario');
            pass = prompt('escriba su contraseña');
            validado = validar(user, pass)

            if (validado.usr === user) {
                alert('acceso otorgado');
                return validado;

            } else if (intento > 0) {

                alert('tienes ' + intento + ' intentos')

                continue

            }
            alert('maximo de intentos superados')



        }

    }
}



function modificarNombre(user) {

    const pos = usuarios.indexOf(user)
    console.log(pos)

    user[pos].name = prompt('escriba su nombre')
}



// menú

function menu1() {

    let opcion = parseInt(prompt('Bienvenido, por favor elija una opción: \n 1. registrar una cuenta \n 2. Iniciar sesión \n 3. cerrar'))
    if (opcion === 1) {
        // opcion 1 registrar cuenta
        registro()
    } else if (opcion === 2) {
        alert("ingresando al login")
    } else if (opcion === 3) {
        alert("cerrando aplicacion")

    } else {
        alert('Debe elegir una opcion correcta')
        menu1()
    }
}


// opcion 2 inciar sesion


// menú 
function menu2(usr) {
    if (usr === false) {
        alert("acceso denegado")
    } else {

        let opcion = parseInt(prompt(`Bienvenido ${validado.name}, por favor elija una opción: \n 1. cambiar su nombre \n 2. cambiar nombre de usuario \n 3. cambiar contraseña \n 4. cerrar sesion`))
        if (opcion === 1) {
            // opcion 1 cambiar nombre
            modificarNombre(validado)

        } else if (opcion === 2) {
            // opcion 2 cambiar usuario

        } else if (opcion === 3) {
            // opcion 3 cambiar contraseña

        } else if (opcion === 4) {
            // opcion 4 cerrar sesion
            menu1()
        } else {
            alert('Elija una opcion correcta (1-4)')
            menu2()
        }

    }


}



// ORDEN DE FUNCIONAMIENTO


//---------------captura de datos----------------
menu1()
//registro()

//---------------procesamiento de los datos---------------

validado = loginAdm()

console.log(validado)


//---------------salida de los datos---------------

menu2()



