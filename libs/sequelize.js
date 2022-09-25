import { Sequelize } from "sequelize";
import { config } from '../config/config.js'
import { setupModels } from '../db/models/index.js'

const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

export const sequelize = new Sequelize(
    URI,
    {
        dialect: 'mysql',
        logging: true,
    }
)

export const dbConnection = async () => {
    try {
        await sequelize.authenticate();
        setupModels(sequelize)
        sequelize.sync()
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}


