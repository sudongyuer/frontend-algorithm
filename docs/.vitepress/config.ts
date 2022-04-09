import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'JavaScript 🧬 Algorithm',
  description: 'Vite & Vue powered static site generator.',
  lastUpdated: true,
  base:"/frontend-algorithm/",

  themeConfig: {
    repo: 'sudongyuer/frontend-algorithm',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: false,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',

    algolia: {
      appId: '8J64VVRP8K',
      apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
      indexName: 'vitepress'
    },

    nav: [
      { text: 'Start', link: '/guide', activeMatch: '^/$|^/guide/' },
      {
        text: 'About ME',
        link: 'https://github.com/sudongyuer'
      }
    ],
    // @ts-ignore
    sidebar: {
      '/coding-interviews/': getArrayItemsSidebar(),
      '/': getArraySidebar()
    }
  }
})

function getArraySidebar() {
  return [
    {text: '开始探索前端的算法之旅吧🌈',},
    {
      text: '剑指Offer',
      link:"/coding-interviews/「LeetCode」剑指Offer-03数组中重复的数字⚡️",
    },
    {
      text: '链表',
    }
  ]
}

function getArrayItemsSidebar() {
  return [
    {text: '开始探索前端的算法之旅吧🌈',},
    {
      text: '剑指Offer',
      link:"/",
      children: [
        { text: '「LeetCode」剑指Offer-03数组中重复的数字⚡️', link: '/coding-interviews/「LeetCode」剑指Offer-03数组中重复的数字⚡️' },
        { text: '「LeetCode」剑指Offer-04二维数组中的查找⚡️', link: '/coding-interviews/「LeetCode」剑指Offer-04二维数组中的查找⚡️' },
        { text: '「LeetCode」剑指Offer-05替代空格⚡️', link: '/coding-interviews/「LeetCode」剑指Offer-05替代空格⚡️' },
        { text: '「LeetCode」剑指Offer-06从尾到头打印链表⚡️', link: '/coding-interviews/「LeetCode」剑指Offer-06从尾到头打印链表⚡️' },
      ]
    },
    {
      text: '链表',
      children: []
    }
  ]
}
