'use strict'
const User = use('App/Models/User')


class DatabaseSeeder {
  async run () {
    await User.create({
      username: 'admin',
      password: '10203045'
    })
  }
}

module.exports = DatabaseSeeder
