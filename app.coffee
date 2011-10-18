express = require 'express'
stylus = require 'stylus'

app = express.createServer()

# stylus
app.use stylus.middleware {
  debug: true,
  src: __dirname + '/public', 
  dest: __dirname + '/public',
  compile: (str) ->
    stylus(str).set 'compress', true
}

# config
app.use express.static(__dirname + '/public')
app.set 'view engine', 'jade'
app.set 'views', __dirname + '/views'
app.set 'view options', {layout: false}
app.use express.bodyParser()
app.use express.methodOverride()
app.use express.cookieParser()
app.use express.session({ secret: 'your secret here' })


app.configure 'development', ->
  app.use express.errorHandler { dumpExceptions: true, showStack: true }

app.configure 'production', ->
  app.use express.errorHandler()

questions = [
  {title: "HTML Question", description: "Is it better to making web page using div tag or table?"},
  {title: "HTML Question", description: "Is it better to making web page using div tag or table?"},
  {title: "HTML Question", description: "Is it better to making web page using div tag or table?"},
  {title: "HTML Question", description: "Is it better to making web page using div tag or table?"},
  {title: "HTML Question", description: "Is it better to making web page using div tag or table?"}
];

app.get '/', (req, res) ->
  res.render 'index', { questions: questions }

app.listen 8080
