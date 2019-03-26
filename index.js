//Express body parser
const express = require('express') //require function that loads the modules and give acess to their exports
const bodyParser = require('body-parser')
const store = require('./store')
const app = express()
app.use(express.static('public'))
app.use(bodyParser.json())
app.post('/createUser', (req, res) => {
  store
    .createUser({
      username: req.body.username,
      password: req.body.password
    })
    .then(() => res.sendStatus(200))
})

const PORT = ('port', process.env.PORT || 3000);
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});