import { getRandomNumber } from "../utils/getRandomNumber.js";
import { PATH_DB } from "../constants/path.js";
import fs from "fs/promises";

const getRandomProduct = async () => {
  try {
    const data = await fs.readFile(PATH_DB);
    const products = JSON.parse(data);

    const randomIndex = getRandomNumber(0, products.length - 1);
    const randomProduct = products[randomIndex];

    console.log(randomProduct);
  } catch (err) {
    console.log("error: ", err);
  }
};

getRandomProduct();
