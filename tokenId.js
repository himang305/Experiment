
// node api for getting tokenId if transaction not confirmed on front end

const Web3 = require('web3');
const rpcURL = 'https://rpc-mumbai.maticvigil.com/';
const hash = '0x2f07f36176409eff4442c76520b938e288c3494de57f3de9decbd1abc5ccb73e';   // transaction hash to be pass as argument value from php

const init2 = async () => {
    const web3 = new Web3(rpcURL);
    var receipt = await web3.eth.getTransactionReceipt(hash);
    var D = web3.eth.abi.decodeParameters(['uint256'], receipt.logs[2].topics[1]);
    console.log(D[0]);
}
init2();
