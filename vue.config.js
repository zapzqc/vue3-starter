/**
 * 判断是否是生产环境
 * @returns {boolean} 是否是生产环境
 */
function isProd() {
  return process.env.NODE_ENV === 'production';
}

// 配置请求的基本API,当前开发模式配置的是淘宝的测试地址
process.env.VUE_APP_BASE_API = isProd() ? '' : 'http://rap2api.taobao.org/app/mock/115307/user';

module.exports = {
  publicPath: isProd() ? './' : '/', // 部署到生产环境时，按需修改前项为项目名称
  productionSourceMap: false, // 不需要生产环境的 source map，减少构建时间

  configureWebpack: (config) => {
    if (isProd()) {
      // 去除 console
      Object.assign(
        config.optimization.minimizer[0].options.terserOptions.compress, {
          drop_console: true,
        },
      );
    }
  },
};
