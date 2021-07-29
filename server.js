

var express = require("express");
var bodyparser = require("body-parser");
const lessons = require("./models/dbhelper")
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: '',       // i have removed my email credentials so it wont work
      pass: ''        // so put a email id and password before procedding
    }
  });

var app = express();


var server = app.listen(3000,myfunc);



function myfunc(){
    console.log("listening...");
}



app.use(express.static('website'));

// parse application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({ extended: true }));
 
// parse application/json
app.use(bodyparser.json());


app.post('/posted', postedAnaliser);

function postedAnaliser(request,response){
    
    lessons.add(request.body);
    console.log(request.body);

    var mailOptions = {
        from: 'zairzapractice@gmail.com',
        to: request.body.senderId,
        subject: request.body.topic,
        text: request.body.textArea
    };
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    });
    

    response.send("your respose is recorded");
}