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

          // if(password == user.password) {
          //   const token = await jwt.generateToken(user.id)
          //   return { token }
          // } else {
          //   throw new Error('Invalid password')
          // }
          let vaidationPassw = passwordHash.isHashed(user.password)
          if(vaidationPassw){
            let match = await passwordHash.verify(password, user.password)
            if (match) {
              const token = await jwt.generateToken(user.id)
              return { token }
            } else {
              throw new Error('Invalid password')
            }
          }else{
            throw new Error('Invalid password')
          }
        })
        .catch(err => {
          throw err
        })
    },
  },
}