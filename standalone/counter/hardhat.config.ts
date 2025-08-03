import type { HardhatUserConfig } from 'hardhat/config';
import hardhatToolboxViemPlugin from '@nomicfoundation/hardhat-toolbox-viem';
import dotenv from 'dotenv';

dotenv.config();

const config: HardhatUserConfig = {
    plugins: [hardhatToolboxViemPlugin],
    solidity: {
        profiles: {
            default: {
                version: '0.8.28',
            },
            production: {
                version: '0.8.28',
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            },
        },
    },
    networks: {
        // polygon amoy network
        amoy: {
            type: 'http',
            url: `https://polygon-amoy.infura.io/v3/${process.env.PROVIDER_API_KEY}`,
            accounts: [`${process.env.WALLET_PRIVATE_KEY}`]
        },
    },
};

export default config;
