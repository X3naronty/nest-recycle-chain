import { buildModule } from '@nomicfoundation/hardhat-ignition/modules';

export default buildModule('CounterModule', (m) => {
    const initialNumber = 52;
    const counter = m.contract('Counter', [initialNumber]);

    return { counter };
});
