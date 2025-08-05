import { buildModule } from '@nomicfoundation/hardhat-ignition/modules';

export default buildModule('RecycleChainModule', (m) => {
    const recycleChainContract = m.contract('RecycleChain');

    return { recycleChainContract };
});
