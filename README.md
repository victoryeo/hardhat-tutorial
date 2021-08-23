This is a tutorial on using hardhat to deploy and upgrade smart contract.
# deploy contract
npx hardhat run scripts/deploy.js --network development
# upgrade contract
npx hardhat run scripts/upgrade.js --network development
# go to console to test the contract
npx hardhat console --network development
```
Welcome to Node.js v14.17.5.
Type ".help" for more information.
> const BoxV2 = await ethers.getContractFactory('BoxV2');
undefined
> const box = await BoxV2.attach('0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B')
undefined
> (await box.retrieve()).toString();
'42'
```
