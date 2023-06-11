<template>
    <el-button @click="search">搜索</el-button>
    <br><br>
    <el-table :data="logs" style="width: 100%">
        <el-table-column prop="sql" label="SQL Query"></el-table-column>
        <el-table-column prop="timestamp" label="Query Time"></el-table-column>
    </el-table>
</template>
<script setup>
import { ref, inject } from 'vue'
const axios = inject("$axios");
const logs = ref([]);
const search = async () => {
    try {
        const response = await axios.get('/log');
        console.log("reslog", response.data.data);
        logs.value = response.data.data;
    } catch (error) {
        console.error(error);
    }

};
</script>