const ENV = process.env
const LIFECYCLE = ENV.npm_lifecycle_event

// 配置文件
module.exports = {
  publicPath: LIFECYCLE === 'build' ? `./` : '/'
}
