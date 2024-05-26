import { PATH_DB } from "../constants/path.js";
import fs from "fs/promises";

export const getTotalPrice = async () => {
  try {
    const data = await fs.readFile(PATH_DB);
    const products = JSON.parse(data);
    const totalPrice = products.reduce((total, product) => {
      return total + Number(product.price);
    }, 0);
    console.log(totalPrice);
  } catch (error) {
    console.error("помилка запису:", error);
  }
};

getTotalPrice();
