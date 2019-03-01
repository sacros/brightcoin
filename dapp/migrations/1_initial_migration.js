var Migrations = artifacts.require("./Migrations.sol");
// var BrightCoinInvestorKYC = artifacts.require("./BrightCoinInvestorKYC.sol");
// var BrightCoinInvestorCheck = artifacts.require("./BrightCoinInvestorCheck.sol");
// var BrightCoinAirDrop = artifacts.require("./BrightCoinAirDrop.sol");
// var BrightCoinERC20Contract = artifacts.require("./BrightCoinERC20Contract.sol");
var BrightCoinRegulatedToken = artifacts.require("./BrightCoinRegulatedToken.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  // deployer.deploy(BrightCoinInvestorKYC);
  // deployer.deploy(BrightCoinInvestorCheck);
  // deployer.deploy(BrightCoinAirDrop);
  // deployer.deploy(BrightCoinERC20Contract);
  deployer.deploy(BrightCoinRegulatedToken);
};
