const { ethers } = require("hardhat");

async function main(){
  const Arcane = await ethers.getContractFactory("Arcane") //reference to our contract
  
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
