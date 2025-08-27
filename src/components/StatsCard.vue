<script setup>
defineProps({
    title: String,
    count: Number
})
</script>

<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <h1 class="card-text">{{ count !== undefined && count !== null ? count.toLocaleString() : 0 }}</h1>
        </div>
    </div>
</template>

<style scoped>

</style>