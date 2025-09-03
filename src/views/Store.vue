<script setup>
import { reactive } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import DateTable from '@/components/DataTable.vue';

const formatDate = (date) => date.toLocaleDateString();

const today = new Date();
const lastWeek = new Date();
lastWeek.setDate(today.getDate() - 7);

const defaultForm = {
    StartCreatedAt: lastWeek,
    EndCreatedAt: today,
    StartOpenDate: lastWeek,
    EndOpenDate: today,
    name: '',
    ownerName: '',
    businessNumber: '',
    address: '',
    tel: '',
    isActive: 0,
}

const state = reactive({
    form: { ...defaultForm }
});

const resetForm = () => {
    Object.assign(state.form, defaultForm);
};

// 테이블에 들어갈 값 전달을 위해 임의로 만든 객체
const store = [
{
        name: '',
        ownerName: '',
        businessNumber: '',
        address: '',
        openDate: '',
        tel: '',
        isActive: 0,
        createdAt: ''
    },
    {
        name: '',
        ownerName: '',
        businessNumber: '',
        address: '',
        openDate: '',
        tel: '',
        isActive: 1,
        createdAt: ''
    },
    {
        name: '',
        ownerName: '',
        businessNumber: '',
        address: '',
        openDate: '',
        tel: '',
        isActive: 1,
        createdAt: ''
    },
];
const fields = [
    { key: 'name', label: '상호명' },
    { key: 'ownerName', label: '대표자명' },
    { key: 'businessNumber', label: '사업자 등록번호' },
    { key: 'address', label: '주소' },
    { key: 'openDate', label: '개업연월일' },
    { key: 'tel', label: '전화번호' },
    { key: 'isActive', label: '상태' },
    { key: 'createdAt', label: '가게 등록일' }
];
</script>

<template>
    <div class="container">
        <h5>가게 리스트</h5>
        <div class="row align-items-center">
            <div class="col-12 col-lg-6 col-xl-4 col-xxl-3 mb-2">
                <label for="" class="form-label">가게 등록일</label>
                <div class="row align-items-center">
                    <div class="col">
                        <VueDatePicker :enable-time-picker="false" :format="formatDate" v-model="state.form.StartCreatedAt" />
                    </div>
                    ~
                    <div class="col">
                        <VueDatePicker :enable-time-picker="false" :format="formatDate" v-model="state.form.EndCreatedAt" />
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-6 col-xl-4 col-xxl-3 mb-2">
                <label for="" class="form-label">개업연월일</label>
                <div class="row align-items-center">
                    <div class="col">
                        <VueDatePicker :enable-time-picker="false" :format="formatDate" v-model="state.form.StartOpenDate" />
                    </div>
                    ~
                    <div class="col">
                        <VueDatePicker :enable-time-picker="false" :format="formatDate" v-model="state.form.EndOpenDate" />
                    </div>
                </div>
            </div>
            <div class="col-6 col-xl-4 col-xxl-3 mb-2">
                <label for="name" class="form-label">상호명</label>
                <BFormInput type="text" id="name" v-model="state.form.name"></BFormInput>
            </div>
            <div class="col-6 col-xl-4 col-xxl-3 mb-2">
                <label for="ownerName" class="form-label">대표자명</label>
                <BFormInput type="text" id="ownerName" v-model="state.form.ownerName"></BFormInput>
            </div>
            <div class="col-6 col-xl-4 col-xxl-3 mb-2">
                <label for="businessNumber" class="form-label">사업자 등록번호</label>
                <BFormInput type="text" id="businessNumber" v-model="state.form.businessNumber"></BFormInput>
            </div>
            <div class="col-6 col-xl-4 col-xxl-3 mb-2">
                <label for="address" class="form-label">주소</label>
                <BFormInput type="text" id="address" v-model="state.form.address"></BFormInput>
            </div>
            <div class="col-6 col-xl-4 col-xxl-3 mb-2">
                <label for="tel" class="form-label">전화번호</label>
                <BFormInput type="text" id="tel" v-model="state.form.tel"></BFormInput>
            </div>
            <div class="col-6 col-xl-4 col-xxl-3 mb-2">
                <label for="isActive" class="form-label">상태</label>
                <BFormSelect id="isActive" v-model="state.form.isActive">
                    <option value="0">비활성화</option>
                    <option value="1">활성화</option>
                </BFormSelect>
            </div>
            <div class="col-6 col-xl-4 col-xxl-3 ms-auto mb-2">
                <label class="form-label d-block invisible">버튼</label>
                <div class="row">
                    <div class="col">
                        <button class="btn btn-secondary w-100" @click="resetForm">초기화</button>
                    </div>
                    <div class="col">
                        <button class="btn btn-primary w-100">검색</button>
                    </div>
                </div>
            </div>

            <div class="col-12">
                <DateTable title="store" :data="store" :field="fields" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>