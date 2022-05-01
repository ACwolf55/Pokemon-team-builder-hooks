
const bcrypt = require('bcryptjs')

module.exports = {

  register: async (req, res)=>{ 
    const { user_name, password } = req.body
    const db = req.app.get('db')

    const result = await db.login([user_name])
    const existingUser = result[0]

    if (existingUser) {
      return res.status(409).send('Username taken')
    }

    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
    const registeredUser = await db.register([user_name, hash])
    console.log(registeredUser)
    const user = registeredUser[0]
    req.session.user = { user_name: user.user_name, id: user.pkm_user_id }
    return res.status(201).send(req.session.user)

  },

  login: async (req, res) => {
    const { user_name, password } = req.body
    const foundUser = await req.app.get('db').login([user_name])
    const user = foundUser[0]
    console.log(user)
    if (!user) {
      return res.status(401).send('User not found')
    }
    const isAuth = bcrypt.compareSync(password, user.hash)

    if (!isAuth) {
      return res.status(403).send('Incorrect Password')
    }
    req.session.user = { user_name: user.user_name, id: user.pkm_user_id }

    return res.status(200).send(req.session.user)
  },

  logout: (req, res) => {
    req.session.destroy()
    return res.sendStatus(200)
  },

  getSession: (req,res) => {
    if(req.session.user){
      res.status(200).send(req.session.user)
    }
    else{
      res.sendStatus(200)
    }
  },

  test: (req,res) => {
   res.send('test')
  },

  
}