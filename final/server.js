var createServer = require("http").createServer;
var express = require("express");
var app = express();
var server = createServer(app);
var config = require("./config");
var bodyParser = require('body-parser');

// all routes
// var investorKYC = require('./routes/InvestorKYC/route');
// var investorCheck = require('./routes/InvestorCheck/route');
// var airDrop = require('./routes/AirDrop/route');
var token = require('./routes/Token/route');


app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());
// app.use("/api/investorKYC", investorKYC);
// app.use("/api/investorCheck", investorCheck);
// app.use("/api/airDrop", airDrop);
app.use("/api/token", token);

token_events = require('./routes/Token/event');
console.log(token_events);
for (let event of token_events) {
    event.on("data", function (event) {
            console.log(event);
        })
        .on("error", console.error);
}

server.listen(config.port, "localhost", err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Listening on port ", config.port);
});
