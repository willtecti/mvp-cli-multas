
var express = require('express');
var app = express();
const request = require('request');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded




app.use((req, res, next)=> {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  
    next();
  });


  app.get('/api/auth/token/', function (req, res) {

    const { username, password} = req.body
    var options = {
        url: 'https://www.seekcar.com.br/api/auth/token/',
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8',
            
        },
        form: { username: 'testelw', password: 'asdfg1234'}
      };

    request.post(options, function(err, response, body) {
      console.log('body',err)
          if(!err){
            let json = JSON.parse(body);
            res.json(json)
          }else{
            res.json(err)
          }

  });
})



app.post('/api/auth/token/', function (req, res) {

    const { username, password} = req.body
    var options = {
        url: 'https://www.seekcar.com.br/api/auth/token/',
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8',
            'User-Agent': 'my-reddit-client'
        },
        form: { username, password}
      };

    request.post(options, function(err, response, body) {
      if(!err){
        let json = JSON.parse(body);
        res.json(json)
      }else{
        res.json(err)
      }

  });
})

app.get('/api/vehicles/', function (req, res) {
    var options = {
        url: 'https://www.seekcar.com.br/api/vehicles/ ',
        method: 'GET',
        headers: {
            'Authorization': `Token 2b479dfe7c3364a8cd17af00565ae0aad808e607`,
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8',
            'User-Agent': 'my-reddit-client'
        }        
      };
    request.get(options, function(err, response, body) {
        let json = JSON.parse(body);
        res.json(json)

  });
})
  
  app.listen(2000, function () {
    console.log('Example app listening on port 2000!');
  });