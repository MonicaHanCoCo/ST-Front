<template>
    <main id="02-page">
        <h1>Visual2</h1>
        <p>Statistical Query of Changes in User Interest</p>
        <el-divider></el-divider>
        <UserInterest />
        <el-divider></el-divider>
        <SingleUserInterest />
    </main>
</template>
<script setup>
import UserInterest from '../components/UserInterest.vue';
import SingleUserInterest from '../components/SingleUserInterest.vue';
</script>