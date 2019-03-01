var express = require("express");
const routes = express.Router();

var Web3 = require("web3");
var config = require("./config");
const HDWalletProvider = require("truffle-hdwallet-provider-privkey");
var infura_endpoint =
  "https://" + config.network + ".infura.io/v3/" + config.infura_api_key;
var hd = new HDWalletProvider([config.account_private_key], infura_endpoint);
var web3 = new Web3(hd);

// Initializing the BrightCoinAirDrop contract
var contract_BrightCoinAirDrop = new web3.eth.Contract(
  config.abi_BrightCoinAirDrop,
  config.address_BrightCoinAirDrop
);

routes.route("/SetRegulatedTokenContract").post((req, res) => {
  console.log("SetRegulatedTokenContract");
  var data = req.body;
  console.log("req: ", req);
  console.log("got data:", data);
  contract_BrightCoinAirDrop.methods
    .SetRegulatedTokenContract(data.regulatedToken)
    .send({ from: config.account_address, gas: config.gas })
    .then(result => {
      res.json({ result });
    })
    .catch(err => {
      console.log(err);
      res.json({ err });
    });
});

routes.route("/TransferBounties").post((req, res) => {
  console.log("TransferBounties");
  var data = req.body;
  console.log("req: ", req);
  console.log("got data:", data);
  contract_BrightCoinAirDrop.methods
    .TransferBounties(
      data.lockexpiry,
      data.lockApplied,
      data.bountyhunter,
      data.amount
    )
    .send({ from: config.account_address, gas: config.gas })
    .then(result => {
      res.json({ result });
    })
    .catch(err => {
      console.log(err);
      res.json({ err });
    });
});

routes.get("/GetBountyTokenBalances", (req, res) => {
    console.log("GetBountyTokenBalances");
    var data = req.body;
    console.log("req: ", req);
    console.log("got data:", data);
    contract_BrightCoinAirDrop.methods
      .GetBountyTokenBalances()
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
