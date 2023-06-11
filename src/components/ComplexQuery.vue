<template>
    <!-- 查询条件表单 -->
    <el-form :model="queryForm" inline>
        <!-- 时间/时间段 -->
        <el-form-item label="时间/时间段">
            <el-date-picker v-model="queryForm.date" type="date" placeholder="选择日期"></el-date-picker>
        </el-form-item>

        <!-- 新闻主题 -->
        <el-form-item label="新闻主题">
            <el-input v-model="queryForm.topic" placeholder="请输入新闻主题"></el-input>
        </el-form-item>

        <!-- 新闻标题长度 -->
        <el-form-item label="新闻标题长度">
            <el-slider v-model="queryForm.titleLength" :min="0" :max="246" range style="width: 246px;"></el-slider>
        </el-form-item>

        <!-- 新闻长度 -->
        <el-form-item label="新闻长度">
            <el-slider v-model="queryForm.contentLength" :min="0" :max="1000" range style="width: 400px;"></el-slider>
        </el-form-item>

        <!-- 特定用户 -->
        <el-form-item label="特定用户">
            <el-select v-model="queryForm.user" placeholder="请选择用户">
                <el-option v-for="user in userList" :key="user.id" :label="user.name" :value="user.id"></el-option>
            </el-select>
        </el-form-item>

        <!-- 查询按钮 -->
        <el-form-item>
            <el-button type="primary" @click="handleSearch">查询</el-button>
        </el-form-item>
    </el-form>

    <!-- 查询结果表格 -->
    <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="时间" width="180"></el-table-column>
        <el-table-column prop="topic" label="新闻话题"></el-table-column>
        <el-table-column prop="title" label="新闻标题"></el-table-column>
        <el-table-column prop="content" label="新闻内容"></el-table-column>
        <el-table-column prop="user" label="用户"></el-table-column>
    </el-table>
</template>
<script setup>
import { ref } from 'vue'
const queryForm = ref({
    date: null,
    topic: '',
    titleLength: 0,
    contentLength: 0,
    user: '',
    users: [],
});

const userList = [
    { id: 1, name: 'User A' },
    { id: 2, name: 'User B' },
    { id: 3, name: 'User C' },
    // Add more users if needed
];

const tableData = ref([
    {
        date: '2016-05-03',
        topic: 'Topic A',
        title: 'Title A',
        content: 'Content A',
        user: 'User A',
    },
    {
        date: '2016-05-02',
        topic: 'Topic B',
        title: 'Title B',
        content: 'Content B',
        user: 'User B',
    },
    {
        date: '2016-05-04',
        topic: 'Topic C',
        title: 'Title C',
        content: 'Content C',
        user: 'User C',
    },
    {
        date: '2016-05-01',
        topic: 'Topic D',
        title: 'Title D',
        content: 'Content D',
        user: 'User A',
    },
]);
</script>