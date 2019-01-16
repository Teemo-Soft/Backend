# Backend
sequelize db:create
sequelize db:migrate

# ENUM
En los create:model, se define el atributo tipo enum, y luego en los archivos de models y migrations, en el modelo con ese atributo se le agegan los valores.