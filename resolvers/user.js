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
        register(obj, args, context, info) {
            const { name, lastname } = args
            const ins = User
            return User.findOne({
                where: { name: name, lastname: lastname },
                attributes: ['id', 'name', 'lastname'],
            }).then(async User => {
                if(!User){
                    ins.create({
                        name: name,
                        lastname: lastname
                    })
                    return "Successful record!"
                }else{
                    return "User already registered."
                }
            })
        }
    },
}
