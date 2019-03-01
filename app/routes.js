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

// Initializing the BrightCoinInvestorKYC contract
var contract_BrightCoinInvestorKYC = new web3.eth.Contract(
  config.abi_BrightCoinInvestorKYC,
  config.address_BrightCoinInvestorKYC
);
console.log(contract_BrightCoinInvestorCheck);
console.log(contract_BrightCoinInvestorKYC);
// contract_BrightCoinInvestorKYC.methods
//   .checkBothInvestorValidity("investor", "InvestorAddress", "ICOType")
//   .call()
//   .then(result => {
//     res.json({ result });
//   })
//   .catch(err => {
//     console.log(err);
//   });
routes.get("/one", (req, res) => {
  console.log("called one");
  res.json({ msg: "got data" });
});

routes.get("/two", (req, res) => {
  console.log("called two");
  res.json({ msg: "got data again" });
});

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

routes.route("/setKYCDetailsofInvestor").post((req, res) => {
  console.log("setKYCDetailsofInvestor");
  var data = req.body;
  console.log("req: ", req);
  console.log("got data:", data);
  contract_BrightCoinInvestorKYC.methods
    .SetKYCDetailsofInvestor(
      data.InvestordAddress,
      data.KYCStatus,
      data.KYCExpiryDateTime,
      data.ipfsHashKYC
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

routes.route("/setKYCStatus").post((req, res) => {
  console.log("setKYCStatus");
  var data = req.body;
  console.log("req: ", req);
  console.log("got data:", data);
  contract_BrightCoinInvestorKYC.methods
    .SetKYCStatus(
      data.InvestorAddress,
      data.kycStatus
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

routes.route("/checkKYCStatus").post((req, res) => {
  console.log("checkKYCStatus");
  var data = req.body;
  console.log("req: ", req);
  console.log("got data:", data);
  contract_BrightCoinInvestorKYC.methods
    .CheckKYCStatus(
      data.InvestordAddress,
      data.currentDateTime
    )
    .call()
    .then(result => {
      res.json({ result });
    })
    .catch(err => {
      console.log(err);
      res.json({ err });
    });
});

routes.route("/getKYCDetails").post((req, res) => {
  console.log("getKYCDetails");
  var data = req.body;
  console.log("req: ", req);
  console.log("got data:", data);
  contract_BrightCoinInvestorKYC.methods
    .GetKYCDetails(
      data.InvestordAddress
    )
    .call()
    .then(result => {
      res.json({ result });
    })
    .catch(err => {
      console.log(err);
      res.json({ err });
    });
});

routes.route("/setKYCExpiryDateTime").post((req, res) => {
  console.log("setKYCExpiryDateTime");
  var data = req.body;
  console.log("req: ", req);
  console.log("got data:", data);
  contract_BrightCoinInvestorKYC.methods
    .SetKYCExpiryDateTime(
      data.InvestordAddress,
      data.expiryDateTime
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

routes.route("/getKYCExpiryDate").post((req, res) => {
  console.log("getKYCExpiryDate");
  var data = req.body;
  console.log("req: ", req);
  console.log("got data:", data);
  contract_BrightCoinInvestorKYC.methods
    .GetKYCExpiryDate(
      data.InvestordAddress,
    )
    .call()
    .then(result => {
      res.json({ result });
    })
    .catch(err => {
      console.log(err);
      res.json({ err });
    });
});

routes.get("/getKYCCount", (req, res) => {
  console.log("getKYCCount");
  var data = req.body;
  console.log("req: ", req);
  console.log("got data:", data);
  contract_BrightCoinInvestorKYC.methods
    .GetKYCCount()
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
