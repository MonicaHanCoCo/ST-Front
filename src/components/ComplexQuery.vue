<template>
    <!-- 查询条件表单 -->
    <el-form :model="queryForm" inline>
        <!-- 时间/时间段 -->
        <el-form-item label="时间/时间段">
            <el-date-picker v-model="queryForm.date" type="date" placeholder="选择日期" :disabled-date="disabledDate"></el-date-picker>
        </el-form-item>

        <!-- 新闻主题 -->
        <el-form-item label="新闻主题">
            <el-select v-model="queryForm.category" placeholder="请选择新闻主题" clearable>
                <el-option v-for="c in catList" :key="c.id" :label="c.name" :value="c.name"></el-option>
            </el-select>
        </el-form-item>

        <!-- 特定用户 -->
        <el-form-item label="特定用户">
            <el-input v-model="queryForm.userId" placeholder="请输入用户ID"></el-input>
        </el-form-item>        
        
        <!-- 新闻标题长度 -->
        <el-form-item label="新闻标题长度">
            <el-slider v-model="queryForm.titleLength" :min="0" :max="246" range style="width: 200px;"></el-slider>
        </el-form-item>

        <!-- 新闻长度 -->
        <el-form-item label="新闻长度">
            <el-slider v-model="queryForm.contentLength" :min="0" :max="60000" range style="width: 300px;"></el-slider>
        </el-form-item>



        <!-- 查询按钮 -->
        <el-form-item>
            <el-button type="primary" @click="search">查询</el-button>
        </el-form-item>
    </el-form>
<div class="table-container">
     <!-- 查询结果表格 -->
     <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="时间" width="180"></el-table-column>
        <el-table-column prop="topic" label="新闻话题"></el-table-column>
        <el-table-column prop="title" label="新闻标题"></el-table-column>
        <el-table-column prop="content" label="新闻内容"></el-table-column>
    </el-table>
</div>
   
</template>
<script setup>
import { ref, inject } from 'vue'
const axios = inject("$axios");
const tableData = ref([]);
const catList=[
    {id:1,name:'autos'},
    {id:2,name:'entertainment'},
    {id:3,name:'finance'},
    {id:4,name:'food and drink'},
    {id:5,name:'health'},
    {id:6,name:'kids'},
    {id:7,name:'lifestyle'},
    {id:8,name:'movies'},
    {id:9,name:'music'},
    {id:10,name:'news'},
    {id:11,name:'sports'},
    {id:12,name:'travel'},
    {id:13,name:'tv'},
    {id:14,name:'video'},
    {id:15,name:'weather'}

];
const queryForm = ref({
    date: new Date(2019, 5, 14),
    category: '',
    userId: 'U180794',
    titleLength: [0,246],
    contentLength: [0,60000],
});
const search = async () => {
    const titleLength = Array.isArray(queryForm.value.titleLength) ? queryForm.value.titleLength : [0, 50];
    const contentLength = Array.isArray(queryForm.value.contentLength) ? queryForm.value.contentLength : [0, 1000];
    console.log(queryForm.value.category)
    try {
        const response = await axios.post('/history/multi-clicks', {date:queryForm.value.date,category:queryForm.value.category,userId:queryForm.value.userId,maxTitle:titleLength[1],minTitle:titleLength[0],maxContent:contentLength[1],minContent:contentLength[0]});
        let res = response.data.data;
        console.log("complex data", res);
        tableData.value = response.data.data;
    } catch (error) {
        console.error(error);
    }
};
const disabledDate = (date) => {
    const startDate = new Date('2019-06-12');
    const endDate = new Date('2019-07-11');
    return date < startDate || date > endDate;
}
</script>
