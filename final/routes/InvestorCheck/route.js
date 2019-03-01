var express = require("express");
const routes = express.Router();

var Web3 = require("web3");
var config = require("./config");
const HDWalletProvider = require("truffle-hdwallet-provider-privkey");
var infura_endpoint =
  "https://" + config.network + ".infura.io/v3/" + config.infura_api_key;
var hd = new HDWalletProvider([config.account_private_key], infura_endpoint);
var web3 = new Web3(hd);

// Initializing the BrightCoinInvestorCheck contract
var contract_BrightCoinInvestorCheck = new web3.eth.Contract(
  config.abi_BrightCoinInvestorCheck,
  config.address_BrightCoinInvestorCheck
);

routes.route("/checkBothInvestorValidity").post((req, res) => {
  console.log("checkBothInvestorValidity");
  var data = req.body;
  console.log("req: ", req);
  console.log("got data:", data);
  contract_BrightCoinInvestorCheck.methods
    .checkBothInvestorValidity(
      data.investor,
      data.InvestorAddress,
      data.ICOType
    )
    .call()
    .then(result => {
      res.json({ result });
    })
    .catch(err => {
      console.log(err);
    });
});

routes.route("/checkInvestorValidity").post((req, res) => {
  console.log("checkInvestorValidity");
  var data = req.body;
  console.log("req: ", req);
  console.log("got data:", data);
  contract_BrightCoinInvestorCheck.methods
    .checkInvestorValidity(data.InvestorAddress, data.ICOType)
    .call()
    .then(result => {
      res.json({ result });
    })
    .catch(err => {
      console.log(err);
      res.json({ err });
    });
});

module.exports = routes;
