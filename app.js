const express = require('express')
const app = express()
const { engine } = require('express-handlebars') 

const port = 3000

app.engine('handlebars', engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log('connect')
})