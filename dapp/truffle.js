const HDWalletProvider = require("truffle-hdwallet-provider-privkey");
const privKeys = ["E29EC0A5DFA10FFC73C67F17971AE24A97845BCD1C02F311F43890539DD5FA99"]; // private keys

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 9545,
      // gas: 500000,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: new HDWalletProvider(privKeys, "https://rinkeby.infura.io/v3/56d49f2052a544feb74b157295b39a2c"),
      network_id: 4,
      gas: 5000000
    }
  },
};

