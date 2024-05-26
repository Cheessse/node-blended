import { PATH_DB } from "../constants/path.js";
import path from "node:path";
import fs from "fs/promises";

const writeFiles = async () => {
  const data = await fs.readFile(PATH_DB);
  const products = JSON.parse(data);

  products.forEach(async (product, index) => {
    const filePath = path.join(
      process.cwd(),
      "src",
      "files",
      `${index + 1}.json`
    );
    await fs.writeFile(filePath, JSON.stringify(product, null, 2));
  });
};

writeFiles();
