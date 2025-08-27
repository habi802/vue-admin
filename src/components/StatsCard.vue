<script setup>
const props = defineProps({
    title: String,
    count: Number
});
</script>

<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">{{ props.title }}</h5>
            <h1 class="card-text">{{ props.count !== undefined && props.count !== null ? props.count.toLocaleString() : 0 }}</h1>
        </div>
    </div>
</template>

<style scoped>
.card {
    width: 200px;
}
</style>