<template>
    <div class="search-container">
        <el-input class="s-input" v-model="userId" placeholder="输入用户ID" />
        <el-date-picker v-model="realDate" type="date" placeholder="输入实时日期" :disabled-date="disabledDate"
            :default-value="new Date(2019, 5, 30)" />
        <el-button @click="search">搜索</el-button>
    </div>
    <br>
    <h4>Recommended News :</h4><br>
    <el-table :data="recommendData" style="width: 100%">
        <el-table-column prop="rid" label="新闻编号"></el-table-column>
        <el-table-column prop="topic" label="新闻主题"></el-table-column>
        <el-table-column prop="title" label="新闻标题"></el-table-column>
        <el-table-column prop="content" label="新闻内容"></el-table-column>
    </el-table>
</template>
<script setup>
import { ref } from 'vue'
const realDate = ref('')
const disabledDate = (date) => {
    const startDate = new Date('2019-06-12');
    const endDate = new Date('2019-07-11');
    return date < startDate || date > endDate;
}
const recommendData = ref([
    {
        rid: '01',
        topic: 'Topic A',
        title: 'Title A',
        content: 'Content A',
    },
    {
        rid: '02',
        topic: 'Topic A',
        title: 'Title A',
        content: 'Content A',
    },
    {
        rid: '03',
        topic: 'Topic A',
        title: 'Title A',
        content: 'Content A',
    },
    {
        rid: '04',
        date: '2016-05-01',
        topic: 'Topic D',
        title: 'Title D',
        content: 'Content D',
    },
]);
</script>
<style lang="scss" scoped>
.search-container {
    display: flex;
    gap: 10px;

    .s-input {
        width: 400px;
    }
}
</style>