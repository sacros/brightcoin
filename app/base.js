config = require("./config");
Web3 = require("web3");
// util = require('util');

const HDWalletProvider = require("truffle-hdwallet-provider-privkey");
const privKeys = [
  "E29EC0A5DFA10FFC73C67F17971AE24A97845BCD1C02F311F43890539DD5FA99"
];

var hd = new HDWalletProvider(
  privKeys,
  "https://rinkeby.infura.io/v3/56d49f2052a544feb74b157295b39a2c"
);
var web3 = new Web3(hd);

// var web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/56d49f2052a544feb74b157295b39a2c"));

// var fs = require('fs');
// fs.writeFileSync('web3.json', 'var web3 = '+util.inspect(web3), (err) => {console.log(err);});
// console.log("config", config);
var abi_BrightCoinInvestorKYC = config.abi_BrightCoinInvestorKYC;
var address_BrightCoinInvestorKYC = config.address_BrightCoinInvestorKYC;
var abi_BrightCoinInvestorCheck = config.abi_BrightCoinInvestorCheck;
var address_BrightCoinInvestorCheck = config.address_BrightCoinInvestorCheck;
var account_address = config.account_address;
var account_private_key = config.account_private_key;

// var abi_Yo = config.abi_Yo;
// var address_Yo = config.address_Yo;

// Initializing the BrightCoinInvestorCheck contract
var contract_BrightCoinInvestorCheck = new web3.eth.Contract(
  abi_BrightCoinInvestorCheck,
  address_BrightCoinInvestorCheck
);

// Initializing the BrightCoinInvestorKYC contract
var contract_BrightCoinInvestorKYC = new web3.eth.Contract(
  abi_BrightCoinInvestorKYC,
  address_BrightCoinInvestorKYC
);

// var contract_Yo = new web3.eth.Contract(abi_Yo, address_Yo);

const checkBothInvestorValidity = async (
  _investor,
  _InvestorAddress,
  _ICOType
) => {
  try {
    var answer = await contract_BrightCoinInvestorCheck.methods
      .checkBothInvestorValidity(_investor, _InvestorAddress, _ICOType)
      .call();
    console.log(answer);
    return answer;
  } catch (err) {
    console.log("\n!!!!!!!!GOT ERROR!!!!!!!!\n", err);
    return err;
  }
};

const checkInvestorValidity = async (_InvestorAddress, _ICOType) => {
  try {
    var answer = await contract_BrightCoinInvestorCheck.methods
      .checkInvestorValidity(_InvestorAddress, _ICOType)
      .call();
    console.log(answer);
    return answer;
  } catch (err) {
    console.log("\n!!!!!!!!GOT ERROR!!!!!!!!\n", err);
    return err;
  }
};

const SetKYCDetailsofInvestor = async (
  _InvestordAddress,
  _KYCStatus,
  _KYCExpiryDateTime,
  _ipfsHashKYC
) => {
  try {
    var answer = await contract_BrightCoinInvestorKYC.methods
      .SetKYCDetailsofInvestor(
        _InvestordAddress,
        _KYCStatus,
        _KYCExpiryDateTime,
        _ipfsHashKYC
      )
      .send({ from: account_address, gas: 150000 });
    console.log(answer);
    return answer;
  } catch (err) {
    console.log("\n!!!!!!!!GOT ERROR!!!!!!!!\n", err);
    return err;
  }
};

const SetKYCStatus = async (_InvestorAddress, _kycStatus) => {
  try {
    var answer = await contract_BrightCoinInvestorKYC.methods
      .SetKYCStatus(_InvestorAddress, _kycStatus)
      .send({ from: account_address, gas: 150000 });
    console.log(answer);
    return answer;
  } catch (err) {
    console.log("\n!!!!!!!!GOT ERROR!!!!!!!!\n", err);
    return err;
  }
};

const CheckKYCStatus = async (_InvestordAddress, _currentDateTime) => {
  try {
    var answer = await contract_BrightCoinInvestorKYC.methods
      .CheckKYCStatus(_InvestordAddress, _currentDateTime)
      .call();
    console.log(answer);
    return answer;
  } catch (err) {
    console.log("\n!!!!!!!!GOT ERROR!!!!!!!!\n", err);
    return err;
  }
};

const GetKYCDetails = async _InvestordAddress => {
  try {
    var answer = await contract_BrightCoinInvestorKYC.methods
      .GetKYCDetails(_InvestordAddress)
      .call();
    console.log(answer);
    return answer;
  } catch (err) {
    console.log("\n!!!!!!!!GOT ERROR!!!!!!!!\n", err);
    return err;
  }
};

const SetKYCExpiryDateTime = async (_InvestordAddress, _expiryDateTime) => {
  try {
    var answer = await contract_BrightCoinInvestorKYC.methods
      .SetKYCExpiryDateTime(_InvestordAddress, _expiryDateTime)
      .send({ from: account_address, gas: 150000 });
    console.log(answer);
    return answer;
  } catch (err) {
    console.log("\n!!!!!!!!GOT ERROR!!!!!!!!\n", err);
    return err;
  }
};

const GetKYCExpiryDate = async _InvestordAddress => {
  try {
    var answer = await contract_BrightCoinInvestorKYC.methods
      .GetKYCExpiryDate(_InvestordAddress)
      .call();
    console.log(answer);
    return answer;
  } catch (err) {
    console.log("\n!!!!!!!!GOT ERROR!!!!!!!!\n", err);
    return err;
  }
};

const GetKYCCount = async () => {
  try {
    var answer = await contract_BrightCoinInvestorKYC.methods
      .GetKYCCount()
      .call();
    console.log("Answer is: ", answer);
    return answer;
  } catch (err) {
    console.log("\n!!!!!!!!Got error!!!!!!!!\n", err);
  }
};

// web3.eth.defaultAccount = account_address;
// web3.eth.accounts.wallet.add(account_private_key);

// console.log(web3.eth.accounts.wallet);

// SetKYCDetailsofInvestor(
//   "0x4aD0Ab4C649F1CEd8B5c3317EAe17254ed3453Bb",
//   0,
//   50,
//   "ipfsString-new"
// );
GetKYCDetails("0x4aD0Ab4C649F1CEd8B5c3317EAe17254ed3453Bb");
checkBothInvestorValidity('a','b','c');
/* 
const setValue = async (_value) => {
    try {
        var answer = await contract_Yo.methods.setValue(_value).send({from: account_address, gas:150000});
        console.log(answer);
        return (answer);
    }
    catch(err) {
        console.log("\n!!!!!!!!GOT ERROR!!!!!!!!\n", err);
        return err;
    }
}

const getValue = async() => {
    try {
        var answer = await contract_Yo.methods.getValue().call();
        console.log("Answer is: ", answer);
        return answer;
    }
    catch(err) {
        console.log("\n!!!!!!!!GOT ERROR!!!!!!!!\n", err);
        return err;
    }
}
*/

/*

const Web3 = require('web3')  
let web3 = new Web3()  
web3.providers.HttpProvider('https://ropsten.infura.io/my_access_token_here'))  
let contract = web3.eth.contract(abi).at(address)  
var coder = require('web3/lib/solidity/coder')  
var CryptoJS = require('crypto-js')  
var privateKey = new Buffer(myPrivateKey, 'hex')  

var functionName = 'addRecord'  
var types = ['uint','bytes32','bytes20','bytes5','bytes']  
var args = [1, 'fjdnjsnkjnsd', '03:00:21 12-12-12', 'true', '']  
var fullName = functionName + '(' + types.join() + ')'  
var signature = CryptoJS.SHA3(fullName,{outputLength:256}).toString(CryptoJS.enc.Hex).slice(0, 8)  
var dataHex = signature + coder.encodeParams(types, args)  
var data = '0x'+dataHex  

var nonce = web3.toHex(web3.eth.getTransactionCount(account))  
var gasPrice = web3.toHex(web3.eth.gasPrice)  
var gasLimitHex = web3.toHex(300000) (user defined)  
var rawTx = { 'nonce': nonce, 'gasPrice': gasPrice, 'gasLimit': gasLimitHex, 'from': account, 'to': address, 'data': data}  
var tx = new Tx(rawTx)  
tx.sign(privateKey)  
var serializedTx = '0x'+tx.serialize().toString('hex')  
web3.eth.sendRawTransaction(serializedTx, function(err, txHash){ console.log(err, txHash) })   

*/
