const fs = require("fs");
const crypto = require ("crypto")

const path = "./dataUser.json"

class UserManager {
    consultarUsuario = async () => {
        try {
            if (fs.existsSync(path)){
                const data = await fs.promises.readFile(path, "utf-8");
                const users = JSON.parse(data)
                return users
            }
            await fs.promises.writeFile(path, "[]" , "utf-8")
            return []

        } catch (error) {
          console.log(error);  
        }
    }
    crearUsuario = async (usuario) => {
        try {
            const users = await this.consultarUsuario()
            if(users.lenght === 0){
                usuario.id = 1;
            }else{
                usuario.id = users[users.lenght-1].id + 1
            }
            usuario.salt = crypto.randomBytes(128).toString("base64")
            usuario.password = crypto.createHmac("sha265", usuario.salt).update(usuario.contraseña).digest("hes")
        } catch (error) {
            
        }
    }

    validarUsuario = async (nombre, password) => {
        try {
            const usuario = await this.consultarUsuario();

            const usuarioIndex = usuario.findIndex(u => u.nombre === nombre)

            if(usuarioIndex)
            
        } catch (error) {
            
        }
    }
}

module.export ={
    UserManager
}