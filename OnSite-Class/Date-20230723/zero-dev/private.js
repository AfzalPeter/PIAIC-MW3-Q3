const { Wallet } = require('ethers')

const PRIVATE_KEY = Wallet.createRandom().privateKey
console.log(PRIVATE_KEY) 

