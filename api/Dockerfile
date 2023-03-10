# parent image, carga node17 + alpine linux como base
FROM node:17-alpine

# Working directory image, los comandos que corran despues (ej npm install) usan esto como root
WORKDIR /app

# Para aprovechar layer chaching, así cada vez que cambiamos src code en app no instala dependencies de nuevo al cuete
COPY package.json .

RUN npm install

# copia source files copy [origen] [destino]
COPY . .

# Expone el port que usa la API
EXPOSE 4000

# Comandos a correr cuando creemos un container (una instancia a partir de esta imagen)
# En este caso iniciar la app
CMD ["npm", "run", "dev"]

# Comando para construir la image, en la terminal en directorio donde está el Dockerfile:
# docker build -t name_of_image .