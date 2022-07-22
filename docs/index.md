---
layout: home

title: Home

hero:
  name: Saluton
  text: Bonvenon al
  tagline: 👋 你好，欢迎来到，我的个人网站.
  image:
    src: /logo-with-shadow.svg
    alt: logo
  actions:
    - theme: brand
      text: Show
      link: /life/
    - theme: alt
      text: View on GitHub
      link: https://github.com/warmthsea/vitepress-starter

features:
  - icon: 📌
    title: With me 
    details: 💜 Hello，My nickname is WarmthSea/温暖海，I am an software developer currently based in China  Chengdu/中国 成都 🌏. My English is not good，I am trying to learn.
  - icon: ✏️
    title: Content 
    details: I will write some blogs on the site，share some life. Other？I haven't thought about it yet 💭.
  - icon: 🎈
    title: other
    details: I often play 🏓. Sometimes，I play games 🎮，like to play 王者荣耀/Honor of Kings，on android platform(🆔:总是孩子气)，14 seasons 🏆.
---

<script setup>
import HomeAboutComponent from '../src/components/HomeAbout.vue'
</script>

<HomeAboutComponent />