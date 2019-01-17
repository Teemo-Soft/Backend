# Backend
sequelize db:create
sequelize db:migrate

# ENUM
En los create:model, se define el atributo tipo enum, y luego en los archivos de models y migrations, en el modelo con ese atributo se le agregan los valores.

# Generate Models
sequelize model:generate --name User --attributes names:string,lastNames:string,gender:enum,email:string,username:string,password:string
sequelize model:generate --name Group --attributes name:string
sequelize model:generate --name Role --attributes userId:integer,groupId:integer