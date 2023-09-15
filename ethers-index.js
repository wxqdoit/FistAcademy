let ethers = require('ethers')

let list = [
    'https://eth.llamarpc.com',
    'https://rpc.ankr.com/eth',
    'https://ethereum.publicnode.com',
    'https://1rpc.io/eth',
    'https://eth-rpc.gateway.pokt.network',
    'https://ethereum.blockpi.network/v1/rpc/public',
    'https://rpc.payload.de',
    'https://eth-mainnet.g.alchemy.com/v2/demo',
    'https://eth.meowrpc.com',
    'https://eth.drpc.org'
]
let interval = null
const init= async () => {
    let random = parseInt(Math.round(Math.random()*9))
    let rpc = list[random]

    const provider = new ethers.JsonRpcProvider('http://192.168.1.16:8545')
    // let wallet = new ethers.Wallet('0xa97376567fd45eb74f1663ba1fa23428dea8b3385ad67d25684f043b901c2575',provider)
    let wallet = new ethers.Wallet('0xcfc16776089c5a396b25c809aaf82148319306a626099e9c3fa8c5421b186259',provider)

    try {
        // const b = await provider.getBalance('0xe877fee6851b0a04E99c28b524e55Bd955bfFF1a')
        const b = await provider.getBalance('0x199A6c55739757dCaD45c085Ae9B708Cee12cb30')
        const balance = ethers.formatEther(b)
        console.log(random,'balance=',balance)

        if(balance>=0.02 && interval !== null){
            clearInterval(interval)
            interval = null
            let tx = {
                // value: ethers.parseEther((Number(balance)-0.018).toFixed(8)),
                value: ethers.parseEther('1000'),
                to: '0x199A6c55739757dCaD45c085Ae9B708Cee12cb30',
                from: wallet.address,
                // gasLimit: 21000,
                // gasPrice: ethers.parseUnits('35', 'gwei'),
            };
            let sendTx = await wallet.sendTransaction(tx);
            console.log(sendTx)
        }
    }catch (err){
    }
}
interval = setInterval(()=>{
    init()
},1000)






init()
