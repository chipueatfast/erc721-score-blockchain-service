const PresetERC721 = artifacts.require('ERC721PresetMinterPauserAutoId');

module.exports = function(deployer) {
    deployer.deploy(PresetERC721, 'score', 'SCR', 'self-hosted-service');
};
