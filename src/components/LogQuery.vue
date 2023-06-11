<template>
    <el-button @click="search">搜索</el-button>
    <el-table :data="logs" style="width: 100%">
        <el-table-column prop="query" label="SQL Query"></el-table-column>
        <el-table-column prop="time" label="Query Time"></el-table-column>
    </el-table>
</template>
<script setup>
import { ref, inject } from 'vue'
const axios = inject("$axios");
const logs = ref([]);
const search = async () => {
    try {
        const response = await axios.get('/log');
        console.log("reslog", response);
    } catch (error) {
        console.error(error);
    }
};
// 模拟获取查询日志的函数
function fetchQueryLogs() {
    // 发起异步请求获取查询日志数据
    // 假设返回的数据格式为 [{ query: 'SELECT * FROM users', time: '2023-06-01 14:30:00' }, ...]
    const response = [
        { query: 'SELECT * FROM users', time: '2023-06-01 14:30:00' },
        { query: 'SELECT * FROM products', time: '2023-06-01 14:31:00' },
        { query: 'SELECT * FROM orders', time: '2023-06-01 14:32:00' }
    ];
    logs.value = response;
}

// 在组件挂载时获取查询日志数据
fetchQueryLogs();
</script>