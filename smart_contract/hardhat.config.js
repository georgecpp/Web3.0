require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/BNp0Gc2Bc2618ttfE_CR_K04YA4wBv2O',
      accounts: ['455d01a06ddb4a323114a912e5ae81d86de22f8a3216b35c01684b79dd6d9d0b']
    }
  }
}