<template>
    <main id="05-page">
        <h1>Visual5</h1>
        <p>A query log that can record all SQL query records and query times, making it easy to verify and optimize
            performance indicators</p>
        <el-divider></el-divider>
        <LogQuery />
    </main>
</template>
<script setup>
import LogQuery from '../components/LogQuery.vue';
</script>