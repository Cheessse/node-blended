import { PATH_DB } from "../constants/path.js";
import fs from "fs/promises";

export const getExpensiveProducts = async () => {
  try {
    const PRICE = 500;
    const data = await fs.readFile(PATH_DB);
    const products = JSON.parse(data);
    const filter = products.filter((product) => {
      return product.price >= PRICE;
    });
    console.table(filter);
  } catch (error) {}
};

getExpensiveProducts();
