Web3 = require("Web3")
var contractAbi = [{
        "constant": true,
        "inputs": [],
        "name": "data",
        "outputs": [{
            "name": "",
            "type": "uint32"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [{
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
        "inputs": [{
            "name": "_data",
            "type": "uint32"
        }],
        "name": "setDat",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
var contractAddress = "0x704de1386067026b7e4b46a28d08cab0b8b8f357";

var ws_provider = 'wss://rinkeby.infura.io/ws'
var _web3 = new Web3(new Web3.providers.WebsocketProvider(ws_provider))
var _contract = new _web3.eth.Contract(contractAbi, contractAddress);

console.log("Starting listner ....");

setValueEvent = _contract.events.SetValue({
        fromBlock: 0,
        address: contractAddress,
        toBlock: 'latest'
    }, function (error, result) {
        //   if (result) {
        //     var args = result.returnValues;
        //     args["_txn"] = result.transactionHash;
        //     console.log(args);
        //     console.log(result);
        //   }
    })
    .on("data", function (event) {
        console.log(event);
        console.log("\nGot data\n");
    })
    // .on("changed", function(event) {
    //   console.log(event);
    //   // remove event from local database
    // })
    .on("error", console.error);


// _contract.getPastEvents('SetValue', {
//   fromBlock: 0,
//   toBlock: 'latest'
// }, function(error, events){ console.log("prev events: ", events); })
// .then(function(events){
//   console.log(events) // same results as the optional callback above
// });