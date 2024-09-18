import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { createServer } from 'http'
import { Server } from 'socket.io'

const servidor = express()

servidor.set('puerto', process.env.PORT || 80 || 8080)
servidor.use(express.json())
servidor.use(cors())
servidor.use(morgan('dev'))

// Crear servidor HTTP
const httpServer = createServer(servidor)

// Configurar Socket.IO en el servidor HTTP
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
})

// Escuchar conexiones Socket.IO
io.on('connection', (socket) => {
  console.log('Cliente conectado:', socket.id)

  // Emitir el ID del cliente al conectarse
  socket.emit('respuesta', socket.id)

  socket.on('disconnect', () => {
    console.log('Cliente desconectado:', socket.id)
  })
})

// Iniciar el servidor
httpServer.listen(servidor.get("puerto"), () => {
  console.log(`Servidor funcionando OK en el puerto ${servidor.get('puerto')}`)
})

export {
    servidor
}
