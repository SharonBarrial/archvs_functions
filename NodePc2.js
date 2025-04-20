//requisito npm install redis

const redis = require('redis'); 
// Crear un cliente de Redis 
const client = redis.createClient({ url: 'redis://localhost:6379' }); 
// Conectar al servidor Redis 
client.connect().catch(console.error); 
// Almacenar un valor en Redis 
//client.set('clave', 'valor'); 
// Recuperar un valor de Redis 
client.get('clave', (err, valor) => 
{ if (err) { console.error('Error al recuperar el valor:', err); } 
else { console.log('Valor:', valor); } 
// Cerrar la conexión con Redis 
client.quit(); });
