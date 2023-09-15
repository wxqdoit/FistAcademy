const express = require('express');
const app = express();



const ethers = require('ethers')
const countryTable = require('./abi/Token.json');
const rpc = 'https://endpoints.omniatech.io/v1/matic/mumbai/public'
const provider = new ethers.JsonRpcProvider(rpc)
const wallet = new ethers.Wallet('0xf4a7b5925f5cd6db020b184312d89a216bdcb25ff440d93d2d371312e2693985', provider)
const contractAddress = "0x6564263E02ba4b9C8770A9a9EF380bb152594FC6"
console.log()
let contract = new ethers.Contract(contractAddress, countryTable.abi, wallet)

// const init = async () => {
//   let tx = {
//     value: 0.1,
//     to: '0x199A6c55739757dCaD45c085Ae9B708Cee12cb30',
//     from: wallet.address,
//     gasLimit: 21000,
//     gasPrice: ethers.parseUnits('35', 'gwei'),
//   };
//   let sendTx = await wallet.sendTransaction(tx);
// }

const transferUsdt = async () => {

}


app.get('/faucet', async (req, res) => {
  try {
    let address = req.query.address
    let amount = req.query.amount
    if(address){
      const tx = await contract.transfer(address,ethers.parseEther(amount))
      console.log(tx)
      res.send('请求成功='+'1500u，hash='+tx.hash);
    }else {
      res.send('请求失败address='+address);
    }
  }catch (e) {
    console.log(e)
  }

});
// 监听端口
app.listen(3333, () => {
  console.log('启动服务 port', 3333);
})


