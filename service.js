const express = require('express');
const redis = require('redis');

const app = express();
const port = 3000;

// Crear cliente Redis
const client = redis.createClient({ url: 'redis://localhost:6379' });

client.on('connect', () => {
    console.log('Conectado a Redis');
});

client.on('error', (err) => {
    console.error('Error de conexión a Redis:', err);
});

// Conectar al cliente Redis
client.connect().catch(console.error);

// Endpoint para obtener los trabajadores desde Redis
app.get('/worker', async (req, res) => {
    try {
        // Obtener los datos almacenados en Redis bajo la clave 'usuario:1000'
        const data = await client.get('usuario:1000');
        
        if (data) {
            // Si los datos existen, devolverlos en formato JSON
            return res.json(JSON.parse(data));
        } else {
            // Si no se encuentran datos para esa clave, enviar un mensaje de error
            return res.status(404).json({ message: 'No se encontraron trabajadores en Redis' });
        }
    } catch (err) {
        console.error('Error al obtener datos de Redis:', err);
        res.status(500).send('Error al obtener datos');
    }
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}/worker`);
});
