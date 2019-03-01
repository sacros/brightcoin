/*
Reg S -
 This is for USA companies raising money outside USA. 
 This can have a 6 Month or a 1 year lockin. 
 (KYC/AML has to be done). The other rule is that these tokens cannot be sold to a USA person for a 1 year period. 
 */
 
pragma solidity >=0.4.21 <0.5.0;
//pragma solidity ^0.4.25;

import "./BrightCoinTokenOwner.sol";
import "./SafeMath.sol";

contract BrightCoinnonAccridetedInvestor is BrightCoinTokenOwner
{


using SafeMath for uint;
uint256  private constant defaultgeolation = 999999;
constructor() public
{
 
}
  /////////////////////////////////////////////

    struct nonAccreditedInvestor {
        address investor;
        uint256 investorGeoLocation;
        string ipfsHashRegSInvestor; //It must contains the details of Investor
        uint8 detailadded;
      
    }

    mapping(address => nonAccreditedInvestor) nonAccreditedInvestorDetails;
    address[] public nonAccreditedInvestors;

    /*Function to Add Investor details*/
     function  AddNonAccreditedInvestorDetails(address _investoraddr,
                             uint256 _investorGeoLocation,
                           string _ipfsHashRegSInvestor )
                           public onlyTokenOwner 
    {
      
      require(_investoraddr != 0x0);
       nonAccreditedInvestor storage investment = nonAccreditedInvestorDetails[_investoraddr];
       investment.investor = _investoraddr;
       investment.investorGeoLocation = _investorGeoLocation;
       investment.ipfsHashRegSInvestor = _ipfsHashRegSInvestor;
       investment.detailadded = 1;
       nonAccreditedInvestors.push(_investoraddr);
    }

    
 function GetGeoLocationOfNonInvestor(address _investoraddr) 
                 view  public returns(uint256)
 {
    nonAccreditedInvestor storage structNonAccredeted =  nonAccreditedInvestorDetails[_investoraddr];
   if (structNonAccredeted.detailadded != 1)
     return defaultgeolation;
   // require(structNonAccredeted.investorGeoLocation !=0, "Geolocation Should not be zero");
    return structNonAccredeted.investorGeoLocation;
 }


}