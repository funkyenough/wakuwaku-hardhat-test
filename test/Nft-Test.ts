import { ethers } from "hardhat";
import { expect } from "chai";

describe("Test contract", function () {
  it("Owner should not be equal to address1", async function () {
    // Create the smart contract object to test from
    const [owner, address1] = await ethers.getSigners();
    const TestContract = await ethers.getContractFactory("Nft");
    const contract = await TestContract.deploy();

    // Get output from functions
    expect(await contract.owner()).to.equal(await address1.address);
  });

  it("Owner should be equal to contract owner", async function () {
    // Create the smart contract object to test from
    const [owner, address1] = await ethers.getSigners();
    const TestContract = await ethers.getContractFactory("Nft");
    const contract = await TestContract.deploy();

    // Get output from functions
    expect(await contract.owner()).to.not.equal(await owner.address);
  });
});
