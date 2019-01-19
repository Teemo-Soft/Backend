//const bcrypt = require('bcrypt')
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
          if (!user) {
            throw new Error('Invalid user')
          }

          if(password == user.password) {
            const token = await jwt.generateToken(user.id)
            return { token }
          } else {
            throw new Error('Invalid password')
          }

          /*let match = await bcrypt.compare(password, user.password)

          if (match) {
            const token = await jwt.generateToken(user.id)
            return { token }
          } else {
            throw new Error('Invalid password')
          }*/
        })
        .catch(err => {
          throw err
        })
    },
  },
}