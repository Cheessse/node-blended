import fs from "fs/promises";
import path from "path";
import { PATH_DB } from "../constants/path.js";

const getFiles = async () => {
  try {
    const filesPath = path.join(process.cwd(), "src", "files");

    const files = await fs.readdir(filesPath);
    files.forEach((file) => console.log(file));
    // console.log("Список файлів і каталогів:", files);
  } catch (err) {
    console.error("Помилка отримання списку файлів і каталогів:", err);
  }
};

getFiles();
