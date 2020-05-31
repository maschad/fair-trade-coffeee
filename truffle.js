/** @format */
const HDWalletProvider = require("truffle-hdwallet-provider");
// const infuraKey = "3ca0eb9601a240948300742a2ff0c82d";

const fs = require("fs");
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
	networks: {
		development: {
			host: "127.0.0.1",
			port: 8545,
			network_id: "*", // Match any network id
		},
		rinkeby: {
			provider: () =>
				new HDWalletProvider(
					mnemonic,
					`https://rinkeby.infura.io/v3/5740d87208854c1bb554d5162f7a3a1f`
				),
			network_id: 4, // Rinkeby's id
			gas: 5500000, // Ropsten has a lower block limit than mainnet
			confirmations: 2, // # of confs to wait between deployments. (default: 0)
			timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
			skipDryRun: true,
		},
	},
};
