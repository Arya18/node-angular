// set up ======================================================================
var express  = require('express');
var fs = require("node-fs");  // node library to write, read and delete in file
var app = express();                                 // create our app w/ express
//var mongoose =  require('mongoose');                     // mongoose for mongodb
var port       = process.env.PORT || 8080;                 // set the port
//var database = require('./config/database');             // load the database config

var morgan = require('morgan');         // log requests to the console (express4)
var bodyParser = require('body-parser');     // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

// configuration ===============================================================
//mongoose.connect(database.url);     // connect to mongoDB database on modulus.io

app.use(express.static(__dirname + '/app'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));             // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

// routes ======================================================================

        var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {

    fs.readFile('app/data/users.json', function (err, data) {
              if (err)
                  return console.log(err);   
                  console.log('Hello World > helloworld.txt');
                  console.log(JSON.parse(data));
                  res.send(data);
        });
});

router.post('/editUser/:id', function(req, res) {
      var id = req.param("id");
      fs.readFile('app/data/users.json', function (err, data) {
              if (err)
                  return console.log(err);                  
                  var str  = JSON.parse(data);
                  var index = str.map(function(d) {
                  return d['id']; }).indexOf(Number(id));
                  console.log("index ==>"+index);
                  var postData = req.body;
                  var key = '';
                  for(key in postData){
                    // keys.push(key);
                    console.log(postData);
                    console.log(postData[key]);

                    console.log("changing value");
                  var arrFound = str.filter(function(item,i) {
                    if(i == index){
                      console.log(item)
                      // if(key == "firstName")
                  item[key] = postData[key];
                // else-
                //   item.firstName = item.firstName;
                //     if(key == "lastName")
                //       item.lastName = postData[keys];
                //     else
                //   item.lastName = item.lastName;
                //      if(key == "contactNum")
                //       item.contactNum = postData[keys];
                //      else
                //   item.contactNum = item.contactNum;
                   }
                    });
                  }
                  
                 // console.log(data[0].firstName);
                 console.log("changed")
                 console.log(str);
                 fs.writeFile('app/data/users.json', JSON.stringify(str), function (err) {
              if (err)
                  return console.log(err);
                  
        });
                 return res.status(200).send(str) // return 200 and success message
      });
      
});

router.delete('/deleteUser/:id', function(req, res) {
         var id = req.param("id");
         console.log("Here is the id ==> " +id);

         fs.readFile('app/data/users.json', function (err, data) {
              if (err)
                  return console.log(err);   
                  console.log('Hello World > helloworld.txt');                 
                  var str  = JSON.parse(data);
                var index = str.map(function(d) {
                return d['id']; }).indexOf(Number(id));
                str.splice(index, 1);
                res.send(str);
        fs.writeFile('app/data/users.json', JSON.stringify(str), function (err) {
              if (err)
                  return console.log(err);
                  console.log('Hello World > helloworld.txt');
        });
                  // $(data).each(function(i){

                  // });
        });
       
    });



app.use('/api', router);
// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);