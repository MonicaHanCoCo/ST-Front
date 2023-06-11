<template>
    <h3>Changes in Individual User Interests.</h3><br>
    <div class="search-container">
        <el-input class="s-input" v-model="userId" placeholder="输入用户ID" />
        <el-button @click="search">搜索</el-button>
    </div>
    <div class="chart-container">
        <v-chart class="chart" :option="$option"></v-chart>
    </div>
</template>

<script setup>
import { ref, inject } from 'vue';
const axios = inject("$axios");
// 生成 x 轴的日期范围
const startDate = '6-13';
const endDate = '7-11';
// 生成日期范围
const generateDateRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const dateRange = [];
    let currentDate = start;
    while (currentDate <= end) {
        const month = String(currentDate.getMonth() + 1);
        const date = String(currentDate.getDate()).padStart(2, '0');
        dateRange.push(`${month}-${date}`);
        currentDate.setDate(currentDate.getDate() + 1);
    }
    return dateRange;
}
const dateRange = generateDateRange(startDate, endDate);
console.log("dr", dateRange);
var data = [];
var legendData = null;
const userId = ref('');
const $option = ref({});
const search = async () => {
    try {
        const response = await axios.get('/history/user-interest', {
            params: {
                userId: userId.value
            }
        });
        data = response.data.data;
        console.log("singleUser", data);
        updateChart();
    } catch (error) {
        console.error(error);
    }
};
const formatDate = (date) => {
    const [year, month, day] = date.split('-');
    return `${Number(month)}-${Number(day)}`;
};
// 生成每种类型的数据序列
const generateSeriesData = (data, dateRange) => {
    const seriesData = {};
    for (const category in data) {
        const categoryData = data[category];
        const categorySeries = new Array(dateRange.length).fill(0);

        for (const entry of categoryData) {
            const date = formatDate(entry.date);
            const clicks = entry.interestClicks;
            const index = dateRange.findIndex((d) => d === String(date));
            if (index !== -1) {
                categorySeries[index] = clicks;
            }
        }

        seriesData[category] = categorySeries;
    }

    return seriesData;
}

const updateChart = () => {
    // 生成每种类型的数据序列
    const seriesData = generateSeriesData(data, dateRange);
    console.log("s", seriesData);
    $option.value = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: Object.keys(data)
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: dateRange
        },
        yAxis: {
            type: 'value'
        },
        series: Object.entries(seriesData).map(([name, data]) => ({
            name,
            type: 'line',
            stack: 'Total',
            data
        }))
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
