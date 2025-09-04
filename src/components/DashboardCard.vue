<script setup>
import DashboardTable from './DashboardTable.vue';

const props = defineProps({
    title: String,
    table: Object
});
</script>

<template>
    <b-card>
        <template #header>
            {{ props.title }}
        </template>

        <DashboardTable :table="props.table" />
    </b-card>
</template>

<style scoped>

</style>