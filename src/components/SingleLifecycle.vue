<template>
    <div>
        <h3>The Popularity Fluctuations of a Single News Item across Different Time Periods.</h3><br>
        <div class="search-container">
            <el-input class="s-input" v-model="newsId" placeholder="输入新闻ID" clearable />
            <el-button @click="search">搜索</el-button>
        </div>
        <div class="chart-container">
            <v-chart class="chart" :option="$option"></v-chart>
        </div>

    </div>
</template>

<script setup>
import { ref, inject } from 'vue';

const newsId = ref('');
const $option = ref({});
const axios = inject("$axios");
const dates = ref([]);
const clickTimes = ref([]);
const search = async () => {
    try {
        const response = await axios.get('/history/news-popularity', {
            params: {
                newsId: newsId.value
            }
        });
        let res = response.data.data;
        console.log("singleLife data", res);
        // 清空数组
        dates.value = [];
        clickTimes.value = [];
        // 遍历 response.data.data 数组，提取日期和点击次数，并添加到对应的数组中
        for (var i = 0; i < res.length; i++) {
            dates.value.push(res[i].date);
            clickTimes.value.push(res[i].clickTimes);
        }
        updateChart();
    } catch (error) {
        console.error(error);
    }
};
const updateChart = () => {

    $option.value = {
        xAxis: {
            type: 'category',
            data: dates.value
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: clickTimes.value,
                type: 'line'
            }
        ]
    }
}
</script>

<style lang="scss" scoped>
.search-container {
    display: flex;
    gap: 10px;

    .s-input {
        width: 400px;
    }
}

.chart-container {
    height: 500px;
}
</style>
