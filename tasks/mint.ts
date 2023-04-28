import { task } from "hardhat/config";
import "@nomiclabs/hardhat-ethers";

task(
    "hello",
    "Prints 'Hello, World!'",
    async function (taskArguments, hre, runSuper) {
      console.log("Hello, World!");
    }
  );

task("mint", "minting new tokenId")
    .addParam("contract", "nftContractAddr")
    .setAction(async(args, hre) =>{
        const contractAddress = await hre.ethers.getContractAt("contract", args.contract);
        const abi = await ("./");

    });