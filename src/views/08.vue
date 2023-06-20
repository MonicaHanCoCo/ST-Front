<template>
    <main id = "p8">
        <h1>单元测试</h1>
        <el-divider></el-divider>
        <el-button color="#626aef" :dark="isDark" size="large" @click="previewPDF1">预览PDF</el-button>
        <el-button color="#626aef" :dark="isDark" size="large" @click="previewReport1">查看报告</el-button>
        <br>
        <h1>系统测试</h1>
        <el-divider></el-divider>
        <el-button color="#626aef" :dark="isDark" size="large" @click="previewPDF2">预览PDF</el-button>
        <el-button color="#626aef" :dark="isDark" size="large" @click="previewReport2">查看报告</el-button>
        <br>
        <h1>集成测试</h1>
        <el-divider></el-divider>
        <el-button color="#626aef" :dark="isDark" size="large" @click="previewPDF3">预览PDF</el-button>
        <el-button color="#626aef" :dark="isDark" size="large" @click="previewReport3">查看报告</el-button>
        <br>
        <h1>回归测试</h1>
        <el-divider></el-divider>
        <el-button color="#626aef" :dark="isDark" size="large" @click="previewPDF4">预览PDF</el-button>
        <br>
    </main>
</template>
<script setup>
const previewPDF1 = () => {
    let url = "src/assets/单元测试.pdf"
    window.open(url, "_blank");
};
const previewReport1 = () => {
    let url = "https://sojh20230530092111662.pingcode.com/testhub/libraries/AIOPS/plans/6482fa9eb49cf64c0f9d5efe/report"
    window.open(url, "_blank");
};
const previewPDF2 = () => {
    let url = "src/assets/系统测试.pdf"
    window.open(url, "_blank");
};
const previewReport2 = () => {
    let url = "https://sojh20230530092111662.pingcode.com/testhub/libraries/AIOPS/plans/6482fadc7ac0d9ba3a40d7d8/report"
    window.open(url, "_blank");
};
const previewPDF3 = () => {
    let url = "src/assets/集成测试.pdf"
    window.open(url, "_blank");
};
const previewReport3 = () => {
    let url = "https://sojh20230530092111662.pingcode.com/testhub/libraries/AIOPS/plans/6482fac2a40c6f17a3d112ed/report"
    window.open(url, "_blank");
};
const previewPDF4 = () => {
    let url = "src/assets/回归测试.pdf"
    window.open(url, "_blank");
};

</script>