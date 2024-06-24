import express from 'express'
import morgan from 'morgan'
import routes from './routes/index.js'
import { port } from "./config.js";

const app = express()
app.use(routes)
app.use(morgan('dev'))
app.listen(port)
console.log(`Corriendo en el puerto ${port}` )