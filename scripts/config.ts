import { promises as fs } from "fs";
var config: any;

export async function initialConfig() {
	console.log("initialConfig");
	config = JSON.parse((await fs.readFile("./config.json")).toString());
	return config;
}

export const getConfig = () => config;

export function setConfig(path: string, val: string) {
	console.log("config", config);
	const splitPath = path.split(".").reverse();

	let ref = config;
	while (splitPath.length > 1) {
		let key = splitPath.pop();
		if (key) {
			if (!ref[key]) {
				ref[key] = {};
			}
			ref = ref[key];
		} else {
			throw new Error("Invalid path");
		}
	}
}

export async function updateConfig() {
	console.log("write: ", JSON.stringify(config));
	return fs.writeFile("./config.json", JSON.stringify(config, null, 2));
}
