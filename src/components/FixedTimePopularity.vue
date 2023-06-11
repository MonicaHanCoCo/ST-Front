<template>
    <div>
        <h3>Comparative Popularity of All Categories of News over a Certain Time Period.</h3><br>
        <div class="search-container">
            <el-date-picker v-model="selectedDate" type="daterange" placeholder="选择时间段" start-placeholder="开始日期"
                end-placeholder="结束日期" :shortcuts="shortcuts" :disabled-date="disabledDate"
                :default-value="[new Date(2019, 5, 13), new Date(2019, 6, 11)]"></el-date-picker>
            <el-button @click="search">搜索</el-button>
        </div>

        <div class="chart-container">
            <v-chart class="chart" :option="$option"></v-chart>
        </div>
    </div>
</template>

<script setup>
import { ref, inject } from 'vue';
const axios = inject("$axios");
const selectedDate = ref([new Date(2019, 5, 13), new Date(2019, 6, 11)]);
var data = [];
var total = null;
var legendData = null;
const $option = ref({});
const search = async () => {
    try {
        var startTime = selectedDate.value[0];
        var endTime = selectedDate.value[1];
        const response = await axios.get('/history/category-popularity', {
            params: {
                startTime,
                endTime
            }
        });
        data = response.data.data;
        console.log("funnel", data);
        total = Object.values(data).reduce((total, value) => total + value, 0);
        legendData = Object.keys(data);
        updateChart();
    } catch (error) {
        console.error(error);
    }
};
const updateChart = () => {
    $option.value = {
        toolbox: {
            feature: {
                dataView: { readOnly: false },
                restore: {},
                saveAsImage: {}
            }
        },
        legend: {
            data: legendData
        },
        series: [
            {
                type: 'funnel',
                left: '10%',
                top: 60,
                bottom: 60,
                width: 'auto',
                min: 0,
                max: 36,
                minSize: '0',
                maxSize: '1200',
                sort: 'ascending',
                gap: 2,
                label: {
                    show: true,
                    position: 'inside'
                },
                data:
                    legendData.map(key => ({
                        value: Math.round((data[key] / total) * 100),
                        name: key
                    }))
            }
        ]
    };
}

const shortcuts = [
    {
        text: '最近一周',
        value: () => {
            const end = new Date('2019-07-11');
            const start = new Date(end.getTime() - 7 * 24 * 60 * 60 * 1000);
            return [start, end]
        },
    },
    {
        text: '最近两周',
        value: () => {
            const end = new Date('2019-07-11');
            const start = new Date(end.getTime() - 14 * 24 * 60 * 60 * 1000);
            return [start, end]
        },
    },
    {
        text: '最近三周',
        value: () => {
            const end = new Date('2019-07-11');
            const start = new Date(end.getTime() - 21 * 24 * 60 * 60 * 1000);
            return [start, end]
        },
    },
    {
        text: '最近四周',
        value: () => {
            const end = new Date('2019-07-11');
            const start = new Date(end.getTime() - 28 * 24 * 60 * 60 * 1000);
            return [start, end]
        },
    },
]
const disabledDate = (date) => {
    const startDate = new Date('2019-06-12');
    const endDate = new Date('2019-07-11');
    return date < startDate || date > endDate;
}
</script>

<style lang="scss" scoped>
.search-container {
    display: flex;
    gap: 10px;
    width: 800px;

}

.chart-container {
    height: 500px;

}
</style>

