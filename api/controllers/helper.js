module.exports.APIReturn = (code = 0, data = {}, message = "") => {
	if (code === 503) {
		code = 10;
		if (message !== "") {
			message = `"Missing parameter: ${message}"`;
		}
		if (typeof data === "string") {
			message = data;
			data = {};
		}
		return { code, data, message };
	}
};
