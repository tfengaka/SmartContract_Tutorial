"use strict";

const SmartContractDAO = require("../data/SMCDAO");
const helper = require("./helper");

exports.withdraw = async function (req, res) {
	try {
		let { address, amount } = req.body;
		if (!address || !amount || amount <= 0) {
			return res.status(400).json(helper.APIReturn(101, "Bad Request!"));
		}

		//* send token
		console.log("Call Smart Contract");
		let dao = new SmartContractDAO();
		let transaction = await dao.withdraw(address, amount);
		console.log("Transaction: ", transaction);

		return res.status(200).json(
			helper.APIReturn(
				0,
				{
					to: address,
					amount: amount,
					txHash: transaction,
				},
				"Withdraw success!"
			)
		);
	} catch (error) {
		console.error(error);
		return res.status(500).json(helper.APIReturn(500, {}, error.message));
	}
};
