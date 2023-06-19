<template>
    <main id="p5">
        <h1>练习5 ATM系统</h1>
        <el-divider></el-divider>
        <h2>5.1 题目描述</h2><br>
        <p>分析或查阅得到正确的ATM的系统状态图，再基于state transition testing分析出transition tree，最后设计出逻辑测试用例。</p><br>
        <h2>5.2 状态行为分析</h2><br>
        <p>ATM的状态包括</p>
        <el-table :data="td1" class="st">
            <el-table-column prop="1" label="状态序号" width="500"></el-table-column>
            <el-table-column prop="2" label="状态名称" width="500"></el-table-column>
        </el-table>
        <p>ATM的行为包括：</p>
        <el-table :data="td2" class="st">
            <el-table-column prop="1" label="行为序号" width="500"></el-table-column>
            <el-table-column prop="2" label="行为名称" width="500"></el-table-column>
        </el-table>
        <el-divider></el-divider>
        <h2>5.3 状态图和状态树</h2><br>
        <p>状态图如下</p><br>
        <img :src="l51URL" alt="L51" style="width: 60%; height: 17%;" /><br><br>
        <p>根据状态图转状态树的算法</p>
        <p>（1）状态树的节点描述状态图的状态，状态树的枝干描述状态图的事件。 </p>
        <p>（2）转换树的根节点为状态图的初始状态，转换树的终节点为叶节点。</p>
        <p>（3）转换树的每个节点，在状态图中如有直接后续状态，则添加一个枝干和节点（不同的事件应 有不同的枝干和节点），直到出现从根节点到新添加的节点的路径上已经出现过相同状态的情况，可将此节点作为叶节点：</p>
        <p>状态树如下：</p><br>
        <img :src="l52URL" alt="L52" style="width: 70%; height: 18%;" /><br><br>
        <el-divider></el-divider>
        <h2>5.4 测试用例</h2><br>
        <img :src="l53URL" alt="L53" style="width: 380px; height: 180px;" />
        <img :src="l54URL" alt="L54" style="width: 340px; height: 180px;" />
        <img :src="l55URL" alt="L55" style="width: 340px; height: 180px;" />
    </main>
</template>
<script setup>
import { ref } from 'vue';
import l51URL from '../assets/l51.png'
import l52URL from '../assets/l52.png'
import l53URL from '../assets/l53.png'
import l54URL from '../assets/l54.png'
import l55URL from '../assets/l55.png'
const td1 = ref([
    {
        1: 0,
        2: '初始状态'
    },
    {
        1: 1,
        2: '空闲状态'
    },
    {
        1: 2,
        2: '检查卡状态'
    },
    {
        1: 3,
        2: '第一次输入密码'
    },
    {
        1: 4,
        2: '第二次输入密码'
    },
    {
        1: 5,
        2: '第三次输入密码'
    },
    {
        1: 6,
        2: '选择交易类型'
    },
    {
        1: 7,
        2: '查询状态'
    },
    {
        1: 8,
        2: '取款状态'
    },
    {
        1: 9,
        2: '存款状态'
    },
    {
        1: 10,
        2: '退卡状态'
    }
]);
const td2 = ref([
    {
        "1": 0,
        "2": "插入卡"
    },
    {
        "1": 1,
        "2": "检查卡成功"
    },
    {
        "1": 2,
        "2": "检查卡失败"
    },
    {
        "1": 3,
        "2": "密码正确"
    },
    {
        "1": 4,
        "2": "密码错误"
    },
    {
        "1": 5,
        "2": "选择交易类型"
    },
    {
        "1": 6,
        "2": "退出"
    }
])
</script>
<style lang="scss" scoped>
#p5 {
    margin: 20px;
}

.st {
    transform: scale(0.8);
}
</style>