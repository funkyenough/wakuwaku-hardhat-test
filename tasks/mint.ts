import { task } from "hardhat/config";
import "@nomiclabs/hardhat-ethers";

task(
    "hello",
    "Prints 'Hello, World!'",
    async function (taskArguments, hre, runSuper) {
      console.log("Hello, World!");
    }
  );

// yarn hardhat mint --contract 0x5fbdb2315678afecb367f032d93f642f64180aa3 --to 0x70997970C51812dc3A010C7d01b50e0d17dc79C8 --network localhost
let tokenId = 0;
task("mint", "minting new tokenId")
    .addParam("contract", "nftContractAddr")
    .addParam("to", "address who get NFTs")
    .setAction(async(args, hre) =>{

        // lower cases
        const NftContract = await hre.ethers.getContractAt("Nft", args.contract);
        const tx = await NftContract.mintNFT(args.to, "http://example.com");
        await tx.wait();

        console.log(`transaction hash: ${tx.hash}`);
/*
        const contract = new hre.ethers.Contract(args.contract, abi, hre.ethers.getDefaultProvider());
        const signer = await hre.ethers.getSigner("0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199")
        const tx = await contract.connect(signer).mintNFT(args.to, tokenId);
        await tx.wait();
*/
    });

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});
