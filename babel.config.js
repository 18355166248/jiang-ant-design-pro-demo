module.exports = {
  plugins: [
    [
      'import',
      {
        // 导入一个插件
        libraryName: 'arctic-business-component', // 暴露的库名
        camel2DashComponentName: false, // 关闭驼峰转换
        style: (name) => `${name}/index.css`, // 转换后的路径
      },
      'arctic-business-component',
    ],
  ],
};
