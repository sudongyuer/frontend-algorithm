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

    sidebar: {
      // '/guide/': getGuideSidebar(),
      '/': getArraySidebar()
    }
  }
})

function getArraySidebar() {
  return [
    {text: '开始探索前端的算法之旅吧🌈',},
    {
      text: '剑指Offer',
      children: [
        { text: '「LeetCode」剑指Offer-03数组中重复的数字⚡️', link: '/coding-interviews/「LeetCode」剑指Offer-03数组中重复的数字⚡️' }
      ]
    },
    {
      text: '链表',
      children: []
    }
  ]
}
