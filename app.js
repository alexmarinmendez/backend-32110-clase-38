const express = require('express')
const userController = require('./controllers/user.controller')

const app = express()
const PORT = 3000
app.use(express.json())
app.listen(PORT, () => console.log('Server up'))

app.post('/users', userController)
