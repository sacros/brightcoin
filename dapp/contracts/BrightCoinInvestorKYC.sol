pragma solidity >=0.4.21 <0.5.0;
//pragma solidity ^0.4.25;

import "./BrightCoinTokenOwner.sol";

contract BrightCoinInvestorKYC is BrightCoinTokenOwner
{




constructor() public
{

}
    
struct brightCoinInvestorKYCstruct {

    address whitelistedAddress; // Whitelist customer address
    bool kycStatus;  //KYC  Status
    uint256 kycExpiryDateTime; //KYC Expity Date Time
    string kycIPFSHash; //It must contains the details of Investor
    bool deleted;
  }

mapping(address => brightCoinInvestorKYCstruct) brightCoinInvestorKYCDetails;
address[] public brightCoinInvestorKYCAddr;

function SetKYCDetailsofInvestor(address _investordAddress,bool _kycStatus,
                                uint256 _kycExpiryDateTime, string _ipfsHashKYC) public onlyTokenOwner  
 {

       brightCoinInvestorKYCstruct storage investorKYC = brightCoinInvestorKYCDetails[_investordAddress];
       investorKYC.whitelistedAddress = _investordAddress;
       investorKYC.kycStatus = _kycStatus;
       investorKYC.kycExpiryDateTime = _kycExpiryDateTime;
       investorKYC.kycIPFSHash = _ipfsHashKYC;
       brightCoinInvestorKYCAddr.push(_investordAddress);
   }
   
   function RemoveKYCDetailsofInvestor(address _addr) public onlyTokenOwner returns(bool)
   {
         require(_addr != 0x0);
         brightCoinInvestorKYCstruct storage investorKYC = brightCoinInvestorKYCDetails[_addr];
         delete investorKYC.whitelistedAddress;
         delete investorKYC.kycStatus;
         delete investorKYC.kycExpiryDateTime;
         delete investorKYC.kycIPFSHash;
         
         investorKYC.deleted = true;
         return true;
         
         
   }

  function SetKYCStatus(address _investorAddress, bool _kycStatus) public onlyTokenOwner  
  {

    require(_investorAddress != 0x0);

    brightCoinInvestorKYCstruct storage investorKYC = brightCoinInvestorKYCDetails[_investorAddress];
    require(investorKYC.deleted == false, "Investor is deleted");
    investorKYC.kycStatus = _kycStatus;

  }
function CheckKYCStatus(address _investordAddress,uint256 _currentDateTime)  public view returns(bool)
{
    require(_investordAddress != 0x0);
    require(_currentDateTime != 0);

    brightCoinInvestorKYCstruct storage InvestorKYC = brightCoinInvestorKYCDetails[_investordAddress];

    return InvestorKYC.kycStatus;
}



function GetKYCDetails(address _investordAddress)  public view returns(string)
{ 
    
    brightCoinInvestorKYCstruct storage investorKYC = brightCoinInvestorKYCDetails[_investordAddress];
    return investorKYC.kycIPFSHash;
}


function SetKYCExpiryDateTime(address _investordAddress,uint256 _expiryDateTime)  public onlyTokenOwner  
{

     require(_investordAddress != 0x0);
    require(_expiryDateTime != 0);
    
    brightCoinInvestorKYCstruct storage investorKYC = brightCoinInvestorKYCDetails[_investordAddress];
     require(investorKYC.deleted == false, "Investor is deleted");
    investorKYC.kycExpiryDateTime = _expiryDateTime;

}
function GetKYCExpiryDate(address _investordAddress)  public view returns(uint256)
{
    
    brightCoinInvestorKYCstruct storage investorKYC = brightCoinInvestorKYCDetails[_investordAddress];
    return investorKYC.kycExpiryDateTime;
}



function GetKYCCount() view public returns(uint256)
{
    
    return brightCoinInvestorKYCAddr.length;
   
}




}