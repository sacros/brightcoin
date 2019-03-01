Web3 = require("web3");
var ws_provider = 'wss://rinkeby.infura.io/ws'
var _web3 = new Web3(new Web3.providers.WebsocketProvider(ws_provider))

contractAbi = require("./BrightCoinRegulatedTokenABI.json");
contractAddress = "0x72a3cf8364b40afeeaa8176b931be708ebdcbc9e";

var _contract = new _web3.eth.Contract(contractAbi, contractAddress);

console.log("Starting listener ....");

events = [];

TransferEvent = _contract.events.Transfer({
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

ApprovalEvent = _contract.events.Approval({
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

PresaleFinalizedEvent = _contract.events.PresaleFinalized({
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

ICOSoftCapReachedEvent = _contract.events.ICOSoftCapReached({
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

ICOSoftUnsuccessFullEvent = _contract.events.ICOSoftUnsuccessFull({
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

BurnEvent = _contract.events.Burn({
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

MintEvent = _contract.events.Mint({
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

BuyTokenEvent = _contract.events.BuyToken({
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

events.push(TransferEvent);
events.push(ApprovalEvent);
events.push(PresaleFinalizedEvent);
events.push(ICOSoftCapReachedEvent);
events.push(ICOSoftUnsuccessFullEvent);
events.push(BurnEvent);
events.push(MintEvent);
events.push(BuyTokenEvent);

module.exports = events;