<script setup lang="ts">
import type { VideoItem } from '@/types/video';
// useFetch可以请求自己写的api端口（保存在server/api/xxx中的）
// 通过useFetch获取频道列表数据。对获取到的结果进行解构，存放到channelList中
const { data: channelList } = await useFetch('/api/channel')
const { data: videoList } = await useFetch('/api/video')
console.log('videoList',videoList)
// ref([])：ref()是vue3新特性，将数据变为响应式，当元素发生变化时，vue会自动更新
// ref<any[]>([])：ref([])没有指定数组的类型，而ref<any[]>([])明确指定了数组的类型为any[]。
// 显示的列表
// const list = ref<any[]>([])
const list = ref<VideoItem[]>([]) // 规定数据具体类型
// 加载状态
const loading = ref(false)
// 是否已加载完成。当finished = true时，才会展示finished-text文本
const finished = ref(false)

// 页码
let page = 1
let pageSize = 20

// 滚动触底触发onLoad
const onLoad = () => {
  // 根据页码提取数据
  // slice返回新数组，包含原数组中从start到end(不包含该元素)的元素
  const data = videoList.value?.slice((page - 1) * pageSize, page * pageSize) as VideoItem[]
  // 追加到用于渲染的数组中
  list.value.push(...data)
  // 官方文档：在每次请求完毕后，需要手动将 loading 设置为 false，表示加载结束。
  loading.value = false
  // 页码累加
  page++
  // 官方文档：若数据已全部加载完毕，则直接将 finished 设置成 true
  if(videoList.value?.length === list.value.length) {
    finished.value = true
  }
}
</script>

<template>
  <!-- 公共头部 -->
  <app-header />
  <!-- 频道模块 -->
  <van-tabs>
    <van-tab v-for="item in channelList" :key="item.id" :title="item.name" />
  </van-tabs>
  <!-- 视频列表 -->
  <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
    <div class="video-list">
      <app-video v-for="item in list" :key="item.aid" :item="item" />
    </div>
  </van-list>
</template>

<style lang="scss" scoped>
// 视频列表
.video-list {
  display: flex;
  flex-wrap: wrap;
  padding: 10px 5px;
}
</style>
