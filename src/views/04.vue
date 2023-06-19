<template>
    <main id="p4">
        <h1>练习4 电信收费问题系统</h1>
        <el-divider></el-divider>
        <h2>4.1 题目描述</h2><br>
        <p>A.每月的电话总费用=基本月租费+折扣后的实际的通话费，如果没有折扣则按实际通话费计算，基本月租费为25元，每分钟通话费为0.15元。</p>
        <p>B.实际通话费是否有折扣与当月的通话时间（分钟）和本年度至本月的累计未按时缴费的次数有关。</p>
        <p>C.当月的通话分钟数和折扣比例及本年度未按时缴费次数之间有直接的对应关系，如果本年度的未按时缴费的次数超过本月通话时间所对应的容许值则免于折扣，并按实际的通话费计算。</p>
        <p>D.通话时间和折扣比例及未按时缴费次数的关系为：</p><br>
        <el-table :data="td1">
            <el-table-column prop="1" label="本月通话的分钟数" width="300"></el-table-column>
            <el-table-column prop="2" label="通话时间段的最大容许不按时缴费次数" width="400"></el-table-column>
            <el-table-column prop="3" label="通话时间段的折扣率" width="300"></el-table-column>
        </el-table><br>
        <el-divider></el-divider>
        <h2>4.2 测试计划</h2>
        <h3>边界值法</h3><br>
        <p>采用健壮性边界值分析法，共有两个输入变量，各自有5个合法取值区间。</p>
        <p>对于五个区间，分别使用健壮性的边界值测试法。</p>
        <el-divider></el-divider>
        <h3>等价类法</h3><br>
        <p>共有两个输入变量，对于输入变量 T(minutes):</p><br>
        <el-descriptions direction="vertical" :column="7" :size="size" border>
            <el-descriptions-item label="T<0">无效</el-descriptions-item>
            <el-descriptions-item label="0<T<60">有效</el-descriptions-item>
            <el-descriptions-item label="60<T<120">有效</el-descriptions-item>
            <el-descriptions-item label="120<T<180">有效</el-descriptions-item>
            <el-descriptions-item label="180<T<300">有效</el-descriptions-item>
            <el-descriptions-item label="300<T<44600">有效</el-descriptions-item>
            <el-descriptions-item label="44600<T">无效</el-descriptions-item>
        </el-descriptions><br>
        <p>对于输入变量 C (NoPayCount)</p><br>
        <el-descriptions direction="vertical" :column="7" :size="size" border>
            <el-descriptions-item label="C<0">无效</el-descriptions-item>
            <el-descriptions-item label="0<C<1">有效</el-descriptions-item>
            <el-descriptions-item label="1<C<2">有效</el-descriptions-item>
            <el-descriptions-item label="2<C<3">有效</el-descriptions-item>
            <el-descriptions-item label="3<C<6">有效</el-descriptions-item>
            <el-descriptions-item label="6<C<11">有效</el-descriptions-item>
            <el-descriptions-item label="11<C">无效</el-descriptions-item>
        </el-descriptions><br>
        <p>采用强健壮性等价类法，共有测试用例 7 * 7 = 49 (个)</p><br>
        <el-table :data="td2">
            <el-table-column prop="序号" label="序号" width="100"></el-table-column>
            <el-table-column prop="1" label="通话时长" width="200"></el-table-column>
            <el-table-column prop="2" label="欠费次数" width="200"></el-table-column>
            <el-table-column prop="3" label="预期输出" width="200"></el-table-column>
            <el-table-column prop="4" label="测试结果" width="200"></el-table-column>
        </el-table><br>
        <img :src="l41URL" alt="L41" /><img :src="l42URL" alt="L42" />
        <el-divider></el-divider>
        <h3>决策表法</h3><br>
        <p>对于通话时间T的取值范围：</p>
        <p>T1 = { 0 &lt T ≤ 60}</p>
        <p>T2 = { 60 &lt T ≤ 120}</p>
        <p>T3 = { 120 &lt T ≤ 180}</p>
        <p>T4 = { 180 &lt T ≤ 240}</p>
        <p>T5 = { 240 &lt T ≤ 300}</p>
        <p>对于欠费次数C:</p>
        <p>C1 = { 0 &lt C ≤ 1}</p>
        <p>C2 = { 1 &lt C ≤ 2}</p>
        <p>C3 = { 2 &lt C ≤ 3}</p>
        <p>C4 = { 3 &lt C ≤ 6}</p>
        <p>C5 = { 6 &lt C ≤ 11}</p><br>
        <el-table :data="td3">
            <el-table-column label="桩" prop="桩"></el-table-column>
            <el-table-column label="1" prop="1"></el-table-column>
            <el-table-column label="2" prop="2"></el-table-column>
            <el-table-column label="3" prop="3"></el-table-column>
            <el-table-column label="4" prop="4"></el-table-column>
            <el-table-column label="5" prop="5"></el-table-column>
            <el-table-column label="6" prop="6"></el-table-column>
            <el-table-column label="7" prop="7"></el-table-column>
            <el-table-column label="8" prop="8"></el-table-column>
            <el-table-column label="9" prop="9"></el-table-column>
            <el-table-column label="10" prop="10"></el-table-column>
        </el-table><br>
        <p>根据决策表设计用例</p><br>
        <el-table :data="td4">
            <el-table-column prop="序号" label="序号" width="100"></el-table-column>
            <el-table-column prop="1" label="通话时长" width="200"></el-table-column>
            <el-table-column prop="2" label="欠费次数" width="200"></el-table-column>
            <el-table-column prop="3" label="预期输出" width="200"></el-table-column>
            <el-table-column prop="4" label="测试结果" width="200"></el-table-column>
        </el-table><br>
        <img :src="l43URL" alt="L43" />
    </main>
</template>
<script setup>
import { ref } from 'vue';
import l41URL from '../assets/l41.png'
import l42URL from '../assets/l42.png'
import l43URL from '../assets/l43.png'
const td1 = ref([
    {
        '1': '0 < 通话时间 ≤ 60',
        '2': 1,
        '3': '1.0%'
    },
    {
        '1': '60 < 通话时间 ≤ 120',
        '2': 2,
        '3': '1.5%'
    },
    {
        '1': '120 < 通话时间 ≤ 180',
        '2': 3,
        '3': '2.0%'
    },
    {
        '1': '180 < 通话时间 ≤ 300',
        '2': 3,
        '3': '2.5%'
    },
    {
        '1': '300 < 通话时间',
        '2': 6,
        '3': '3.0%'
    }
]);
const td2 = ref([
    {
        序号: 1,
        1: -10,
        2: -1,
        3: 'T is illegal',
        4: '通过'
    },
    {
        序号: 2,
        1: -10,
        2: 1,
        3: 'T is illegal',
        4: '通过'
    },
    {
        序号: 3,
        1: -10,
        2: 2,
        3: 'T is illegal',
        4: '通过'
    },
    {
        序号: 4,
        1: -10,
        2: 3,
        3: 'T is illegal',
        4: '通过'
    },
    {
        序号: 5,
        1: -10,
        2: 5,
        3: 'T is illegal',
        4: '通过'
    },
    {
        序号: 6,
        1: -10,
        2: 7,
        3: 'T is illegal',
        4: '通过'
    },
    {
        序号: 7,
        1: -10,
        2: 13,
        3: 'T is illegal',
        4: '通过'
    },
    {
        序号: 8,
        1: 30,
        2: -1,
        3: 'C is illegal',
        4: '通过'
    },
    {
        序号: 9,
        1: 30,
        2: 1,
        3: 29.455,
        4: '通过'
    },
    {
        序号: 10,
        1: 30,
        2: 2,
        3: 29.5,
        4: '通过'
    },
    {
        序号: 11,
        1: 30,
        2: 3,
        3: 29.5,
        4: '通过'
    },
    {
        序号: 12,
        1: 30,
        2: 5,
        3: 29.5,
        4: '通过'
    },
    {
        序号: 13,
        1: 30,
        2: 7,
        3: 29.5,
        4: '通过'
    },
    {
        序号: 14,
        1: 30,
        2: 13,
        3: 'C is illegal',
        4: '通过'
    },
    {
        序号: 15,
        1: 90,
        2: -1,
        3: 'C is illegal',
        4: '通过'
    },
    {
        序号: 16,
        1: 90,
        2: 1,
        3: 38.2975,
        4: '通过'
    },
    {
        序号: 17,
        1: 90,
        2: 2,
        3: 38.2975,
        4: '通过'
    },
    {
        序号: 18,
        1: 90,
        2: 3,
        3: 38.5,
        4: '通过'
    },
    {
        序号: 19,
        1: 90,
        2: 5,
        3: 38.5,
        4: '通过'
    },
    {
        序号: 20,
        1: 90,
        2: 7,
        3: 38.5,
        4: '通过'
    },
    {
        序号: 21,
        1: 90,
        2: 13,
        3: 'C is illegal',
        4: '通过'
    },
    {
        序号: 22,
        1: 150,
        2: -1,
        3: 'C is illegal',
        4: '通过'
    },
    {
        序号: 23,
        1: 150,
        2: 1,
        3: 47.05,
        4: '通过'
    },
    {
        序号: 24,
        1: 150,
        2: 2,
        3: 47.05,
        4: '通过'
    },
    {
        序号: 25,
        1: 150,
        2: 3,
        3: 47.05,
        4: '通过'
    },
    {
        序号: 26,
        1: 150,
        2: 5,
        3: 47.5,
        4: '通过'
    },
    {
        序号: 27,
        1: 150,
        2: 7,
        3: 47.5,
        4: '通过'
    },
    {
        序号: 28,
        1: 150,
        2: 13,
        3: 'C is illegal',
        4: '通过'
    },
    {
        序号: 29,
        1: 240,
        2: -1,
        3: 'C is illegal',
        4: '通过'
    },
    {
        序号: 30,
        1: 240,
        2: 1,
        3: 60.1,
        4: '通过'
    },
    {
        序号: 31,
        1: 240,
        2: 2,
        3: 60.1,
        4: '通过'
    },
    {
        序号: 32,
        1: 240,
        2: 3,
        3: 60.1,
        4: '通过'
    },
    {
        序号: 33,
        1: 240,
        2: 5,
        3: 61,
        4: '通过'
    },
    {
        序号: 34,
        1: 240,
        2: 7,
        3: 61,
        4: '通过'
    },
    {
        序号: 35,
        1: 240,
        2: 13,
        3: 'C is illegal',
        4: '通过'
    },
    {
        序号: 36,
        1: 20000,
        2: -1,
        3: 'C is illegal',
        4: '通过'
    },
    {
        序号: 37,
        1: 20000,
        2: 1,
        3: 2935,
        4: '通过'
    },
    {
        序号: 38,
        1: 20000,
        2: 2,
        3: 2935,
        4: '通过'
    },
    {
        序号: 39,
        1: 20000,
        2: 3,
        3: 2935,
        4: '通过'
    },
    {
        序号: 40,
        1: 20000,
        2: 5,
        3: 2935,
        4: '通过'
    },
    {
        序号: 41,
        1: 20000,
        2: 7,
        3: 3025,
        4: '通过'
    },
    {
        序号: 42,
        1: 20000,
        2: 13,
        3: 'C is illegal',
        4: '通过'
    },
    {
        序号: 43,
        1: 50000,
        2: -1,
        3: 'T is illegal',
        4: '通过'
    },
    {
        序号: 44,
        1: 50000,
        2: 1,
        3: 'T is illegal',
        4: '通过'
    },
    {
        序号: 45,
        1: 50000,
        2: 2,
        3: 'T is illegal',
        4: '通过'
    },
    {
        序号: 46,
        1: 50000,
        2: 3,
        3: 'T is illegal',
        4: '通过'
    },
    {
        序号: 47,
        1: 50000,
        2: 5,
        3: 'T is illegal',
        4: '通过'
    },
    {
        序号: 48,
        1: 50000,
        2: 7,
        3: 'T is illegal',
        4: '通过'
    },
    {
        序号: 49,
        1: 50000,
        2: 13,
        3: 'T is illegal',
        4: '通过'
    }
]);
const td3 = ref([
    { 桩: 'T', 1: 'T1', 2: 'T1', 3: 'T2', 4: 'T2', 5: 'T3', 6: 'T3', 7: 'T4', 8: 'T4', 9: 'T5', 10: 'T5' },
    { 桩: 'C', 1: 'C1', 2: 'C2-C5', 3: 'C1,C2', 4: 'C3-C5', 5: 'C1-C3', 6: 'C4,C5', 7: 'C1-C3', 8: 'C4,C5', 9: 'C1-C4', 10: 'C5' },
    { 桩: 'Dis=0', 2: 'X', 4: 'X', 6: 'X', 8: 'X', 10: 'X' },
    { 桩: 'Dis=1.0', 1: 'X' },
    { 桩: 'Dis=1.5', 3: 'X' },
    { 桩: 'Dis=2.0', 5: 'X' },
    { 桩: 'Dis=2.5', 7: 'X' },
    { 桩: 'Dis=3.0', 9: 'X' },
]);
const td4 = ref([
    {
        序号: 1,
        1: 30,
        2: 1,
        3: 29.455,
        4: '通过'
    },
    {
        序号: 2,
        1: 30,
        2: 4,
        3: 29.5,
        4: '通过'
    },
    {
        序号: 3,
        1: 90,
        2: 2,
        3: 38.2975,
        4: '通过'
    },
    {
        序号: 4,
        1: 90,
        2: 4,
        3: 38.5,
        4: '通过'
    },
    {
        序号: 5,
        1: 150,
        2: 3,
        3: 47.05,
        4: '通过'
    },
    {
        序号: 6,
        1: 150,
        2: 5,
        3: 47.5,
        4: '通过'
    },
    {
        序号: 7,
        1: 210,
        2: 3,
        3: 55.7125,
        4: '通过'
    },
    {
        序号: 8,
        1: 210,
        2: 7,
        3: 56.5,
        4: '通过'
    },
    {
        序号: 9,
        1: 270,
        2: 5,
        3: 65.5,
        4: '通过'
    },
    {
        序号: 10,
        1: 270,
        2: 9,
        3: 65.5,
        4: '通过'
    }
]);
</script>
<style lang="scss" scoped>
#p4 {
    margin: 20px;
}
</style>