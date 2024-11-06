# The chat room (coding challenge)

## Description
Sellia is asking you to build a chat room with incoming and outgoing chat messages.

### Requirements
- Each tab will serve as a chat room, the user should provide a username and then it can start chatting with the other connected users (use socket.io or GraphQL subscriptions).
  `Resultado: Cada pestaña del navegador entrega una sesión única para el usuario, y cada conversación se asocia con un sólo usuario`
- The messages list should display them in the correct order with the formatted timestamp the
message was sent and their respective author. `Resultado: El timestamp es formateado pero no se incluyó el nombre del autor, pues consideré suficiente interpretar con los estilos quien envía y quién recibe los mensajes`
- Send text only (with simple validation). `Resultado: El input sólo admite texto`
- Show a different style for incoming and outgoing messages (position, color, etc.). `Resultado: La conversación tiene un estilo definido para cada miembro de la conversación`
- Keep chat history in a database (MongoDB is highly recommended). `Resultado: Las conversaciones se guardan (y recuperan) desde mongoDB`
- Pull and show old messages using an API (REST or GraphQL). `Resultado: Las conversaciones se recuperan mediante un endpoint /messages/senderId/userId, donde senderId y userId representan a los participantes de la conversación`


## Instalación

La prueba técnica se realizó en un repositorio monolitico
<br/>
**/api** 
<br/>Representa al proyecto backend, para iniciar el backend, se necesita un `.env` con un MONGO_URI, se ha dejado un .env.example que contiene el MONGO_URI, en caso de ocupar el docker-compose.yml que inicia un contenedor de una DB de Mongo, y puede ser iniciado con:

```sh
npm install
node server.js
```

> Nota: En caso de ocupar el docker-compose.yml para inciar una instancia de mongo en docker, sólo es necesario usar el comando docker-compose up -d
AutoFeedback: No se definió un daemon para reejecutar el servidor en caso de fallos o se dockerizó para recuperarse de errores

<br/>

**/client**
<br/>
Representa el proyecto frontend, realizado con vite+vue, para iniciar el proyecto, se ha configura un `.env` similar al mostrado en el `.env.example`
Es necesario entonces, iniciar el proyecto con:

```sh
npm install
npm run dev
```
