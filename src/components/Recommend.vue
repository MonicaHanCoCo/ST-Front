<template>
    <div class="search-container">
        <el-input class="s-input" v-model="userId" placeholder="输入用户ID" />
        <el-button @click="search">搜索</el-button>
    </div>
    <br>
    <h4>Recommended News :</h4><br>
    <el-table :data="recommendData" style="width: 100%">
        <el-table-column prop="rid" label="新闻编号"></el-table-column>
        <el-table-column prop="category" label="新闻主题"></el-table-column>
        <el-table-column prop="title" label="新闻标题"></el-table-column>
        <el-table-column prop="content" label="新闻内容"></el-table-column>
    </el-table>
</template>
<script setup>
import { ref, inject } from 'vue'
const axios = inject("$axios");
const userId = ref('');
const search = async () => {
    try {
        const response = await axios.post('/real-time/set-user', { userId: userId.value });
        console.log("res", response);
    } catch (error) {
        console.error(error);
    }
};
let websocket = null;
let host = 'localhost:9090';
//判断当前浏览器是否支持WebSocket
if ('WebSocket' in window) {
    //连接WebSocket节点
    websocket = new WebSocket("ws://" + host + "/webSocket");
} else {
    alert('浏览器不支持webSocket');
}
//连接发生错误的回调方法
websocket.onerror = function () {
    setMessageInnerHTML("error");
};

//接收到消息的回调方法
websocket.onmessage = function (event) {
    let data = event.data;
    console.log("实时数据:" + data);

};
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