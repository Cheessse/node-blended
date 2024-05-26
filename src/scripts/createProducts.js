import { PATH_DB } from "../constants/path.js";
import fs from "fs/promises";
import { createFakeProduct } from "../utils/createFakeProduct.js";

const createProducts = async (amount) => {
  try {
    const data = await fs.readFile(PATH_DB);
    const products = JSON.parse(data);
    for (let index = 0; index < amount; index += 1) {
      const element = createFakeProduct();
      products.push(element);
    }
    const toStringify = JSON.stringify(products, null, 2);
    await fs.writeFile(PATH_DB, toStringify);
  } catch (error) {}
};

createProducts(8);
