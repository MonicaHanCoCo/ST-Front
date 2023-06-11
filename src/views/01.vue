<template>
    <main id="01-page">
        <h1>Query1</h1>
        <div class="title">
            <p>Query the lifecycle of a single news item and display its popularity and changes over different time periods
            </p>
            <!-- <el-radio-group v-model="radio">
                <el-radio label="1" size="large" border>History</el-radio>
                <el-radio label="2" size="large" border>Real-Time</el-radio>
            </el-radio-group> v-if="radio === '1'"-->
        </div>
        <div>
            <el-divider></el-divider>
            <SingleLifecycle />
            <el-divider></el-divider>
            <FixedTimePopularity />
            <el-divider></el-divider>
            <FixedCategoryPopularity />
            <el-divider></el-divider>
            <DynamicCategoryPopularity />
        </div>


    </main>
</template>
<script setup>
import { ref } from 'vue'
import SingleLifecycle from '../components/SingleLifecycle.vue';
import FixedTimePopularity from '../components/FixedTimePopularity.vue';
import FixedCategoryPopularity from '../components/FixedCategoryPopularity.vue'
import DynamicCategoryPopularity from '../components/DynamicCategoryPopularity.vue';
// const radio = ref('1');
</script>
<style lang="scss" scoped>
.title {
    display: flex;

    p {
        flex: 1;
    }
}
</style>