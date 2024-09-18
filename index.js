import { servidor } from './config.js'
import { autenticar } from './controladores/autenticar.js'
servidor.get('/', (req,res)=>{
    res.status(200).send('ok')
})
servidor.post("/login",autenticar,(req,res)=>{
    res.status(200).send('Autenticación exitosa');
})