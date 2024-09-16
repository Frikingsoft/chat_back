import { servidor } from './config.js'

servidor.get('/', (req,res)=>{
    res.status(200).send('ok')
})
servidor.post("/login",(req,res)=>{
    req.body = { usuario, contraseña}
})