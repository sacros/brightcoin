pragma solidity >=0.4.21 <0.5.0;
//pragma solidity ^0.4.25;

contract BrightCoinTokenConfig
{

    //Token Details  
  string public constant symbol = "PCN"; // This is token symbol
  string public constant name = "ProxiCoin"; // this is token name
  uint256 public constant decimals = 0; // decimal digit for token price calculation
  string public constant version = "1.0";

  uint256 public constant initialSupply = 500000000;

   //For Presales Only 
    uint256  public constant maxCoinSoldDuringPresale = 0;
    uint256  public constant BonusAmountPreSale = 0;//Not Discount and Bonuses for Proxicoin
    uint8    public constant Discount = 0;  //Not Discount and Bonuses for Proxicoin

     //PreSale Start & End Dates 
    uint256 internal ICOstartDate = 1541419200; //05/11/2018 12:00AM GMT 
    uint256 internal ICOendDate =  1561939199;   //30/06/2019 23:59PM GMT 

     //Presale Maximum and Minmum Contributions
    uint256  internal MinimumContribution = 0 ether;
    uint256  internal MaximumContribution = 0 ether;

    //purchase rate can be changed by the Owner
     uint256 public purchaseRate = 0;  //10204 token per Ether

    enum BrightCoinICOType { RegD, RegS, RegDRegS, Utility }
    uint8 public constant ICOType = uint8(BrightCoinICOType.RegDRegS);   //0 for RegD , 1 for RegS and 2 for RedDRegS and 3 means utility ICO

  


   uint internal icoSoftcap = 0; //Minimum Eather to Reach
   uint internal icoHardcap = 250000000; //HardCap

   
   uint256 public constant InitialFounderToken = 200000000;
   uint256 internal constant InitialAllocatedTeamToken = 0;  // Token token allocated for Team distribution
   uint256 internal constant InitialAllocatedAdvisorToken = 10000000;
   uint256 public constant InitialCompanyHoldingValue = 40000000;// Value to be updated via Script


//Investment storage address
address public constant CompanyHoldingAddress = 0xB9872b9AB8235CC3b4253195c5476D284D448c5D;



}