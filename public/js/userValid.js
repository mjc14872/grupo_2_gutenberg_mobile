//validaciones desde el backend
window.addEventListener("load", function() {
    let formulario = document.querySelector("form.create-form");

    formulario.addEventListener("submit", function(e) {

        let errores = [];

        let campoNombre = document.querySelector("input#Nombres");

        if (campoNombre.value == "") {
            errores.push("Campo Nombres no puede estar vacío");
        } else if (campoNombre.value.length < 2) {
            errores.push("Campo Nombres debe tener al menos 2 caracteres");
        }

        let campoApellido = document.querySelector("input#apellidos");

        if (campoApellido.value == "") {
            errores.push("Campo Apellidos no puede estar vacío");
        } else if (campoApellido.value.length < 2) {
            errores.push("Campo Apellidos debe tener al menos 2 caracteres");
        }

        let campoEmail = document.querySelector("input#email");

        if (campoEmail.value == "") {
            errores.push("Campo Email no puede estar vacío");
        } else if (campoEmail.value.length < 3) {
            errores.push("Campo Email debe tener al menos 3 caracteres");
        }

        let campoPassword = document.querySelector("input#password");

        if (campoPassword.value == "") {
            errores.push("Campo Password no puede estar vacío");
        } else if (campoPassword.value.length < 8) {
            errores.push("Campo Password debe tener al menos 8 caracteres");
        }

            let file=req.file.image;
         
            let extensionArchivo= (path.extname(file)).toLowerCase();
            
            let extensionAUsar= extensionArchivo.toString();
   
            if (extensionAUsar == '.jpeg' || extensionAUsar == '.gif' || extensionAUsar == '.jpg' || extensionAUsar == '.png'){
               return true 
            } else {
               throw new Error('formato de imagen Invalido');
            } 
         })

        if (errores.length > 0) {
            e.preventDefault();
            let ulErrores = document.querySelector("form div.erroresfront ul");
            ulErrores.innerHTML = ""
            for (let i= 0; i < errores.length; i++) {
                ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
            }
        }
    });
})