<template>
    <main id = "p6">
        <h1>练习6 C语言程序图</h1>
        <el-divider></el-divider>
        <h2>6.1 题目描述</h2><br>
        <p>按照下列C语言程序前的编号，构建起程序图（control flow graph or program diagram），不需要理解具体的代码实现内容，只要理解其逻辑即可。</p><br>
        <img :src="l61URL" alt="L61" style="zoom:50%;" /><br><br>
        <h2>6.2 程序状态图</h2><br>
        <img :src="l62URL" alt="L62" style="zoom:70%;" /><br><br>
    </main>
</template>
<script setup>
import { ref } from 'vue';
import l61URL from '../assets/l61.png'
import l62URL from '../assets/l62.png'
</script>
<style lang="scss" scoped>
#p5 {
    margin: 20px;
}

.st {
    transform: scale(0.8);
}
</style>