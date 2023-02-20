require("dotenv").config();

const web3 = require("web3");

const floppyABI = require("../contracts/floppy.json");
const vaultABI = require("../contracts/vault.json");

class SmartContractDAO {
	constructor() {
		this.web3 = new web3(process.env.BSC_TESTNET);
		this.tokenAddress = process.env.TOKEN_ADDRESS;
		this.vaultAddress = process.env.VAULT_ADDRESS;
		this.withdrawer_prv_key = process.env.WITHDRAWER_PRIVATE_KEY;
		this.withdrawer_address = process.env.WITHDRAWER_ADDRESS;
	}
	async withdraw(address, amount) {
		this.web3.eth.accounts.wallet.add(this.withdrawer_prv_key);
		const vault_contract = await new this.web3.eth.Contract(
			vaultABI,
			this.vaultAddress
		);
		// Sender Private Key
		let value = Web3.utils.toWei(amount.toString());
		let rs = await vault_contract.methods.withdraw(value, address).send({
			from: this.withdrawer_address,
			gas: 3000000,
		});
		return rs.transactionHash;
	}
}

module.exports = SmartContractDAO;
