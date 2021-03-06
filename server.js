// projectData will be the endpoint for all get/post routes to the server
let  projectData = {};
// declare port that the server will listen to 
const port = process.env.PORT || 3000;
// Require express to run server and routes
const express=require('express');
// Require cors to enable cross origin requests to the server endpoint
const cors=require('cors');
// Require body-parser to parse the stream of the request body 
const bodyParser = require('body-parser');

// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder



app.use(express.static('website'));

// Setup Server
app.listen(port,()=>{
  console.log("server running successfully")
  console.log(`Server listening at port number ${port}`);
})
//set get route for the server endpoint
app.get('/getdata',(req,res)=>{
  console.log('a new request to /getdata');
  console.log(projectData);
  res.send(projectData);
})
// set post route for adding to the server endpoint
app.post('/postdata',(req,res)=>{
  console.log('a new request to /postdata');
  const obj=req.body;
  projectData={...obj};
  console.log(projectData);
  res.send();
})
