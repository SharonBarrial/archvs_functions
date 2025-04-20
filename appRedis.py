import redis
import json

# Conectar a Redis
r = redis.Redis(host='localhost', port=6379, db=0)

# Datos en formato JSON
with open("workers.json", "r") as read_file:
    data = json.load(read_file)

# Convertir JSON a string
data_string = json.dumps(data)

# Guardar JSON en Redis con la clave 'usuario:1000'
r.set('usuario:1000', data_string)

# Recuperar y deserializar los datos
recovered_data_string = r.get('usuario:1000')
recovered_data = json.loads(recovered_data_string)

print(recovered_data)
