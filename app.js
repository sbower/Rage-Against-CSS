(function() {
  var app, express, questions, stylus;
  express = require('express');
  stylus = require('stylus');
  app = express.createServer();
  app.use(stylus.middleware({
    debug: true,
    src: __dirname + '/public',
    dest: __dirname + '/public',
    compile: function(str) {
      return stylus(str).set('compress', true);
    }
  }));
  app.use(express.static(__dirname + '/public'));
  app.set('view engine', 'jade');
  app.set('views', __dirname + '/views');
  app.set('view options', {
    layout: false
  });
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session({
    secret: 'your secret here'
  }));
  app.configure('development', function() {
    return app.use(express.errorHandler({
      dumpExceptions: true,
      showStack: true
    }));
  });
  app.configure('production', function() {
    return app.use(express.errorHandler());
  });
  questions = [
    {
      title: "HTML Question",
      description: "Is it better to making web page using div tag or table?"
    }, {
      title: "HTML Question",
      description: "Is it better to making web page using div tag or table?"
    }, {
      title: "HTML Question",
      description: "Is it better to making web page using div tag or table?"
    }, {
      title: "HTML Question",
      description: "Is it better to making web page using div tag or table?"
    }, {
      title: "HTML Question",
      description: "Is it better to making web page using div tag or table?"
    }
  ];
  app.get('/', function(req, res) {
    return res.render('index', {
      questions: questions
    });
  });
  app.listen(process.env.PORT || 3000);
}).call(this);
