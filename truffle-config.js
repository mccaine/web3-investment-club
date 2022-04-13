const HDWalletProvider = require("@truffle/hdwallet-provider");
const fs = require("fs");
const mnemonicPhrase = fs.readFileSync(".secret").toString().trim();

const TEST_NETWORK_PROVIDER = process.env.TEST_NETWORK_PROVIDER;

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
    matic_mumbai: {
      provider: () =>
        new HDWalletProvider({
          mnemonic: mnemonicPhrase,
          providerOrUrl: TEST_NETWORK_PROVIDER,
          addressIndex: 0,
        }),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
      chainId: 80001,
    },
  },
  contracts_directory: "./contracts",
  contracts_build_directory: "./abis",
  compilers: {
    solc: {
      version: "^0.8.6",
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },

  db: {
    enabled: false,
  },
};
