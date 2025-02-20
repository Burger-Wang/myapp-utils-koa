import path from "path";
import { readdirSync, statSync } from "fs";
import { fileURLToPath } from "url";
const __dirname = path.resolve();

const getFileList = async (dir, type) => {
  const resArr = [];

  const findFile = async (nodeName) => {
    const dirPath = path.resolve(__dirname, `${dir}/${nodeName || ""}`);
    let files = readdirSync(dirPath);
    files.forEach((file) => {
      let filePath = `${dir}/${nodeName || ""}${file}`;
      if (file.endsWith(type)) {
        resArr.push(`${nodeName || ""}${file}`);
      } else if (statSync(filePath).isDirectory()) {
        findFile(`${file}/`);
      }
    });
  };
  findFile();

  return resArr;
};

export { getFileList };
