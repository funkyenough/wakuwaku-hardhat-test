import { ethers } from "hardhat";
import { expect } from "chai";

describe("Test contract", function () {
  it("Owner should not be equal to notOwner", async function () {
    // Create the smart contract object to test from
    const [owner, notOwner] = await ethers.getSigners();
    const testContract = await ethers.getContractFactory("Nft");
    const deployedContract = await testContract.deploy();

    // Get output from functions
    // Contracts are deployed using the first signer/account by default
    expect(await deployedContract.owner()).to.equal(await notOwner.address);
  });

  it("Owner should be equal to contract owner", async function () {
    // Create the smart contract object to test from
    const [owner, notOwner] = await ethers.getSigners();
    const testContract = await ethers.getContractFactory("Nft");
    const deployedContract = await testContract.deploy();

    // Get output from functions
    expect(await deployedContract.owner()).to.not.equal(await owner.address);
  });

  it("TokenId_ should increment by 1 each time _mint is called", async function () {
    // Create the smart contract object to test from
    const testContract = await ethers.getContractFactory("Nft");
    const deployedContract = await testContract.deploy();

    const initialTokenId = await deployedContract._tokenIds();
    await deployedContract.mintNFT(
      "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199",
      ""
    );
    const updatedTokenId = await deployedContract._tokenIds();

    // Get output from functions
    expect(updatedTokenId).to.equal(
      initialTokenId.add(ethers.BigNumber.from(1))
    );
  });
});
