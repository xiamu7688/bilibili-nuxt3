// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 开启ssr服务端渲染，模块开启
  ssr: true,
  // 开始调试工具
  devtools: { enabled: true },
  // 添加配置：应用模块
  modules: ['@vant/nuxt']
})
