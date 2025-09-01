<script setup>
const props = defineProps({
    data: Array
});
</script>

<template>
    <BTable :items="props.data" :fields="fields">
        <template #cell(selected)="data">
            <BFormCheckbox v-model="data.item.selected" />
        </template>
        
        <template v-for="field in fields" #[`head(${field})`]>
            {{ customHeaders[field] || field }}
        </template>
    </BTable>
</template>

<style scoped>
.bg-owner {

}

.bg-kakao {
    background-color: #F9E000 !important;
    color: black;
}

.bg-naver {
    background-color: #00B074;
    color: white;
}
</style>