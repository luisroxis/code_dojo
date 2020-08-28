'use strict'

const User = use('App/Models/User');

class UserController {
  async store({request, response}){
    try {
      const { username, password } = request.only(['username', 'password'])
    const userExist = await User.query()
      .where('username', username)
      .select('*')
      .first();

    if(userExist){
      return response.send({
        error: 'User exist in this database!'
      });
    }

    const user = await User.create({
      username,
      password
    });
    return response.status(204).json({mesage: 'Sucess at create user'})

    } catch (error) {
      return response.status(err.status)
      .send({ error: { message: 'Error at create user' } })

    }

  }

  async index(){
    const users = await User.all();
    return users;
  }
}

module.exports = UserController
