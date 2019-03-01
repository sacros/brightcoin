if (typeof web3 !== "undefined") {
  web3 = new Web3(web3.currentProvider);
} else {
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}
console.log("Got web3: ", web3);

var abi_BrightCoinInvestorKYC = config.abi_BrightCoinInvestorKYC;
var address_BrightCoinInvestorKYC = config.address_BrightCoinInvestorKYC;
var abi_BrightCoinInvestorCheck = config.abi_BrightCoinInvestorCheck;
var address_BrightCoinInvestorCheck = config.address_BrightCoinInvestorCheck;
var account_address = config.account_address;
var account_private_key = config.account_private_key;

// Initializing the BrightCoinInvestorCheck contract
var contract_BrightCoinInvestorCheck = web3.eth
  .contract(abi_BrightCoinInvestorCheck)
  .at(address_BrightCoinInvestorCheck);

// Initializing the BrightCoinInvestorKYC contract
var contract_BrightCoinInvestorKYC = web3.eth
  .contract(abi_BrightCoinInvestorKYC)
  .at(address_BrightCoinInvestorKYC);

const checkBothInvestorValidity = (_investor, _InvestorAddress, _ICOType) => {
  contract_BrightCoinInvestorCheck.checkBothInvestorValidity.call(
    _investor,
    _InvestorAddress,
    _ICOType,
    { from: web3.eth.accounts[0] },
    function(err, ans) {
      console.log("answer,err: ", answer, err);
    }
  );
};

const checkInvestorValidity = (_InvestorAddress, _ICOType) => {
  contract_BrightCoinInvestorCheck.checkInvestorValidity.call(
    _InvestorAddress,
    _ICOType,
    { from: web3.eth.accounts[0] },
    function(err, ans) {
      console.log("answer,err: ", answer, err);
    }
  );
};

const SetKYCDetailsofInvestor = (
  _InvestordAddress,
  _KYCStatus,
  _KYCExpiryDateTime,
  _ipfsHashKYC
) => {
  contract_BrightCoinInvestorKYC.SetKYCDetailsofInvestor(
    _InvestordAddress,
    _KYCStatus,
    _KYCExpiryDateTime,
    _ipfsHashKYC,
    { from: account_address, gas: 150000 },
    function(err, ans) {
      console.log(ans);
    }
  );
};

const SetKYCStatus = (_InvestorAddress, _kycStatus) => {
    contract_BrightCoinInvestorKYC.SetKYCStatus(
      _InvestorAddress,
      _kycStatus,
      { from: account_address, gas: 150000 },
      function(err,ans) {
        console.log(err, ans);
      }
    );
};

const CheckKYCStatus = (_InvestordAddress, _currentDateTime) => {
  contract_BrightCoinInvestorKYC.CheckKYCStatus(
    _InvestordAddress,
    _currentDateTime,
    { from: web3.eth.accounts },
    (answer, err) => {
      console.log(answer);
    }
  );
};

const getKYCDetails = _InvestordAddress => {
  contract_BrightCoinInvestorKYC.getKYCDetails(
    _InvestordAddress,
    { from: web3.eth.accounts[0] },
    function(err, answer) {
      console.log("err: ", err, "answer ", answer);
      if (err) {
        console.log("\n!!!!!!!!GOT ERROR!!!!!!!!\n", err);
        return err;
      }
    }
  );
};

const SetKYCExpiryDateTime = (_InvestordAddress, _expiryDateTime) => {
  contract_BrightCoinInvestorKYC.SetKYCExpiryDateTime(
    _InvestordAddress,
    _expiryDateTime,
    { from: web3.eth.accounts[0], gas: 150000 },
    function(err, ans) {
      console.log("err: ", err, "ans: ", ans);
    }
  );
  console.log(answer);
  return answer;
};

const GetKYCExpiryDate = _InvestordAddress => {
    contract_BrightCoinInvestorKYC
      .GetKYCExpiryDate
      .call(_InvestordAddress, {from: web3.eth.accounts[0]}, (err, ans) => {
        console.log(ans);
      })
};

const GetKYCCount = () => {
  contract_BrightCoinInvestorKYC.GetKYCCount.call(
    { from: web3.eth.accounts[0] },
    function (answer, err) {
      console.log(answer);
    }
  );
};
