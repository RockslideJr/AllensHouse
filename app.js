const express = require('express')
const pug = require('pug')

const app = express()

const port = process.env.PORT || 3000

app.set('view engine', 'pug')

app.use('/assets', express.static(`${ __dirname }/public`))

const index = pug.renderFile('views/index.pug', {title: 'Allen\'s House', content: 'Hello World'})

app.get('/', function (req, res){
    res.render('index', {title: 'Allen\'s House', content: 'Hello WOrld'})
})

app.listen(port)