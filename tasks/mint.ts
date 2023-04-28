import { task } from "hardhat/config";
import "@nomiclabs/hardhat-ethers";
import { Signer, providers } from "ethers";

task(
    "hello",
    "Prints 'Hello, World!'",
    async function (taskArguments, hre, runSuper) {
      console.log("Hello, World!");
    }
  );

task("mint", "minting new tokenId")
    .addParam("contract", "nftContractAddr")
    .addParam("to", "address who get NFTs") 
    .setAction(async(args, hre) =>{
        const contractAddress = await hre.ethers.getContractAt("contract", args.contract);
        const abi = require("../artifacts/contracts/Nft.sol/Nft.json");
        //const signer = new hre.ethers.Wallet()

        const contract = new hre.ethers.Contract(args.contract, abi)

        const tx = await contract.mintNFT();
        await tx.wait();

    });