Web3 = require("web3");
var ws_provider = 'wss://rinkeby.infura.io/ws'
var _web3 = new Web3(new Web3.providers.WebsocketProvider(ws_provider))

contractAbi = require("./TestABI.json");
contractAddress = "0x51d01bb1b0d306d5f369ab69c1437d6ed4bbe213";

var _contract = new _web3.eth.Contract(contractAbi, contractAddress);

console.log("Starting listner ....");

events = [];

ASet = _contract.events.ASet({
    fromBlock: 0,
    address: contractAddress,
    toBlock: 'latest'
}, function (error, result) {
    if (error) console.log(error)
    else if (result) {
        var args = result.returnValues;
        args["_txn"] = result.transactionHash;
        console.log(args);
        console.log(result);
    }
})

BSet = _contract.events.BSet({
    fromBlock: 0,
    address: contractAddress,
    toBlock: 'latest'
}, function (error, result) {
    if (error) console.log(error)
    else if (result) {
        var args = result.returnValues;
        args["_txn"] = result.transactionHash;
        console.log(args);
        console.log(result);
    }
})

events.push(ASet);
events.push(BSet);

module.exports = events;