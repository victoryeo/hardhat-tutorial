// Load dependencies
const { expect } = require('chai');
 
let deployedV2;
let owner;
let addr1;
let addr2;
 
// Start test block
describe('BoxV2Test', function () {
  beforeEach(async function () {
    const Box = await ethers.getContractFactory("Box");
    console.log("Deploying Box...");
    const box = await upgrades.deployProxy(Box, [42], { initializer: 'store' });
    console.log("Box deployed to:", box.address);

    [owner, addr1, addr2] = await ethers.getSigners();

    const V2 = await ethers.getContractFactory('BoxV2');
    console.log('Upgrading Box...');
    deployedV2 = await upgrades.upgradeProxy(box.address, V2);
    console.log('Box upgraded');  

  });

  it('retrieve same value', async function () {
    let returnVal = await deployedV2.retrieve();
    console.log(returnVal.toString())
    expect(returnVal).to.equal(42);
  });
})