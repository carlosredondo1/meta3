
//index.js
const { Web3 } = require("web3");
const endpointUrl = "https://side-frosty-smoke.bsc-testnet.quiknode.pro/0ee1c65d9af68d4ef4c1d3ef92603f105eb8912d/"
const httpProvider = new Web3.providers.HttpProvider(endpointUrl);
const web3 = new Web3(httpProvider);

const address = "0x54CeabA9378E6de4ba468AA1D345979d6530e06C"

console.log("address =",address);
console.log("Balance =");
web3.eth.getBalance(address)
.then(console.log);

// Set the ERC-20 balanceOf() ABI
const balanceOfABI = [
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "name": "balance",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
];

const tokenContract = "0x8Ab095dbB401D888382461bFFFBE037b21635857"
const tokenHolder = address

// Define the ERC-20 token contract
const contract = new web3.eth.Contract(balanceOfABI, tokenContract)

async function getTokenBalance() {
    // Execute balanceOf() to retrieve the token balance
    const result = await contract.methods.balanceOf(tokenHolder).call(); // 29803630997051883414242659

    // Convert the value from Wei to Ether
    const formattedResult = web3.utils.fromWei(result, "ether"); // 29803630.997051883414242659

    console.log("Meta Tokens =",formattedResult);
}

getTokenBalance();


