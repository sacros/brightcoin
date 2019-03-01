pragma solidity >=0.4.21 <0.5.0;

contract BrightCoinMessage
{
    //Error Code 
uint8 public constant SUCCESS_CODE = 0;
uint8 public constant ZERO_ADDRESS_RESTRICTION_CODE = 1;
uint8 public constant TOKEN_TRANSFER_LOCK_CODE = 2;
uint8 public constant INVESTOR_ACCREDITION_FAILED_CODE = 3;
uint8 public constant INVESTOR_KYC_FAILED_CODE = 4;
uint8 public constant INVESTOR_ICO_PAUSED_CODE = 5;
uint8 public constant INVESTOR_TOKEN_LOCK_EXPIRED_CODE = 6;
uint8 public constant TOKEN_TRANSFER_UTILITY_TOKEN_CODE = 7;

//Error Message
string public constant UNKNOWN_MESSAGE = "UNKNOWN";
string public constant SUCCESS_MESSAGE = "SUCCESS";
string public constant ZERO_ADDRESS_RESTRICTION_MESSAGE = "ILLEGAL_TRANSFER_TO_ZERO_ADDRESS";
string public constant TOKEN_TRANSFER_LOCK_MESSAGE = "TIME LOCKED TOKEN CAN NOT TRANSFR";
string public constant INVESTOR_ACCREDITION_FAILED_MESSAGE = "INVESTOR ACCREDITION IS NOT VALID";
string public constant INVESTOR_KYC_FAILED_MESSAGE = "INVESTOR IS NOT KYC ENABLED";
string public constant ICO_PAUSED_MESSAGE = "ICO IS PAUSED";
string public constant TOKEN_TRANSFER_UTILITY_TOKEN_MESSAGE = "TOKEN IS UTILITY TOKEN";



/// @notice Returns a human-readable message for a given restriction code
/// @param restrictionCode Identifier for looking up a message
/// @return Text showing the restriction's reasoning
/// @dev Overwrite with your custom message and restrictionCode handling
 function messageForTransferRestriction (uint8 restrictionCode)
        public pure returns (string message)
    {
        message = UNKNOWN_MESSAGE;
        if (restrictionCode == SUCCESS_CODE) {
            message = SUCCESS_MESSAGE;
        } else if (restrictionCode == ZERO_ADDRESS_RESTRICTION_CODE) {
            message = ZERO_ADDRESS_RESTRICTION_MESSAGE;
        } else if (restrictionCode == TOKEN_TRANSFER_LOCK_CODE) {
            message = TOKEN_TRANSFER_LOCK_MESSAGE;
        } else if (restrictionCode == INVESTOR_ACCREDITION_FAILED_CODE) {
            message = INVESTOR_ACCREDITION_FAILED_MESSAGE;
        } else if (restrictionCode == INVESTOR_KYC_FAILED_CODE) {
            message = INVESTOR_KYC_FAILED_MESSAGE;
        }
    }
    
    
    /// @notice Detects if a transfer will be reverted and if so returns an appropriate reference code
    /// @param from Sending address
    /// @param to Receiving address
    /// @param value Amount of tokens being transferred
    /// @return Code by which to reference message for rejection reasoning
    /// @dev Overwrite with your custom transfer restriction logic
   /* function detectTransferRestriction (address from, address to, uint256 value)
        public view returns (uint8 restrictionCode)
    {
        restrictionCode = SUCCESS_CODE; // success
        if (to == address(0x0)) {
            restrictionCode = ZERO_ADDRESS_RESTRICTION_CODE; // illegal transfer to zero address
        }
    }
    */
}