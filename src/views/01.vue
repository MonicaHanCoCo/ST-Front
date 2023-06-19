<template>
    <main id="p1">
        <h1>练习1 判断三角形类型</h1>
        <el-divider></el-divider>
        <h2>1.1 问题分析</h2><br>
        <p>本题的输入变量为三个整数变量a、b、c作为三角形的三条边。 </p>
        <p>我们小组对输出格式做了规定，分别为Equilateral triangle(等边三角形)，Isosceles triangle(等腰三角形)，Normal triangle(普通三角形)和Not
            triangle(非三角形)。</p>
        <p>另外，我们人工加上三条边的取值范围为(0,800]。</p>
        <el-divider></el-divider>
        <h2>1.2 边界值分析-测试用例</h2><br>
        <p>本题中我们使用健壮边界值分析法，同时考虑有效区间和无效区间单个变量边界值（健壮边界值）：包括最小值、略高于最小值、正常值、略低于最大值、最大值，以及略超过最大值和略小于最小值的值。理论测试用例是6n+1，在本题中是19个。
        </p>
        <br>
        <el-table :data="td1">
            <el-table-column prop="序号" label="序号" width="100"></el-table-column>
            <el-table-column prop="边 a" label="边 a" width="120"></el-table-column>
            <el-table-column prop="边 b" label="边 b" width="120"></el-table-column>
            <el-table-column prop="边 c" label="边 c" width="120"></el-table-column>
            <el-table-column prop="预期输出" label="预期输出" width="210"></el-table-column>
            <el-table-column prop="实际输出" label="实际输出" width="210"></el-table-column>
            <el-table-column prop="测试结果" label="测试结果" width="100"></el-table-column>
        </el-table>
        <el-divider></el-divider>
        <h2>1.3 等价类分析-测试用例</h2><br>
        <p>本题中我们采用弱健壮等价类测试。通过对题目的分析，我们可以看到，问题的输出有“等边三角形”、“等腰三角形”、“普通三角形”、 “非三角形”以及针对无效输入的输出“数值越界”。
            因此我们根据问题输出构造等价类，可以构造出如下弱一般等价类，强一般等价类和弱一般等价类测试用例个数相同：
        </p>
        <ul>
            <li>D1= {( a, b, c )| a, b, c 构成等边三角形 }</li>
            <li>D2= {( a, b, c )| a, b, c 构成非等边等腰三角形 }</li>
            <li>D3= {( a, b, c )| a, b, c 构成一般三角形 }</li>
            <li>D4= {( a, b, c )| a, b, c 不构成三角形 }</li>
        </ul><br>
        <el-table :data="td2">
            <el-table-column prop="序号" label="序号" width="100"></el-table-column>
            <el-table-column prop="边 a" label="边 a" width="120"></el-table-column>
            <el-table-column prop="边 b" label="边 b" width="120"></el-table-column>
            <el-table-column prop="边 c" label="边 c" width="120"></el-table-column>
            <el-table-column prop="预期输出" label="预期输出" width="210"></el-table-column>
            <el-table-column prop="实际输出" label="实际输出" width="210"></el-table-column>
            <el-table-column prop="测试结果" label="测试结果" width="100"></el-table-column>
        </el-table><br>
        <p>同时，我们考虑各边的取值范围(0,800]，对于每个参数的无效取值分别有低于最小值、等于0和高于最大值三种情况，补充上额外的弱健壮测试用例，共9种，输出为其无法构成三角形的原因。</p><br>
        <el-table :data="td3">
            <el-table-column prop="序号" label="序号" width="100"></el-table-column>
            <el-table-column prop="边 a" label="边 a" width="120"></el-table-column>
            <el-table-column prop="边 b" label="边 b" width="120"></el-table-column>
            <el-table-column prop="边 c" label="边 c" width="120"></el-table-column>
            <el-table-column prop="预期输出" label="预期输出" width="210"></el-table-column>
            <el-table-column prop="实际输出" label="实际输出" width="210"></el-table-column>
            <el-table-column prop="测试结果" label="测试结果" width="100"></el-table-column>
        </el-table><br>
        <el-divider></el-divider>
        <h2>1.4 代码设计</h2><br>
        <img :src="l1URL" alt="L1" />
    </main>
</template>
<script setup>
import { ref } from 'vue';
import l1URL from '../assets/l1.png'
const td1 = ref([
    { '序号': 1, '边 a': -1, '边 b': 400, '边 c': 400, '预期输出': "a can't <0", '实际输出': "a can't <0", '测试结果': '通过' },
    { '序号': 2, '边 a': 0, '边 b': 400, '边 c': 400, '预期输出': "a can't be 0", '实际输出': "a can't be 0", '测试结果': '通过' },
    { '序号': 3, '边 a': 1, '边 b': 400, '边 c': 400, '预期输出': 'Isosceles triangle', '实际输出': 'Isosceles triangle', '测试结果': '通过' },
    { '序号': 4, '边 a': 400, '边 b': 400, '边 c': 400, '预期输出': 'Equilateral triangle', '实际输出': 'Equilateral triangle', '测试结果': '通过' },
    { '序号': 5, '边 a': 799, '边 b': 400, '边 c': 400, '预期输出': 'Isosceles triangle', '实际输出': 'Isosceles triangle', '测试结果': '通过' },
    { '序号': 6, '边 a': 800, '边 b': 400, '边 c': 400, '预期输出': 'Not triangle', '实际输出': 'Not triangle', '测试结果': '通过' },
    { '序号': 7, '边 a': 801, '边 b': 400, '边 c': 400, '预期输出': 'a is not in the range of value', '实际输出': 'a is not in the range of value', '测试结果': '通过' },
    { '序号': 8, '边 a': 400, '边 b': -1, '边 c': 400, '预期输出': "b can't <0", '实际输出': "b can't <0", '测试结果': '通过' },
    { '序号': 9, '边 a': 400, '边 b': 0, '边 c': 400, '预期输出': "b can't be 0", '实际输出': "b can't be 0", '测试结果': '通过' },
    { '序号': 10, '边 a': 400, '边 b': 1, '边 c': 400, '预期输出': 'Isosceles triangle', '实际输出': 'Isosceles triangle', '测试结果': '通过' },
    { '序号': 11, '边 a': 400, '边 b': 799, '边 c': 400, '预期输出': 'Isosceles triangle', '实际输出': 'Isosceles triangle', '测试结果': '通过' },
    { '序号': 12, '边 a': 400, '边 b': 800, '边 c': 400, '预期输出': 'Not triangle', '实际输出': 'Not triangle', '测试结果': '通过' },
    { '序号': 13, '边 a': 400, '边 b': 801, '边 c': 400, '预期输出': 'b is not in the range of value', '实际输出': 'b is not in the range of value', '测试结果': '通过' },
    { '序号': 14, '边 a': 400, '边 b': 400, '边 c': -1, '预期输出': "c can't <0", '实际输出': "c can't <0", '测试结果': '通过' },
    { '序号': 15, '边 a': 400, '边 b': 400, '边 c': 0, '预期输出': "c can't be 0", '实际输出': "c can't be 0", '测试结果': '通过' },
    { '序号': 16, '边 a': 400, '边 b': 400, '边 c': 1, '预期输出': 'Isosceles triangle', '实际输出': 'Isosceles triangle', '测试结果': '通过' },
    { '序号': 17, '边 a': 400, '边 b': 400, '边 c': 799, '预期输出': 'Isosceles triangle', '实际输出': 'Isosceles triangle', '测试结果': '通过' },
    { '序号': 18, '边 a': 400, '边 b': 400, '边 c': 800, '预期输出': 'Not triangle', '实际输出': 'Not triangle', '测试结果': '通过' },
    { '序号': 19, '边 a': 400, '边 b': 400, '边 c': 801, '预期输出': 'c is not in the range of value', '实际输出': 'c is not in the range of value', '测试结果': '通过' },
]);
const td2 = ref([
    { '序号': 1, '边 a': 6, '边 b': 6, '边 c': 6, '预期输出': 'Equilateral triangle', '实际输出': 'Equilateral triangle', '测试结果': '通过' },
    { '序号': 2, '边 a': 3.3, '边 b': 3.3, '边 c': 4.4, '预期输出': 'Isosceles triangle', '实际输出': 'Isosceles triangle', '测试结果': '通过' },
    { '序号': 3, '边 a': 7, '边 b': 8, '边 c': 9, '预期输出': 'Normal triangle', '实际输出': 'Normal triangle', '测试结果': '通过' },
    { '序号': 4, '边 a': 11, '边 b': 5, '边 c': 5, '预期输出': 'Not triangle', '实际输出': 'Not triangle', '测试结果': '通过' },
]);
const td3 = ref([
    { '序号': 5, '边 a': -1, '边 b': 22, '边 c': 25.5, '预期输出': "a can't <0", '实际输出': "a can't <0", '测试结果': '通过' },
    { '序号': 6, '边 a': 801, '边 b': 3, '边 c': 3, '预期输出': 'a is not in the range of value', '实际输出': 'a is not in the range of value', '测试结果': '通过' },
    { '序号': 7, '边 a': 0, '边 b': 5, '边 c': 8, '预期输出': "a can't be 0", '实际输出': "a can't be 0", '测试结果': '通过' },
    { '序号': 8, '边 a': 15, '边 b': -2, '边 c': 9, '预期输出': "b can't <0", '实际输出': "b can't <0", '测试结果': '通过' },
    { '序号': 9, '边 a': 10, '边 b': 801, '边 c': 17, '预期输出': 'b is not in the range of value', '实际输出': 'b is not in the range of value', '测试结果': '通过' },
    { '序号': 10, '边 a': 14, '边 b': 0, '边 c': 22, '预期输出': "b can't be 0", '实际输出': "b can't be 0", '测试结果': '通过' },
    { '序号': 11, '边 a': 10, '边 b': 11, '边 c': -3, '预期输出': "c can't <0", '实际输出': "c can't <0", '测试结果': '通过' },
    { '序号': 12, '边 a': 18, '边 b': 15, '边 c': 0, '预期输出': "c can't be 0", '实际输出': "c can't be 0", '测试结果': '通过' },
    { '序号': 13, '边 a': 14.1, '边 b': 10, '边 c': 801, '预期输出': 'b is not in the range of value', '实际输出': 'b is not in the range of value', '测试结果': '通过' },
]);
</script>
<style lang="scss" scoped>
#p1 {
    margin: 20px;
}
</style>