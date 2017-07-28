const express = require('express')
var bodyParser = require('body-parser')

const app = express()

const port = process.env.PORT || 3000

const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'pug')

app.use('/assets', express.static(`${ __dirname }/public`))

app.post('/postTest', urlencodedParser, function (req, res){
    res.send(req.body)
    // res.render('postText', req.body)
})

app.get('/', function (req, res){
    res.render('index', {title: 'Allen\'s House', content: req.query.content})
})

app.listen(port)