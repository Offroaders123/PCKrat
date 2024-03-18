import { readFile } from "node:fs/promises";
import { read } from "../src/index.js";

const PCK = new URL("./Skin Pack 1.pck", import.meta.url);

const data = await readFile(PCK);
console.log(data);

const pck = read(data);
console.log(pck);