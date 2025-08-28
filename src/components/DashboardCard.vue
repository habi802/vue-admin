<script setup>
import DashboardTable from './DashboardTable.vue';

const props = defineProps({
    table: Object
});
</script>

<template>
<div class="card">
        <div class="card-header">
            가게 관리
        </div>
        <div class="card-body">
            <DashboardTable :table="props.table" />
        </div>
    </div>
</template>

<style scoped>

</style>