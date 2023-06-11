<template>
    <div>
        <h3>The Dynamic Changes in Popularity of Different News Categories on a Daily Basis.</h3><br>
        <span class="material-icons" @click="send">send</span>
        <div class="chart-container">
            <v-chart class="chart" :option="$option"></v-chart>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import data from "../assets/pop_data.json";
const dates = Array.from(new Set(data.map(item => item[1]))).sort((a, b) => {
    const dateA = new Date(a);
    const dateB = new Date(b);
    return dateA - dateB
});
console.log("dates", dates);
const $option = ref({});
const updateFrequency = 2000;
var changeDate = dates[0];
var changeData = data.slice(1).filter(function (d) {
    return d[1] === dates[0];
});
function reset() {
    changeDate = dates[0];
    changeData = data.slice(1).filter(function (d) {
        return d[1] === dates[0];
    });
    updateChart();
}
const categoryColors = {
    autos: '#39c',
    entertainment: '#f9c',
    finance: '#ffde00',
    'food and drink': '#f90',
    health: '#6c9',
    kids: '#9cc',
    lifestyle: '#cf6',
    movies: '#66c',
    music: '#f66',
    news: '#6cc',
    sports: '#ccf',
    travel: '#9cf',
    tv: '#6cf',
    video: '#f99',
    weather: '#69f',
};
const updateChart = () => {
    $option.value = {
        grid: {
            top: 10,
            bottom: 30,
            left: 150,
            right: 80
        },
        xAxis: {
            max: 'dataMax'
        },
        dataset: {
            source: data.slice(1).filter(function (d) {
                return d[1] === changeDate;
            })
        },
        yAxis: {
            type: 'category',
            inverse: true,
            max: 14,
            axisLabel: {
                show: true,
                fontSize: 16,
            },
            animationDuration: 300,
            animationDurationUpdate: 300
        },
        series: [
            {
                data: changeData,
                realtimeSort: true,
                seriesLayoutBy: 'column',
                type: 'bar',
                itemStyle: {
                    color: function (param) {
                        return categoryColors[param.value[0]] || '#5470c6';
                    }
                },
                encode: {
                    x: 2,
                    y: 0
                },
                label: {
                    show: true,
                    position: 'right',
                    valueAnimation: true,
                    fontFamily: 'monospace'
                }
            }
        ],
        // Disable init animation.
        animationDuration: 0,
        animationDurationUpdate: updateFrequency,
        animationEasing: 'linear',
        animationEasingUpdate: 'linear',
        graphic: {
            elements: [
                {
                    type: 'text',
                    right: 160,
                    bottom: 60,
                    style: {
                        text: changeDate,
                        font: 'bolder 80px monospace',
                        fill: 'rgba(100, 100, 100, 0.25)'
                    },
                    z: 100
                }
            ]
        }
    }
}
updateChart();
const send = async () => {
    for (let i = 0; i < dates.length - 1; ++i) {
        (function (i) {
            setTimeout(function () {
                updateDate(dates[i + 1]);
            }, i * updateFrequency);
        })(i);
    }
    function updateDate(date) {
        let source = data.slice(1).filter(function (d) {
            return d[1] === date;
        })
        changeData = source;
        changeDate = date;
        updateChart();
    }
    reset();
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
