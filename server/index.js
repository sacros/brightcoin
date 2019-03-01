var infura_endpoint =
"https://rinkeby.infura.io/v3/56d49f2052a544feb74b157295b39a2c";
var web3 = new Web3(new Web3.providers.HttpProvider(infura_endpoint));

const privateKey =
  "E29EC0A5DFA10FFC73C67F17971AE24A97845BCD1C02F311F43890539DD5FA99";
const account = web3.eth.accounts.privateKeyToAccount("0x" + privateKey);
web3.eth.accounts.wallet.add(account);
web3.eth.defaultAccount = account.address;
console.log(account);
var contractAbi = [
  {
    "constant": true,
    "inputs": [],
    "name": "data",
    "outputs": [
      {
        "name": "",
        "type": "uint32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "oldData",
        "type": "uint32"
      },
      {
        "indexed": false,
        "name": "newData",
        "type": "uint32"
      }
    ],
    "name": "SetValue",
    "type": "event"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_data",
        "type": "uint32"
      }
    ],
    "name": "setDat",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
];
var contractAddress = "0x704de1386067026b7e4b46a28d08cab0b8b8f357";
var contract = new web3.eth.Contract(contractAbi, contractAddress);
console.log(contract);
// var data = 10;

function updateAns() {
  contract.methods.data().call().then((d) => {
    console.log(d);
    document.getElementById("ans").innerHTML=d;
  })
}
updateAns()
function test(val) {
  console.log("Sent", val)
  contract.methods
    .setDat(val)
    .send({ from: account.address, gas: 100000 })
    .then(dat => {
      updateAns();
      console.log("sent data", dat)
      contract.once('SetValue', {
        fromBlock: 0
      }, function(error, event){ console.log(event); });
    })
    .catch(err => {
      console.log(err);
    });
}

contract.once('SetValue', {
  fromBlock: 0
}, function(error, event){ console.log(event); });



var ws_provider = 'wss://rinkeby.infura.io/ws'
var _web3 = new Web3(new Web3.providers.WebsocketProvider(ws_provider))
var _contract = new _web3.eth.Contract(contractAbi, contractAddress);

console.log("Starting listner ....");

setValueEvent = _contract.events.SetValue({fromBlock: 0, address: contractAddress, toBlock: 'latest'}, function(error, result){
  if (result) {
    var args = result.returnValues;
    args["_txn"] = result.transactionHash;
    console.log(args);
    console.log(result);
  }
})




setValueEvent.on("data", function(event) {
  console.log(event);
})
.on("changed", function(event) {
  console.log(event);
  // remove event from local database
})
.on("error", console.error);
console.log(setValueEvent);

_contract.getPastEvents('SetValue', {
  fromBlock: 0,
  toBlock: 'latest'
}, function(error, events){ console.log("prev events: ", events); })
.then(function(events){
  console.log(events) // same results as the optional callback above
});