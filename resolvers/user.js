const { User, Group } = require('../models')
const passwordHash = require('password-hash')

module.exports = {
    Query: {
        Users(obj, args, context, info) {
            if (!context.user) throw new Error('Invalid user')
            return User.findAll({
                include: [
                    {
                        model: Group,
                        as: 'Groups',
                        attributes: ['id', 'name'],
                    },
                ],
                attributes: ['id', 'names', 'lastnames', 'identification', 'username', 'gender', 'email'],
            }).then(data =>
                data.map(e => {
                    e.roles = e.Groups
                    return e
                })
            )
        },
        User(obj, args, context, info) {
            if (!context.user) throw new Error('Invalid user')
            const { id } = args
            return User.findOne({
                include: [
                    {
                        model: Group,
                        as: 'Groups',
                        attributes: ['id', 'name'],
                    },
                ],
                where: { id },
                attributes: ['id', 'names', 'lastnames', 'identification', 'username', 'gender', 'email'],
            }).then(e => {
                e.roles = e.Groups
                return e
            })
        },
    },

    Mutation: {
        async register(obj, args) {
            const { identification, username } = args
            args.password = passwordHash.generate(args.password)
            const user = await User.findOne({
                where: { username, identification },
                attributes: ['id', 'names', 'lastnames', 'identification', 'gender', 'username', 'password', 'email'],
            })
            if (user) throw new Error('User already registered.')
            return User.create(args)
        }
    },
}
