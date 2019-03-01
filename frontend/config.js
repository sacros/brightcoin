var config = {
  abi_BrightCoinInvestorKYC: [
    {
      constant: true,
      inputs: [
        {
          name: "",
          type: "uint256"
        }
      ],
      name: "BrightCoinInvestorKYCAddr",
      outputs: [
        {
          name: "",
          type: "address"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: false,
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "owner",
      outputs: [
        {
          name: "",
          type: "address"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "isOwner",
      outputs: [
        {
          name: "",
          type: "bool"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        {
          name: "newOwner",
          type: "address"
        }
      ],
      name: "transferOwnership",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "constructor"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "previousOwner",
          type: "address"
        }
      ],
      name: "OwnershipRenounced",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "previousOwner",
          type: "address"
        },
        {
          indexed: true,
          name: "newOwner",
          type: "address"
        }
      ],
      name: "OwnershipTransferred",
      type: "event"
    },
    {
      constant: false,
      inputs: [
        {
          name: "InvestordAddress",
          type: "address"
        },
        {
          name: "KYCStatus",
          type: "bool"
        },
        {
          name: "KYCExpiryDateTime",
          type: "uint256"
        },
        {
          name: "ipfsHashKYC",
          type: "string"
        }
      ],
      name: "SetKYCDetailsofInvestor",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        {
          name: "InvestorAddress",
          type: "address"
        },
        {
          name: "kycStatus",
          type: "bool"
        }
      ],
      name: "SetKYCStatus",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: true,
      inputs: [
        {
          name: "InvestordAddress",
          type: "address"
        },
        {
          name: "currentDateTime",
          type: "uint256"
        }
      ],
      name: "CheckKYCStatus",
      outputs: [
        {
          name: "",
          type: "bool"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [
        {
          name: "InvestordAddress",
          type: "address"
        }
      ],
      name: "getKYCDetails",
      outputs: [
        {
          name: "",
          type: "string"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        {
          name: "InvestordAddress",
          type: "address"
        },
        {
          name: "expiryDateTime",
          type: "uint256"
        }
      ],
      name: "SetKYCExpiryDateTime",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: true,
      inputs: [
        {
          name: "InvestordAddress",
          type: "address"
        }
      ],
      name: "GetKYCExpiryDate",
      outputs: [
        {
          name: "",
          type: "uint256"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "GetKYCCount",
      outputs: [
        {
          name: "",
          type: "uint256"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    }
  ],
  address_BrightCoinInvestorKYC: "0xf204a4ef082f5c04bb89f7d5e6568b796096735a",
  abi_BrightCoinInvestorCheck: [
    {
      constant: false,
      inputs: [
        {
          name: "Investoraddr",
          type: "address"
        },
        {
          name: "AccreditionStatus",
          type: "bool"
        },
        {
          name: "AccreditionExpiryDateTime",
          type: "uint256"
        },
        {
          name: "InvestorGeoLocation",
          type: "uint256"
        },
        {
          name: "ipfsHashRegDInvestor",
          type: "string"
        }
      ],
      name: "AddInvestorAccreditionDetails",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: true,
      inputs: [
        {
          name: "",
          type: "uint256"
        }
      ],
      name: "accreditedInvestors",
      outputs: [
        {
          name: "",
          type: "address"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [
        {
          name: "AccreditedInvestoraddr",
          type: "address"
        }
      ],
      name: "GetGeoLocationAccreditedInvestor",
      outputs: [
        {
          name: "",
          type: "uint256"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [
        {
          name: "AccreditedInvestoraddr",
          type: "address"
        }
      ],
      name: "CheckAccreditionStatus",
      outputs: [
        {
          name: "",
          type: "bool"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        {
          name: "investorAddress",
          type: "address"
        },
        {
          name: "status",
          type: "bool"
        }
      ],
      name: "SetAccreditionStatus",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: true,
      inputs: [
        {
          name: "",
          type: "uint256"
        }
      ],
      name: "NonAccreditedInvestors",
      outputs: [
        {
          name: "",
          type: "address"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "owner",
      outputs: [
        {
          name: "",
          type: "address"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "isOwner",
      outputs: [
        {
          name: "",
          type: "bool"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [
        {
          name: "Investoraddr",
          type: "address"
        }
      ],
      name: "GetGeoLocationOfNonInvestor",
      outputs: [
        {
          name: "",
          type: "uint256"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        {
          name: "AccreditedInvestoraddr",
          type: "address"
        },
        {
          name: "expiryDateTime",
          type: "uint256"
        }
      ],
      name: "SetAccreditionExpiryDateTime",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        {
          name: "Investoraddr",
          type: "address"
        },
        {
          name: "InvestorGeoLocation",
          type: "uint256"
        },
        {
          name: "ipfsHashRegSInvestor",
          type: "string"
        }
      ],
      name: "AddNonAccreditedInvestorDetails",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        {
          name: "newOwner",
          type: "address"
        }
      ],
      name: "transferOwnership",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "constructor"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "previousOwner",
          type: "address"
        }
      ],
      name: "OwnershipRenounced",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "previousOwner",
          type: "address"
        },
        {
          indexed: true,
          name: "newOwner",
          type: "address"
        }
      ],
      name: "OwnershipTransferred",
      type: "event"
    },
    {
      constant: true,
      inputs: [
        {
          name: "investor",
          type: "address"
        },
        {
          name: "InvestorAddress",
          type: "address"
        },
        {
          name: "ICOType",
          type: "uint8"
        }
      ],
      name: "checkBothInvestorValidity",
      outputs: [
        {
          name: "",
          type: "bool"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [
        {
          name: "InvestorAddress",
          type: "address"
        },
        {
          name: "ICOType",
          type: "uint8"
        }
      ],
      name: "checkInvestorValidity",
      outputs: [
        {
          name: "",
          type: "bool"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    }
  ],
  address_BrightCoinInvestorCheck: "0x30753e4a8aad7f8597332e813735def5dd395028",
  gas: 150000
};
