pragma solidity >=0.4.21 <0.5.0;
//pragma solidity ^0.4.25;

//pragma experimental "v0.5.0";

import "./BrightCoinInvestorKYC.sol";
import "./BrightCoinTokenOwner.sol";
import "./BrightCoinERC20Contract.sol";
import  "./BrightCoinInvestorCheck.sol";



//Rules for Accredited Investors
/*
 This is special BrightCoinToken that will allow User to invest to Token Only after Proper Checks and Validation as provide by US Regulatories Authorities
*/

/*
 import all specific contract that will help in Validation 
 Accridetion
 KYC
 TokenDistribution Details
*/

contract BrightCoinRegulatedToken  is BrightCoinERC20
{

    BrightCoinInvestorKYC InvestorKYCInfo;
    BrightCoinInvestorCheck AccreditationInfo;
    address public BrightCoinInvestorKYCAddress; 
    address public BrightCoinInvestorAccreditationAddress; 
    
    //mapping (uint8 => uint256) private PeriodTokenAmount;
    bool InvestorSecurity;
    bool KYCSupport;
    
    event BuyToken(address owner, address investor, uint256 amount);
  

constructor() public 
{
 InvestorSecurity = false;
 KYCSupport = false;
}



function DistributeToken(address AddrOfInvestor,
                          uint256 tokenamount,
                          uint256 tokenlockPeriod,
                          uint256 currenttime
                          ) onlyTokenOwner public
  {

     // require(AddrOfInvestor != 0x0);
      require(tokenlockPeriod > 0);
      require(tokenamount > 0);
      require(currenttime > 0);
      require(TokenSaleOn==true);

     
     uint8 responsecode = checkCompliance(AddrOfInvestor);
     require(CheckIfHardcapAchived(tokenamount) == true);
     require( responsecode == SUCCESS_CODE,messageForTransferRestriction(responsecode));
      uint256 tokenTimeLock = now.add(tokenlockPeriod);
        //Check if the token to be transfer is being approved by Owner
      internaltransfer(msg.sender,AddrOfInvestor,tokenamount);
      //PeriodTokenAmount[0] = PeriodTokenAmount[0].add(tokenamount);
      SetTokenLock(AddrOfInvestor,tokenTimeLock,tokenamount);
  }

function detectTransferRestriction( address _from , address _to, uint256 _tokens) private
 returns(uint8 restrictionCode) 
{
    //check if locking period is expired or not 
      uint256 currenttime = now;
      restrictionCode = SUCCESS_CODE;
      
      if(pauseICO == true)
     {
       restrictionCode = INVESTOR_ICO_PAUSED_CODE;
       return restrictionCode;
     } //if this flag is true the no operation is allowed.

     if((_to == address(0) )|| (_from == address(0)))
     {
       restrictionCode = ZERO_ADDRESS_RESTRICTION_CODE;
       return restrictionCode;
     }
     if(KYCSupport == true)
     {
        //check KYC info of newInvestor  and Token Provider 
        if(InvestorKYCInfo.CheckKYCStatus(_to,now) == false)
        {
          restrictionCode = INVESTOR_KYC_FAILED_CODE;
          return restrictionCode;
        }

    }
      if (InvestorSecurity == true)
      {
          
           if(isTokenLockExpire(_from,currenttime) == true)
           { 
               internaltransfer(_from,_to,_tokens);  
               return restrictionCode;
           }
           
           uint256 TokenLockExpiry = getTokenLockExpiry(_from); 
         
         if( ICOType != uint8(BrightCoinICOType.Utility))
         {
          
           if(AccreditationInfo.checkBothInvestorValidity(_from,_to, ICOType) == false)
           {
             restrictionCode = INVESTOR_ACCREDITION_FAILED_CODE;
             return restrictionCode;
           }
            SetTokenLock(_to,TokenLockExpiry,_tokens);
            internaltransfer(_from,_to,_tokens);
            
         }
         else
         {

            if(isTokenLockExpire(msg.sender,currenttime) == false)
            {
              restrictionCode = TOKEN_TRANSFER_LOCK_CODE;
              return restrictionCode;
           }
          SetTokenLock(_to,TokenLockExpiry,_tokens);
          internaltransfer(_from,_to,_tokens);
         }
            
      }
      else
      {
        
        if(isTokenLockExpire(msg.sender,currenttime) == false)
        {
          restrictionCode = TOKEN_TRANSFER_LOCK_CODE;
          return restrictionCode;
        }
        
        internaltransfer(_from,_to,_tokens);
         
      }
      
      return restrictionCode;
}




  //This method will be called when investor  wants to tranfer token to other.  
function transfer(address _to, uint256 _tokens) public returns (bool) 
 {     
       
    uint8 responseCode = detectTransferRestriction(msg.sender ,_to,_tokens);
    require(responseCode == SUCCESS_CODE,messageForTransferRestriction(responseCode));
       
       return true;

 }

function tranfertocustodian(address _to) public onlyTokenOwner returns(bool)
{
    internaltransfer(msg.sender, _to, balances[msg.sender]);
    custodianaddress = _to;
    return true;
}
      
function checkCompliance(address _investor) view private  returns(uint8 responsecode)
{
    responsecode = SUCCESS_CODE;
    if(_investor == address(0x0))
    {
          responsecode = ZERO_ADDRESS_RESTRICTION_CODE;
          return responsecode;
    }
    
     if(KYCSupport == true)
      {
        //check KYC info of newInvestor  and Token Provider 
        if(InvestorKYCInfo.CheckKYCStatus(_investor,now) == false)
        {
          responsecode = INVESTOR_KYC_FAILED_CODE;
          return responsecode;
        }
      }
    if(InvestorSecurity == true)
      {
        
         if(AccreditationInfo.checkInvestorValidity(_investor,ICOType) == false)
         {
           responsecode = INVESTOR_ACCREDITION_FAILED_CODE;
          return responsecode;
         }
      }

      return responsecode;
}

function approve(address _spender, uint256 _value) public returns (bool success) {
     
      uint8 responsecode = checkCompliance(_spender);
      require( responsecode == SUCCESS_CODE,messageForTransferRestriction(responsecode));
      allowed[msg.sender][_spender] = _value;
      emit Approval(msg.sender, _spender, _value);
      
      return true;
    }
        //This method will be called when investor  wants to tranfer token to other.  
function transferfrom(address _from, address _to, uint256 _tokens) public returns (bool) 
 {     
         require(_tokens > 0);
      require(allowed[_from][msg.sender] >= _tokens);

      uint8 responsecode = detectTransferRestriction(_from ,_to,_tokens);
      require( responsecode == SUCCESS_CODE,messageForTransferRestriction(responsecode));
    
      //If regulated transfer is true then only reduce allowed map
      allowed[_from][msg.sender] = allowed[_from][msg.sender].sub(_tokens);
      return true;
      
}


function setKYCAndAccridetionAddres(address _kyc, 
                      address _InvestorAcrridetion ) onlyTokenOwner public 
{

	
	BrightCoinInvestorKYCAddress = _kyc;
	BrightCoinInvestorAccreditationAddress = _InvestorAcrridetion;

    InvestorKYCInfo = BrightCoinInvestorKYC(_kyc);
    AccreditationInfo = BrightCoinInvestorCheck(_InvestorAcrridetion);
    
}




//Set the KYC check implementation
function setKYCSupport(bool _kycSupportAcquired) onlyTokenOwner public
{
  KYCSupport = _kycSupportAcquired;
}

//Set the Accridition check implementation
function setInvestorSecuritySupport(bool _securitySupport) onlyTokenOwner public
{
  InvestorSecurity = _securitySupport;
}


 //Function to Distribute token to Admin.
 function DistributeTokentoAdmin(address _addr , uint256 _tokens, 
                      uint256 _lockExpiryDateTime,uint8 _adminType ) onlyTokenOwner public returns(bool)
 {
   require(_tokens >0);
   require(_addr != 0x0, messageForTransferRestriction(ZERO_ADDRESS_RESTRICTION_CODE));
   require(_lockExpiryDateTime > 0);
   
   uint256 lockexpiry;

 bool Addrexists= isAddrExists(_addr);
 if(!Addrexists)
 {
    require(InterTransferToAdmin(_addr,_tokens,_adminType) == true);
    lockexpiry = now.add(_lockExpiryDateTime);
    AddAdminToken(_addr,_tokens,lockexpiry,true,_adminType);
     emit Transfer(msg.sender, _addr, _tokens);
    SetTokenLock(_addr,lockexpiry,_tokens);
     
  }
  else
 {
      require(InterTransferToAdmin(_addr,_tokens,_adminType) == true);
        //Transfer Founder token
      lockexpiry = now.add(_lockExpiryDateTime);
      UpdateAdminTokenDetails(_addr,_tokens,lockexpiry,_adminType);
      emit Transfer(msg.sender, _addr, _tokens);
     IncreaseTokenAmount(_addr,lockexpiry,_tokens);
  
  }

  return true;

 }

 

   function TransferCompanyHoldingTokens(uint256 _lockExpiry)  public onlyTokenOwner  returns(bool)
  { 
    
      require(CompanyHoldingBalances[msg.sender] == CompanyHoldingValue) ; 
      uint256 Holdinglockexpiry = now.add(_lockExpiry);
     
     // balances[CompanyHoldingAddress] = CompanyHoldingBalances[msg.sender];
      internaltransfer(msg.sender,CompanyHoldingAddress,CompanyHoldingValue);
      CompanyHoldingBalances[msg.sender] = 0;
      SetTokenLock(CompanyHoldingAddress,Holdinglockexpiry,CompanyHoldingValue);
      emit Transfer(msg.sender, CompanyHoldingAddress, CompanyHoldingValue);
      return true;

 } 

 //Update token lock validity
 function UpdateTokenlockValidity(address _addr, uint256 _lockperiod) onlyTokenOwner public returns(bool)
 {
   require(_addr != 0x0, messageForTransferRestriction(ZERO_ADDRESS_RESTRICTION_CODE));
     uint256 _validity = now.add(_lockperiod);
    return  IncreaseTokenValidity(_addr,_validity);
 }


}