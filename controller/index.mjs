import { getFileList } from "./../utils/index.mjs";

const addModules = async (router, controllerDir) => {
  // 扫描controller目录:

  const files = await getFileList("./controller", ".mjs");
  files.forEach(async (file) => {
    // 导入模块:
    let { default: mapping } = await import(`./${file}`);
    // 把每个URL映射添加到router:
    for (let url in mapping) {
      let reqList = url.split("&");
      router[reqList[0].toLowerCase()](reqList[1], mapping[url]);
    }
  });
};

// 默认扫描目录为 controller:
export default addModules;
