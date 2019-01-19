const { User, Group } = require('../models')
var passwordHash = require('password-hash')

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
                attributes: ['id', 'names', 'lastnames', 'identification', 'username', 'gender', 'email'],
            }).then(data =>
                data.map(e => {
                    e.roles = e.Groups
                    return e
                })
            )
        },
        User(obj, args, context, info) {
            // if (!context.user) throw new Error('Invalid user')
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
        async register(obj, args, context, info) {
            const { names, lastnames, identification, gender, username, email } = args
            const password = passwordHash.generate(args.password)
            const user = await User.findOne({
                where: { username, identification },
                attributes: ['id', 'names', 'lastnames', 'identification', 'gender', 'username', 'password', 'email'],
            })
            if (!user) {
                return User.create({
                    names,
                    lastnames,
                    identification,
                    password,
                    gender,
                    username,
                    email
                }).then(us => {
                    return us
                }).catch(err => {
                    throw new Error('Invalid register.')
                })
            } else {
                throw new Error('User already registered.')
            }
        }
    },
}
