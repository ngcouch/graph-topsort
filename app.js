// --- LOADING MODULES
var express = require('express'),
    body_parser = require('body-parser'),
    redis = require('redis'),
    rejson = require('redis-json')



// --- INSTANTIATE THE APP
var app = express();

// --- STATIC MIDDLEWARE 
app.use(express.static(__dirname + '/public'));
app.use('/jsPsych', express.static(__dirname + "/jsPsych"));
app.use('/experiment-data', express.static(__dirname + "/experiment-data"));
app.use(body_parser.json());

// --- VIEW LOCATION, SET UP SERVING STATIC HTML
app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// --- ROUTING
app.get('/', function(request, response) {
    response.render('index.html');
});

// --- START THE SERVER 
var server = app.listen(process.env.PORT || 51746, function(){
    console.log("Listening on port %d", server.address().port);
});

// --- POST

app.post('/experiment-data', function(request, response) {

    var client = redis.createClient(process.env.REDISTOGO_URL)
    client.on('connect', function() {
	console.log('connected');
    });

    console.log(request.body)
    
    var data = request.body
    var PID  = data[0].subject

    if (!client.exists(PID)) {

	var flat = JSON.stringify(data)
	client.set(PID, flat)

	console.log("Data logged")

    }

    response.end("")
  
   
})


