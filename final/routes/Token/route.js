var express = require("express");
const routes = express.Router();

var Web3 = require("web3");
var config = require("./config");
const HDWalletProvider = require("truffle-hdwallet-provider-privkey");
var infura_endpoint =
  "https://" + config.network + ".infura.io/v3/" + config.infura_api_key;
var hd = new HDWalletProvider([config.account_private_key], infura_endpoint);
var web3 = new Web3(hd);

// Initializing the BrightCoinERC20 contract
// var contract_BrightCoinERC20 = new web3.eth.Contract(
//   config.abi_BrightCoinERC20,
//   config.address_BrightCoinERC20
// );
// Initializing the BrightCoinRegulatedToken contract
var contract_BrightCoinRegulatedToken = new web3.eth.Contract(
  config.abi_BrightCoinRegulatedToken,
  config.address_BrightCoinRegulatedToken
);

routes.route("/distributeToken").post((req, res) => {
  console.log("DistributeToken");
  var data = req.body;
  console.log("req: ", req);
  console.log("got data:", data);
  contract_BrightCoinRegulatedToken.methods
    .DistributeToken(
      data.AddrOfInvestor,
      data.tokenamount,
      data.tokenlockPeriod,
      data.currenttime
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

routes.route("/transfer").post((req, res) => {
  console.log("transfer");
  var data = req.body;
  console.log("req: ", req);
  console.log("got data:", data);
  contract_BrightCoinRegulatedToken.methods
    .transfer(data.to, data.tokens)
    .send({ from: config.account_address, gas: config.gas })
    .then(result => {
      res.json({ result });
    })
    .catch(err => {
      console.log(err);
      res.json({ err });
    });
});

routes.route("/tranfertocustodian").post((req, res) => {
  console.log("tranfertocustodian");
  var data = req.body;
  console.log("req: ", req);
  console.log("got data:", data);
  contract_BrightCoinRegulatedToken.methods
  .transfer(data.to)
  .send({ from: config.account_address, gas: config.gas })
  .then(result => {
    res.json({ result });
  })
  .catch(err => {
    console.log(err);
    res.json({ err });
  });
});

routes.route("/approve").post((req, res) => {
  console.log("approve");
  var data = req.body;
  console.log("req: ", req);
  console.log("got data:", data);
  contract_BrightCoinRegulatedToken.methods
  .transfer(data.spender, data.value)
  .send({ from: config.account_address, gas: config.gas })
  .then(result => {
    res.json({ result });
  })
  .catch(err => {
    console.log(err);
    res.json({ err });
  });
});

routes.route("/transferfrom").post((req, res) => {
  console.log("transferfrom");
  var data = req.body;
  console.log("req: ", req);
  console.log("got data:", data);
  contract_BrightCoinRegulatedToken.methods
    .transfer(data.from, data.to, data.tokens)
    .send({ from: config.account_address, gas: config.gas })
    .then(result => {
      res.json({ result });
    })
    .catch(err => {
      console.log(err);
      res.json({ err });
    });
});

routes.route("/setKYCAndAccridetionAddres").post((req, res) => {
  console.log("setKYCAndAccridetionAddres");
  var data = req.body;
  console.log("req: ", req);
  console.log("got data:", data);
  contract_BrightCoinRegulatedToken.methods
    .setKYCAndAccridetionAddres(data.kyc, data.InvestorAcrridetion)
    .send({ from: config.account_address, gas: config.gas })
    .then(result => {
      res.json({ result });
    })
    .catch(err => {
      console.log(err);
      res.json({ err });
    });
});

routes.route("/setKYCSupport").post((req, res) => {
  console.log("setKYCSupport");
  var data = req.body;
  console.log("req: ", req);
  console.log("got data:", data);
  contract_BrightCoinRegulatedToken.methods
    .setKYCSupport(data.kycSupportAcquired)
    .send({ from: config.account_address, gas: config.gas })
    .then(result => {
      res.json({ result });
    })
    .catch(err => {
      console.log(err);
      res.json({ err });
    });
});

routes.route("/setInvestorSecuritySupport").post((req, res) => {
  console.log("setInvestorSecuritySupport");
  var data = req.body;
  console.log("req: ", req);
  console.log("got data:", data);
  contract_BrightCoinRegulatedToken.methods
    .setInvestorSecuritySupport(data.securitySupport)
    .send({ from: config.account_address, gas: config.gas })
    .then(result => {
      res.json({ result });
    })
    .catch(err => {
      console.log(err);
      res.json({ err });
    });
});

routes.route("/distributeTokentoAdmin").post((req, res) => {
  console.log("DistributeTokentoAdmin");
  var data = req.body;
  console.log("req: ", req);
  console.log("got data:", data);
  contract_BrightCoinRegulatedToken.methods
    .DistributeTokentoAdmin(
      data.addr,
      data.tokens,
      data.lockExpiryDateTime,
      data.adminType
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

routes.route("/transferCompanyHoldingTokens").post((req, res) => {
  console.log("TransferCompanyHoldingTokens");
  var data = req.body;
  console.log("req: ", req);
  console.log("got data:", data);
  contract_BrightCoinRegulatedToken.methods
    .TransferCompanyHoldingTokens(data.lockExpiry)
    .send({ from: config.account_address, gas: config.gas })
    .then(result => {
      res.json({ result });
    })
    .catch(err => {
      console.log(err);
      res.json({ err });
    });
});

routes.route("/UpdateTokenlockValidity").post((req, res) => {
  console.log("UpdateTokenlockValidity");
  var data = req.body;
  console.log("req: ", req);
  console.log("got data:", data);
  contract_BrightCoinRegulatedToken.methods
    .UpdateTokenlockValidity(data.addr ,data.lockperiod)
    .send({ from: config.account_address, gas: config.gas })
    .then(result => {
      res.json({ result });
    })
    .catch(err => {
      console.log(err);
      res.json({ err });
    });
});

routes.route("/changeSoftCap").post((req, res) => {
  console.log("ChangeSoftCap");
  var data = req.body;
  console.log("req: ", req);
  console.log("got data:", data);
  contract_BrightCoinRegulatedToken.methods
    .ChangeSoftCap(data.newSoftCap)
    .send({ from: config.account_address, gas: config.gas })
    .then(result => {
      res.json({ result });
    })
    .catch(err => {
      console.log(err);
      res.json({ err });
    });
});

routes.route("/changeHardCapLimit").post((req, res) => {
  console.log("changeHardCapLimit");
  var data = req.body;
  console.log("req: ", req);
  console.log("got data:", data);
  contract_BrightCoinRegulatedToken.methods
    .changeHardCapLimit(data.newHardCap)
    .send({ from: config.account_address, gas: config.gas })
    .then(result => {
      res.json({ result });
    })
    .catch(err => {
      console.log(err);
      res.json({ err });
    });
});

routes.get("/getSoftcap", (req, res) => {
  console.log("GetSoftcap");
  var data = req.body;
  console.log("req: ", req);
  console.log("got data:", data);
  contract_BrightCoinRegulatedToken.methods
    .GetSoftcap()
    .call()
    .then(result => {
      res.json({ result });
    })
    .catch(err => {
      console.log(err);
      res.json({ err });
    });
});

routes.get("/getHardcap", (req, res) => {
  console.log("GetHardcap");
  var data = req.body;
  console.log("req: ", req);
  console.log("got data:", data);
  contract_BrightCoinRegulatedToken.methods
    .GetHardcap()
    .call()
    .then(result => {
      res.json({ result });
    })
    .catch(err => {
      console.log(err);
      res.json({ err });
    });
});

routes.get("/checkIfSoftcapAchived", (req, res) => {
  console.log("CheckIfSoftcapAchived");
  var data = req.body;
  console.log("req: ", req);
  console.log("got data:", data);
  contract_BrightCoinRegulatedToken.methods
    .CheckIfSoftcapAchived()
    .call()
    .then(result => {
      res.json({ result });
    })
    .catch(err => {
      console.log(err);
      res.json({ err });
    });
});

routes.route("/checkIfHardcapAchived").post((req, res) => {
  console.log("CheckIfHardcapAchived");
  var data = req.body;
  console.log("req: ", req);
  console.log("got data:", data);
  contract_BrightCoinRegulatedToken.methods
    .CheckIfHardcapAchived(
      data.tokens,
    )
    .call()
    .then(result => {
      res.json({ result });
    })
    .catch(err => {
      console.log(err);
    });
});

routes.route("/updateTokenMintingOption").post((req, res) => {
  console.log("UpdateTokenMintingOption");
  var data = req.body;
  console.log("req: ", req);
  console.log("got data:", data);
  contract_BrightCoinRegulatedToken.methods
    .UpdateTokenMintingOption(data.mintingOption)
    .send({ from: config.account_address, gas: config.gas })
    .then(result => {
      res.json({ result });
    })
    .catch(err => {
      console.log(err);
      res.json({ err });
    });
});

routes.route("/balanceOf").post((req, res) => {
  console.log("balanceOf");
  var data = req.body;
  console.log("req: ", req);
  console.log("got data:", data);
  contract_BrightCoinRegulatedToken.methods
    .balanceOf(
      data.who,
    )
    .call()
    .then(result => {
      res.json({ result });
    })
    .catch(err => {
      console.log(err);
    });
});

routes.get("/totalSupply", (req, res) => {
  console.log("totalSupply");
  var data = req.body;
  console.log("req: ", req);
  console.log("got data:", data);
  contract_BrightCoinRegulatedToken.methods
    .totalSupply()
    .call()
    .then(result => {
      res.json({ result });
    })
    .catch(err => {
      console.log(err);
      res.json({ err });
    });
});

routes.route("/allowance").post((req, res) => {
  console.log("allowance");
  var data = req.body;
  console.log("req: ", req);
  console.log("got data:", data);
  contract_BrightCoinRegulatedToken.methods
    .allowance(
      data.owner,
      data.spender
    )
    .call()
    .then(result => {
      res.json({ result });
    })
    .catch(err => {
      console.log(err);
    });
});

routes.route("/mint").post((req, res) => {
  console.log("mint");
  var data = req.body;
  console.log("req: ", req);
  console.log("got data:", data);
  contract_BrightCoinRegulatedToken.methods
    .mint(data.to, data.value)
    .send({ from: config.account_address, gas: config.gas })
    .then(result => {
      res.json({ result });
    })
    .catch(err => {
      console.log(err);
      res.json({ err });
    });
});

routes.route("/burn").post((req, res) => {
  console.log("burn");
  var data = req.body;
  console.log("req: ", req);
  console.log("got data:", data);
  contract_BrightCoinRegulatedToken.methods
    .burn(data.value)
    .send({ from: config.account_address, gas: config.gas })
    .then(result => {
      res.json({ result });
    })
    .catch(err => {
      console.log(err);
      res.json({ err });
    });
});

routes.route("/pauseICOtransaction").post((req, res) => {
  console.log("pauseICOtransaction");
  var data = req.body;
  console.log("req: ", req);
  console.log("got data:", data);
  contract_BrightCoinRegulatedToken.methods
    .pauseICOtransaction(data.status)
    .send({ from: config.account_address, gas: config.gas })
    .then(result => {
      res.json({ result });
    })
    .catch(err => {
      console.log(err);
      res.json({ err });
    });
});

routes.route("/transferownership").post((req, res) => {
  console.log("transferownership");
  var data = req.body;
  console.log("req: ", req);
  console.log("got data:", data);
  contract_BrightCoinRegulatedToken.methods
    .transferownership(data.newOwner)
    .send({ from: config.account_address, gas: config.gas })
    .then(result => {
      res.json({ result });
    })
    .catch(err => {
      console.log(err);
      res.json({ err });
    });
});

module.exports = routes;