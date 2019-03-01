pragma solidity >=0.4.21 <0.5.0;
//pragma solidity ^0.4.25;

import "./BrightCoinTokenOwner.sol";
import "./SafeMath.sol";
import "./BrightCoinTokenConfig.sol";

//Section1
//...............................................................................
contract BrightCoinTokenPreSaleDetails is BrightCoinTokenOwner, BrightCoinTokenConfig
{

    //address owner;
    using SafeMath for uint;
    constructor() public
    {
    }
  
    //Current Presale Status 
    bool public TokenSaleOn = true;
 
     //Function for changing the startDate of Presale
    function changeStartDate(uint256 _startDateTimeStamp, uint256 _currenttime) public onlyTokenOwner  returns(bool){

    require(ICOstartDate > _currenttime );
    require( _startDateTimeStamp < ICOendDate );
    ICOstartDate = _startDateTimeStamp;
    return true;
  }

    function getMaxCoinSoldDuringPreSale(uint256 _decimal) pure internal  returns(uint256)
    {
        uint256 val = maxCoinSoldDuringPresale*(10**uint256(_decimal));
        return val;
        
    }

    /**
   * @dev It changes end date of Presale , provided it is not crossed.
   * @param _endDateTimeStamp The new proposed end datetime for Presale.
   */
    function changeEndDate(uint256 _endDateTimeStamp,uint256 _currenttime) public onlyTokenOwner  returns(bool) 
    {
      require(_endDateTimeStamp > _currenttime);
      require(ICOendDate > _currenttime);
      require( _endDateTimeStamp > ICOstartDate );
      ICOendDate = _endDateTimeStamp;
      return true;
    }
    
    /**
   * @dev It check whether the datetime passed is in presale period or not
   * @param _currenttime The datetime to be checked for presale period.
   */
     function inPreSalePeriod(uint256 _currenttime) public view returns (bool) {
      if (_currenttime >= ICOstartDate && _currenttime <= ICOendDate) 
          return true;
      else 
          return false;     
     }

    /**
   * @dev It will change the presale status or true/false depending upon input
   * @param _tokensalestatus the staus to be set with presale.
   */
     function changeTokenSaleStatus(bool _tokensalestatus) public onlyTokenOwner 
     {
       TokenSaleOn = _tokensalestatus;
     }
}



 
  