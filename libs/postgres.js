import boom from "@hapi/boom";
import pg from 'pg';
const Client = pg.Client;

export const getConnection = async () => {
    try {
        const client = new Client({
            host: 'localhost',
            port: 5432,
            user: 'nico',
            password: 'admin123',
            database: 'my_store'
            });
        await client.connect();
        return client;

    } catch (error) {
        throw boom.internal('User not found')
    }
}


