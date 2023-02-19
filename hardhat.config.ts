import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env" });
/** @type import('hardhat/config').HardhatUserConfig */
const config = {
	solidity: "0.8.17",
	networks: {
		bsctest: {
			url: process.env.BSC_TESTNET,
			accounts: [process.env.PRIVATE_KEY],
		},
	},
	etherscan: {
		apiKey: process.env.BSC_SCAN_API_KEY,
	},
};

export default config;
