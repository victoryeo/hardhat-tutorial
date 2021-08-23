const { ethers, upgrades } = require('hardhat');

async function main() {
  const BoxV2 = await ethers.getContractFactory('BoxV2');
  console.log('Upgrading Box...');
  await upgrades.upgradeProxy('0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B', BoxV2);
  console.log('Box upgraded');

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });