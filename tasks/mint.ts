import { task } from "hardhat/config";
import "@nomiclabs/hardhat-ethers";

task(
    "hello",
    "Prints 'Hello, World!'",
    async function (taskArguments, hre, runSuper) {
      console.log("Hello, World!");
    }
  );

let tokenId = 0;
task("mint", "minting new tokenId")
    .addParam("contract", "nftContractAddr")
    .addParam("to", "address who get NFTs")
    //.addParam("tokenid")
    .setAction(async(args, hre) =>{
        // const contractAddress = args.contract;
        // const publickkey = "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199" //hardhat
        // const privatekey = "0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e" //hardhat
        // const PROVIDER_URL = "http://localhost:8545";

        const NftContract = await hre.ethers.getContractAt("contract", args.contract);
        const abi = await require("../artifacts/contracts/Nft.sol/Nft.json");


        const contract = new hre.ethers.Contract(args.contract, abi, hre.ethers.getDefaultProvider());

        const signer = await hre.ethers.getSigner("0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199")
        const tx = await contract.connect(signer).mintNFT(args.to, tokenId);

        await tx.wait();

    });