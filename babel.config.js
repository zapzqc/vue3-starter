module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-plus',  // Element Plus 按需打包
        styleLibraryName: 'theme-chalk',
      },
    ],
  ],
};
