var path = "../../../dapp/build/contracts/";
var config_BrightCoinInvestorCheck = require(path +
  "BrightCoinInvestorCheck.json");

module.exports = {
  abi_BrightCoinInvestorCheck: config_BrightCoinInvestorCheck.abi,
  address_BrightCoinInvestorCheck:
    config_BrightCoinInvestorCheck.networks["4"].address,
  account_address: "0xB6e49c267693eC0EB353b7216c0088641B71De3A",
  account_private_key:
    "E29EC0A5DFA10FFC73C67F17971AE24A97845BCD1C02F311F43890539DD5FA99",
  network: "rinkeby", //kova, ropsten, mainnet
  infura_api_key: "56d49f2052a544feb74b157295b39a2c",
  gas: 150000
};
