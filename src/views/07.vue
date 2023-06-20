<template>
    <main id = "p7">
        <h1>练习7 销售系统</h1>
        <el-divider></el-divider>
        <h2>7.1 题目描述</h2><br>
        <p>一销售系统，如果销售员的年销售额大于 200 万 RMB 且请假天数不超过 10 天的情况下，现金到帐大于等于 60%，则佣金（提成）系数为 7，即佣金值为销售额除以佣金系数；现金到帐小于 60%，佣金不予计算。所有其他情况且现金到帐小于等于 85%，则按佣金系数均为6计算佣金，现金到账大于 85%，佣金系数按 5 处理。</p><br>
        <p>根据题意设计流程图并设计测试用例实现白盒测试 White Box Test 的：</p><br>
        <ul>
            <ul>1）语句覆盖</ul>
            <ul>2）判断覆盖</ul>
            <ul>3）条件覆盖</ul>
            <ul>4）判断—条件覆盖</ul>
            <ul>5）条件组合覆盖</ul>
        </ul><br>
        <p>测试用例及覆盖表示要清晰。</p><br>
        <h2>7.2 流程图设计</h2><br>
        <p>对本题中以下属性命名：</p><br>
        <ul>
            <li>年销售额：AnnualSales </li>
            <li>请假天数：LeaveDays </li>
            <li>现金到账率：CashArrivalRate </li>
            <li>佣金系数：CommissionRate </li>
            <li>佣金值：Commission </li>
        </ul><br>
        <p>根据题意绘制流程图如下：</p><br>
        <img :src="l71URL" alt="L71" style="zoom:50%;" /><br><br>
        <h2>7.3 测试用例</h2><br>
        <h3>7.3.1 语句覆盖</h3><br>
        <p>由【7.2 流程图设计】可知，要覆盖全部路径，需要覆盖的路径集合有：</p><br>
        <ul>
            <li>MN</li>
            <li>MABDHI</li>
            <li>MABEHI</li>
            <li>MACFHI</li>
            <li>MACGI</li>
        </ul><br>
        <p>由此可构建出如下测试用例：</p><br>
        <img :src="l72URL" alt="L72" style="zoom:50%;" /><br><br>
        <h3>7.3.2 判断覆盖</h3><br>
        <p>由【7.2 流程图设计】可知，要覆盖全部判断，需要覆盖的路径集合有：</p><br>
        <ul>
            <li>MN</li>
            <li>MABDHI</li>
            <li>MABEHI</li>
            <li>MACFHI</li>
            <li>MACGI</li>
        </ul><br>
        <p>由此可构建出如下测试用例：</p><br>
        <img :src="l78URL" alt="L78" style="zoom:50%;" /><br><br>
        <h3>7.3.3 条件覆盖</h3><br>
        <p>由【7.2 流程图设计】可知，本程序共有 4 个判断语句：</p><br>
        <ul>
            <li>对于判断语句 (AnnualSales&lt;0) or (LeaveDays&lt;0) or (CashArrivalRate&lt;0) ，有以下取值：</li><br>
            <ul>
                <li>AnnualSales &lt; 0 为真，记为 T1 </li>
                <li>AnnualSales &lt; 0 为假，记为 F1 </li>
                <li>LeaveDays &lt; 0 为真，记为 T2 </li>
                <li>LeaveDays >= 0 为假，记为 F2 </li>
                <li>CashArrivalRate &lt; 0 为真，记为 T3 </li>
                <li>CashArrivalRate >= 0 为假，记为 F3 </li>
            </ul><br>
            <li>对于判断语句 (AnnualSales>200) and (LeaveDays&lt;=10) ，有以下取值： </li><br>
            <ul>
                <li>○AnnualSales > 200为真，记为 T4</li>
                <li>○AnnualSales &lt;= 200为假，记为 F4</li>
                <li>○LeaveDays &lt;= 10为真，记为 T5</li>
                <li>○LeaveDays > 10为假，记为 F5</li>
            </ul><br>
            <li>对于判断语句 CashArrivalRate&lt;=0.85，有以下取值：</li><br>
            <ul>
                <li>○CashArrivalRate > 0.85 为真，记为 T6</li>
                <li>○CashArrivalRate &lt;= 0.85 为真，记为 F6</li>
            </ul><br>
            <li>对于判断语句 CashArrivalRate>=0.6，有以下取值：</li><br>
            <ul>
                <li>○CashArrivalRate &lt; 0.6 为真，记为 T7</li>
                <li>○CashArrivalRate >= 0.6 为真，记为 F7</li>
            </ul><br>
        </ul>
        <p>通过上述条件，构建测试用例如下：</p><br>
        <img :src="l73URL" alt="L73" style="zoom:50%;" /><br><br>
        <h3>7.3.4 条件判断覆盖</h3><br>
        <p>构建测试用例如下：</p><br>
        <img :src="l74URL" alt="L74" style="zoom:50%;" /><br><br>
        <h3>7.3.5 条件组合覆盖</h3><br>
        <p>构建测试用例如下：</p><br>
        <img :src="l75URL" alt="L75" style="zoom:50%;" /><br><br>
        <img :src="l76URL" alt="L76" style="zoom:50%;" /><br><br>
        <img :src="l77URL" alt="L77" style="zoom:50%;" /><br><br>
    </main>
</template>
<script setup>
import { ref } from 'vue';
import l71URL from '../assets/l71.png'
import l72URL from '../assets/l72.png'
import l73URL from '../assets/l73.png'
import l74URL from '../assets/l74.png'
import l75URL from '../assets/l75.png'
import l76URL from '../assets/l76.png'
import l77URL from '../assets/l77.png'
import l78URL from '../assets/l78.png'
</script>
<style lang="scss" scoped>
#p5 {
    margin: 20px;
}

.st {
    transform: scale(0.8);
}
</style>