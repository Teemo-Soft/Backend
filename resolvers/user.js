const { User, Group } = require('../models')

module.exports = {
    Query: {
        Users(obj, args, context, info) {
            // if (!context.users) throw new Error('Invalid user')
            return User.findAll({
                include: [
                    {
                        model: Group,
                        as: 'Groups',
                        attributes: ['id', 'name'],
                    },
                ],
                attributes: ['id', 'names', 'lastnames', 'gender', 'email'],
            }).then(data =>
                data.map(e => {
                    e.roles = e.Groups
                    return e
                })
            )
        },
        User(obj, args, context, info) {
            // if (!context.user) throw new Error('Invalid user')
            return User.findOne({
                include: [
                    {
                        model: Group,
                        as: 'Groups',
                        attributes: ['id', 'name'],
                    },
                ],
                where: { id: args.id },
                attributes: ['id', 'names', 'lastnames', 'gender', 'email'],
            }).then(e => {
                e.roles = e.Groups
                return e
            })
        },
    },
    Mutation: {
        register(obj, args, context, info) {
            const { name, lastname } = args
            const ins = User
            return User.findOne({
                where: { name: name, lastname: lastname },
                attributes: ['id', 'names', 'lastnames'],
            }).then(async User => {
                if (!User) {
                    ins.create({
                        name: name,
                        lastname: lastname
                    })
                    return "Successful record!"
                } else {
                    return "User already registered."
                }
            })
        }
    },
}
