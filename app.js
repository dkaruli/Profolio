var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var routes = require('./routes/index');
var router = express.Router();
var users = require('./routes/users');
var app = express();
var http = require('http').Server(app);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
//app.use('/', routes);
//app.use(express.static(__dirname + '/public'));
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
               

app.post('/t',function(req,res){
var smtpConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: 'karuliportfolio@gmail.com',
        pass: 'PA%%WORD'
    }
};
var transporter = nodemailer.createTransport(smtpConfig);
      var mailOptions = {
      from: 'karuliportfolio@gmail.com', // sender address
      to: 'dkaruli@gmail.com', // list of receivers
      subject: 'Contact From PortfolioSite', // Subject line
      text: 'From: ' + req.body.fname + ' ' + req.body.lname + '\n' + 'Email: ' + req.body.email + '\n' + 'Phone: ' + req.body.phone + '\n' + 'Message: ' + req.body.message //, // plaintext body
    // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
      };
      console.log(mailOptions);
      transporter.sendMail(mailOptions, function(error, response){
      if (error) {
        console.log(error)
        res.send(error);
        } else {
        res.send(response);
        }
     transporter.close();
    });
});

app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname + '/public/index.html')); // load the single view file (angular will handle the page changes on the front-end)
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

module.exports = app;
