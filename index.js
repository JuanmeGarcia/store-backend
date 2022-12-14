import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { routerApi } from './routes/index.js'
import { boomErrorHandler, errorHandler, logErrors, sequelizeErrorHandler } from './middlewares/error.handler.js'
import cors from 'cors'
import { dbConnection } from './libs/index.js'

const app = express();
const port = process.env.PORT || 3001;
dbConnection()

const whitelist = [
    'https://localhost:8080',
    'https://localhost:3000',
    'https://store-backend-jmgc.fly.dev'
]

const options = {
    origin: (origin, callback) => {
        if(whitelist.includes(origin)){
            callback(null, true)
        }else{
            callback(new Error('Not authorized'))
        }
    }
}

app.use(express.json())
routerApi(app)
app.use(cors(options))

app.use(logErrors)
app.use(sequelizeErrorHandler)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port, () => console.log(`Escuchando el puerto: ${port}`));
