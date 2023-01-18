const express = require('express')
const router = require('./routes/user.route')

const app = express()
const PORT = 3000
app.use(express.json())
app.listen(PORT, () => console.log('Server up'))

router(app)
