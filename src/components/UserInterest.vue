<template>
    <h3>Changes in Overall User Interest over Time.</h3><br>
    <span class="material-icons" @click="send">send</span>
    <div class="chart-container">
        <v-chart class="chart" :option="$option"></v-chart>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import data from "../assets/int_data.json";
data.sort((a, b) => {
    if (a[1] < b[1]) {
        return -1;
    }
    if (a[1] > b[1]) {
        return 1;
    }
    return 0;
});
const $option = ref({});
const datasetWithFilters = [];
const seriesList = [];
const categories = Array.from(new Set(data.map(item => item[0])))
categories.forEach((category) => {
    var datasetId = 'dataset_' + category;
    datasetWithFilters.push({
        id: datasetId,
        fromDatasetId: 'dataset_raw',
        transform: {
            type: 'filter',
            config: {
                dimension: 0, '=': category
            }
        }
    });
    seriesList.push({
        type: 'line',
        datasetId: datasetId,
        showSymbol: false,
        name: category,
        endLabel: {
            show: true,
            formatter: function (params) {
                return params.value[0] + ': ' + params.value[2];
            }
        },
        labelLayout: {
            moveOverlap: 'shiftY'
        },
        emphasis: {
            focus: 'series'
        },
        encode: {
            x: 1,
            y: 2
        }
    });
});
var option = {
    animationDuration: 10000,
    dataset: [
        {
            id: 'dataset_raw',
            source: data
        },
        ...datasetWithFilters
    ],
    tooltip: {
        order: 'valueDesc',
        trigger: 'axis'
    },
    xAxis: {
        type: 'category',
        nameLocation: 'middle'
    },
    yAxis: {
        name: 'Interest'
    },
    grid: {
        right: 140
    },
    series: seriesList
};
const send = async () => {
    $option.value = option;
}
</script>

<style lang="scss" scoped>
.chart-container {
    height: 500px;
}

.material-icons {
    font-size: 2rem;
    color: var(--dark);
    cursor: pointer;
}
</style>
