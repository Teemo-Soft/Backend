const { User, Group } = require('../models')
var passwordHash = require ('password-hash')

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
            return User.findOne({
                include: [
                    {
                        model: Group,
                        as: 'Groups',
                        attributes: ['id', 'name'],
                    },
                ],
                where: { id: args.id },
                attributes: ['id', 'names', 'lastnames', 'identification', 'username', 'gender', 'email'],
            }).then(e => {
                e.roles = e.Groups
                return e
            })
        },
    },
    Mutation: {
        async register(obj, args, context, info) {
            const { names, lastnames, identification, gender, username, password, email } = args
            return await User.findOne({
                where: { username: username, identification: identification },
                attributes: ['id', 'names', 'lastnames', 'identification', 'gender', 'username', 'password', 'email'],
            }).then(user => {
                if (!user) {
                    return User.create({
                        names: names,
                        lastnames: lastnames,
                        identification: identification,
                        password: passwordHash.generate(password),
                        gender: gender,
                        username: username,
                        email: email
                    }).then(us => {
                        return "Successful record!"
                    }).catch(err => {
                        throw err
                    })
                } else {
                    return "User already registered."
                }
            }).catch(err => {
                throw err
            })
        }
    },
}
