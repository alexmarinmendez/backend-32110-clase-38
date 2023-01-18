const login = require('../services/user.service')

const userController = (req, res) => {
    const { email, password } = req.body
    if (!email) return res.status(400).send({ message: 'Email is required'})
    if (!password) return res.status(400).send({ message: 'Password is required'})
    const isLoggedIn = login(email, password)
    if (!isLoggedIn) return res.status(400).send({ message: 'Invalid email or password' })
    return res.status(200).send({ message: 'Successfully logged in' })
}

module.exports = userController