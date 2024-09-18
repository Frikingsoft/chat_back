const autenticar = (req,res,next)=>{
    const datos_usuario = req.body
    const validar_usuario =()=>{
        
    }
    if(datos_usuario.length === 2 && 
        datos_usuario[0].etiqueta === 'Usuario' && datos_usuario ){
        console.log("OK")
    }
}

export {
    autenticar
}