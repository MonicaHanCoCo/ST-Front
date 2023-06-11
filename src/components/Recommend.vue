<template>
    <div class="search-container">
        <el-input class="s-input" v-model="userId" placeholder="输入用户ID" />
        <el-button @click="search">搜索</el-button>
    </div>
    <br>
    <h4>Recommended News :</h4><br>
    <el-table :data="recommendData" style="width: 100%">
        <el-table-column prop="newsId" label="新闻编号"></el-table-column>
        <el-table-column prop="topic" label="新闻主题"></el-table-column>
        <el-table-column prop="title" label="新闻标题"></el-table-column>
        <el-table-column prop="content" label="新闻内容"></el-table-column>
    </el-table>
</template>
<script setup>
import { ref, inject } from 'vue'
const axios = inject("$axios");
const recommendData = ref([]);
const userId = ref('');
const search = async () => {
    try {
        const response = await axios.get('/real-time/set-user', { 
            params: {
                userId: userId.value
            }});
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
    
    //连接成功建立的回调方法
    websocket.onopen = function (event) {
        setMessageInnerHTML("open");
    };

//接收到消息的回调方法
websocket.onmessage = function (event) {
    let data = event.data;
    console.log("实时数据:" + data);
    recommendData.value = JSON.parse(data); 
};
 //连接关闭的回调方法
 websocket.onclose = function () {
        setMessageInnerHTML("close");
    };


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