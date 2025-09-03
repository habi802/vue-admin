<script setup>
import { ref, computed, watch } from 'vue';

const props = defineProps({
    title: String,
    data: Array,
    field: Array
});

// props.data → 로컬 복사본 만들기 (체크박스 상태 추가)
const localItems = ref(props.data.map(item => ({ ...item, _checked: false })));

// 체크박스 컬럼 정의
const checkboxField = { key: 'selected', label: '', sortable: false }

// title 에 따라 최종 fields 결정
const computedFields = computed(() => {
    if (props.title !== 'user') {
        return [checkboxField, ...props.field]
    }
    return props.field
});

// 전체 선택 여부
const allSelected = ref(false)

// 전체 선택/해제
function toggleSelectAll() {
    allSelected.value = !allSelected.value
    props.data.forEach(item => (item._checked = allSelected.value))
}

// 개별 선택 변화 감지 → 헤더 체크박스 상태 갱신
watch(
    () => localItems.value.map(item => item._checked),
    (checkedValues) => {
        allSelected.value = checkedValues.every(v => v === true)
    }
)
</script>

<template>
    <BTable :items="props.data" :fields="computedFields">
        <!-- 체크박스 컬럼 헤더 (전체 선택) -->
        <template #head(selected)>
            <input type="checkbox" v-model="allSelected" @change="toggleSelectAll" />
        </template>

        <!-- 체크박스 셀 -->
        <template #cell(selected)="row">
            <input type="checkbox" v-model="row.item._checked" />
        </template>

        <!-- 가입 유형 컬럼 커스텀 -->
        <template #cell(providerType)="row">
            <span v-if="row.item.providerType === '01'" class="badge bg-dark">일반</span>
            <span v-else-if="row.item.providerType === '02'" class="badge bg-kakao">카카오</span>
            <span v-else-if="row.item.providerType === '03'" class="badge bg-naver">네이버</span>
        </template>

        <!-- 회원 분류 컬럼 커스텀 -->
        <template #cell(role)="row">
            <span v-if="row.item.role === '01'" class="badge bg-success">고객</span>
            <span v-else-if="row.item.role === '02'" class="badge bg-owner">사장</span>
            <span v-else-if="row.item.role === '03'" class="badge bg-primary">배달원</span>
        </template>
    </BTable>
</template>

<style scoped>
/* 가입 유형 스타일 */
.bg-kakao {
    background-color: #F9E000 !important;
    color: black;
}

.bg-naver {
    background-color: #00B074;
    color: white;
}

/* 회원 분류 스타일 */
.bg-owner {
    background-color: #0100FF;
    color: white;
}

/* 가게 활성화 여부 스타일 */

/* 가게 영업 여부 스타일 */
</style>