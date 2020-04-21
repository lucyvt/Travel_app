// Setup empty JS object to act as endpoint for all routes
projectData = [];

// Require Express to run server and routes
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('/dist'));

// Setup Server

const port = 8081;
module.exports = app.listen(port,listening);

function listening(){
    console.log("Server is running")
    console.log(`Running on local host: ${port}`);
}

// Creates a proxy server to remove orign issues
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});


app.post('/trip/weather', (req, res) => {
  request(
      { url: req.body.url },
      (error, response, body) => {
          if (error || response.statusCode !== 200) {
              return res.status(500).json({ type: 'error', message: error.message });
          }
          res.json(JSON.parse(body));
      }
  )
});