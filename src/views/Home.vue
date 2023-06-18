<template>
    <main id="home-page">
        <h1>Welcome to the Visualization Panel of Software Testing Project！</h1>
        <img class="main-pic" :src="mainPicURL" alt="Welcome" />
        <div class="info">
            <h2>Software Testing Report</h2>
            <h3>2023 6</h3>
        </div>
    </main>
</template>
<script setup>
import mainPicURL from '../assets/main.png'
</script>
<style lang="scss" scoped>
.main-pic {
    transform: scale(1.6);
    margin: 10% 40%;
}

#home-page {
    text-align: center;
}
</style>