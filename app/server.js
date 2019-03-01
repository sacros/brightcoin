var createServer = require("http").createServer;
var express = require("express");
var app = express();
var server = createServer(app);
var routes = require("./routes");
var config = require("./config");
var bodyParser = require('body-parser');

// var Web3 = require("web3");
// var config = require("./config");
// const HDWalletProvider = require("truffle-hdwallet-provider-privkey");
// var infura_endpoint =
//   "https://" + config.network + ".infura.io/v3/" + config.infura_api_key;
// var hd = new HDWalletProvider([config.account_private_key], infura_endpoint);
// var web3 = new Web3(hd);
// var routes = require('./routes');

// // Initializing the BrightCoinInvestorCheck contract
// var contract_BrightCoinInvestorCheck = new web3.eth.Contract(
//   config.abi_BrightCoinInvestorCheck,
//   config.address_BrightCoinInvestorCheck
// );

// // Initializing the BrightCoinInvestorKYC contract
// var contract_BrightCoinInvestorKYC = new web3.eth.Contract(
//   config.abi_BrightCoinInvestorKYC,
//   config.address_BrightCoinInvestorKYC
// );
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use("/api", routes);

server.listen(config.port, "localhost", err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Listening on port ", config.port);
});
