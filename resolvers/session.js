const passwordHash = require('password-hash')
const jwt = require('../helpers/jwt')
const { User } = require('../models')

module.exports = {
  Mutation: {
    login(obj, args, context, info) {
      const { username, password } = args
      return User.findOne({
        where: { username },
      })
        .then(async user => {
          if (!user) throw new Error('Invalid user')          

          let match = await passwordHash.verify(password, user.password)

          if (!match) throw new Error('Invalid password')          
            const token = await jwt.generateToken(user.id)
            return { token }
        })
        .catch(err => {
          throw err
        })
    },
  },
}