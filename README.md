# Backend Base

## Requerido

Para correr el proyecto se deben tener las siguientes herramientas instaladas:

- NodeJS
- NPM
- [sequelize-cli](http://docs.sequelizejs.com/manual/tutorial/migrations.html#installing-cli)
  instalado globalmente (Ejecutar `npm i -g sequelize-cli`)

## Tecnologías usadas

- [GraphQL](https://graphql.org/learn/)
- [Express](https://expressjs.com/es/starter/hello-world.html)
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
- [Sequelize](http://docs.sequelizejs.com/)
- [JWT](https://jwt.io/)

## Instalación 

### .ENV

Copie el archivo `.env.example` y renómbrelo simplemente como `.env`. Luego
dentro del nuevo archivo edite las variables de entorno a su valor correcto. Por
lo menos, las credenciales de la base de datos.

### Corriendo el proyecto

Lo primero que se debe hacer es inicializar la base de datos, correr las
migraciones y los seeders:

```
sequelize db:create
sequelize db:migrate
sequelize db:seed:all
```

Posteriormente puede ejecutar la aplicación con el comando start:

```
npm start
```

Ahora está disponible desde el navegador la ruta http://localhost:4000/graphql.
Desde ahí podrá probar su API de GraphQL utilizando
[GraphQL Playground](https://www.apollographql.com/docs/apollo-server/features/graphql-playground.html).

Tenga en cuenta, que para poder hacer peticiones debe agregar en la sección de
'HTTP HEADERS', por lo menos, el siguiente contenido:

```
{
  "Application": "123"
}
```

Donde '123' es el `appid` de la aplicación registrada en la tabla `Apps` de la
base de datos. Por defecto el appid es '123' y el origin de la aplicación es
http://localhost:4000.

## Comandos adicionales, SEQUELIZE
```
# ENUM
En los create:model, se define el atributo tipo enum, y luego en los archivos de models y migrations, en el modelo con ese atributo se le agregan los valores.

# Generate Models
```
sequelize model:generate --name User --attributes names:string,lastnames:string,gender:enum,email:string,username:string,password:string
sequelize model:generate --name Group --attributes name:string
sequelize model:generate --name Role --attributes userId:integer,groupId:integer
```






