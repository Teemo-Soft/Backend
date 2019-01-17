const { User } = require('../models')

module.exports = {
    Query: {
        Users(obj, args, context, info) {
            console.log(context.User);
            // if (!context.users) throw new Error('Invalid user')
            return User.findAll({
                attributes: ['id', 'name', 'lastname'],
            })
        },
        User(obj, args, context, info) {
            // if (!context.user) throw new Error('Invalid user')
            return User.findOne({
                where: { id: args.id },
                attributes: ['id', 'name', 'lastname'],
            })
        },
    },
    Mutation: {
        insert(obj, args, context, info) {
            const { name, lastname } = args
            return User.findOne({
                where: { name: name },
                attributes: ['id', 'name', 'lastname'],
            }).then(User=>{
                if(!User){
                    User.create({
                        name: User.name,
                        lastname: User.lastname
                    })
                    return "Registro good"
                }else{
                    return "Registro fail"
                }
            })
        }
    },
}
