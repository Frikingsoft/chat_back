import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
const servidor = express()

servidor.set('puerto', process.env.PORT || 80 || 8080)
servidor.use(express.json())
servidor.use(cors())
servidor.use(morgan('dev'))
servidor.listen(servidor.get("puerto"))

export  {
    servidor
}