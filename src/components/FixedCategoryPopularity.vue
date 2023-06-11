<template>
    <div>
        <h3>The Temporal Distribution of Popularity for a Single Category of News.</h3><br>
        <div class="category-selection">
            <label class="checkbox-label" v-for="category in categories" :key="category">
                <input type="checkbox" v-model="selectedCategories" :value="category"
                    :disabled="selectedCategories.length >= 2 && !selectedCategories.includes(category)">
                {{ category }}
            </label>
        </div>
        <div class="chart-container">
            <v-chart class="chart" :option="$option"></v-chart>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import data from "../assets/pop_data.json";
const categories = Array.from(new Set(data.map(item => item[0])))
const selectedCategories = ref([categories[0], categories[1]]);
const dates = Array.from(new Set(data.map(item => item[1]))).sort((a, b) => {
    const dateA = new Date(a);
    const dateB = new Date(b);
    return dateA - dateB
});
const xAxisData = [];
for (var i = 0; i < dates.length; i++) {
    xAxisData.push(dates[i]);
}
const chartOption = ref(getChartOption());

watch(selectedCategories, () => {
    chartOption.value = getChartOption();
});

function getChartOption() {
    const selectedData = selectedCategories.value.map((category) => {
        let res = data.slice(1).filter(function (d) {
            return d[0] === category;
        });
        let pop = Array.from(new Set(res.map(item => item[2])));
        console.log("p", pop);
        return pop;
    });
    console.log("sdata", selectedData);
    return {
        legend: {
            data: selectedCategories.value
        },
        toolbox: {
            feature: {
                magicType: {
                    type: ['stack']
                },
                dataView: {},
                saveAsImage: {
                    pixelRatio: 2
                }
            }
        },
        tooltip: {},
        xAxis: {
            data: xAxisData,
            splitLine: {
                show: false
            }
        },
        yAxis: {},
        series: selectedCategories.value.map((category, index) => {
            return {
                name: category,
                type: 'bar',
                data: selectedData[index],
                emphasis: {
                    focus: 'series'
                },
                animationDelay: (idx) => {
                    return idx * 10;
                }
            };
        }),
        animationEasing: 'elasticOut',
        animationDelayUpdate: (idx) => {
            return idx * 5;
        }
    };
}

const $option = chartOption;
</script>

<style lang="scss" scoped>
.category-selection {
    display: flex;
    flex-wrap: wrap;

    .checkbox-label {
        flex-basis: calc(100% / 7);
        margin-right: 20px;
        margin-bottom: 10px;
    }
}

.chart-container {
    height: 500px;


}
</style>
