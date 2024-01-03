<script setup lang="ts">
// ts表示使用TypeScript
// useSeoMeta SEO元数据，可以在html代码中添加标签
useSeoMeta({
  // 网站标题
  title: '哔哩哔哩 (゜-゜)つロ 干杯~-bilibili',
  // 网站描述
  description: '哔哩哔哩（bilibili.com)是国内知名的视频弹幕网站，这里有及时的动漫新番，活跃的ACG氛围，有创意的Up主。大家可以在这里找到许多欢乐。',
  // 搜索关键词
  keywords: 'bilibili,哔哩哔哩,哔哩哔哩动画,哔哩哔哩弹幕网,弹幕视频,B站,弹幕,字幕',
  // 绕开B站图片防盗链
  referrer: 'no-referrer',
})
</script>

<template>
  <div>
    <!-- 指向index/index.vue -->
    <NuxtLink to="/">首页</NuxtLink>
    <!-- 指向video/index.vue -->
    <NuxtLink to="/video">视频页</NuxtLink>
    <!-- Nuxt页面路由，相当于RouterView -->
    <!-- keepalive页面添加缓存，每次进入页面不需要再请求数据。max: 10表示缓存最大数量为10，当超过这个数量后，最早的缓存实例将被丢弃，避免添加缓存过多，提升用户体验 -->
    <NuxtPage :keepalive="{ max: 10 }" />
  </div>
</template>

<style lang="scss">
// 导入基础样式和字体图标
@import './assets/styles/base.scss';
@import './assets/styles/iconfont.scss';
/* CSS变量，设置vant框架中的主题颜色 */
:root {
  --van-primary-color: #fb7299 !important;
}
</style>
