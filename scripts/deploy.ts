import { ethers } from "hardhat";

async function main() {
  const Skryptonite = await ethers.getContractFactory("SkryptoniteCoin");
  const skryp = await Skryptonite.deploy();

  await skryp.deployed();

  console.log(`SkryptoniteCoin deployed to ${skryp.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});