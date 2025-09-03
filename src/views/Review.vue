<script setup>
import { reactive } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import DateTable from '@/components/DataTable.vue';

const formatDate = (date) => date.toLocaleDateString();

const today = new Date();
const lastWeek = new Date();
lastWeek.setDate(today.getDate() - 7);

const defaultForm = {
    startDate: lastWeek,
    endDate: today,
    storeName: '',
    customerName: '',
    comment: '',
    ownerComment: 0
}

const state = reactive({
    form: { ...defaultForm }
});

const resetForm = () => {
    Object.assign(state.form, defaultForm);
};

// 테이블에 들어갈 값 전달을 위해 임의로 만든 객체
const review = [
    {
        storeName: '민병관',
        customerName: 'user01',
        comment: '010-1204-4506',
        ownerComment: 0,
        createdAt: '2025-08-13',
        isHide: 0
    },
    {
        storeName: '민병관',
        customerName: 'user01',
        comment: '010-1204-4506',
        ownerComment: 0,
        createdAt: '2025-08-13',
        isHide: 1
    },
    {
        storeName: '민병관',
        customerName: 'user01',
        comment: '010-1204-4506',
        ownerComment: 1,
        createdAt: '2025-08-13',
        isHide: 1
    }
];
const fields = [
    { key: 'storeName', label: '상호명' },
    { key: 'customerName', label: '고객명' },
    { key: 'comment', label: '내용' },
    { key: 'ownerComment', label: '사장 답글' },
    { key: 'createdAt', label: '등록일' },
    { key: 'isHide', label: '상태' },
];
</script>

<template>
    <div class="container">
        <h5>리뷰 리스트</h5>
        <div class="row align-items-center">
            <div class="col-12">
                <div class="row align-items-center">
                    <div class="col-12 col-lg-6 col-xl-4 col-xxl-3 mb-2">
                        <label for="" class="form-label">등록일</label>
                        <div class="row align-items-center">
                            <div class="col">
                                <VueDatePicker :enable-time-picker="false" :format="formatDate" v-model="state.form.startDate" />
                            </div>
                            ~
                            <div class="col">
                                <VueDatePicker :enable-time-picker="false" :format="formatDate" v-model="state.form.endDate" />
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-xl-4 col-xxl-3 mb-2">
                        <label for="loginId" class="form-label">상호명</label>
                        <BFormInput type="text" id="loginId" v-model="state.form.storeName"></BFormInput>
                    </div>
                    <div class="col-6 col-xl-4 col-xxl-3 mb-2">
                        <label for="loginId" class="form-label">고객명</label>
                        <BFormInput type="text" id="loginId" v-model="state.form.customerName"></BFormInput>
                    </div>
                    <div class="col-6 col-xl-4 col-xxl-3 mb-2">
                        <label for="loginId" class="form-label">내용</label>
                        <BFormInput type="text" id="loginId" v-model="state.form.comment"></BFormInput>
                    </div>
                    <div class="col-6 col-xl-4 col-xxl-3 mb-2">
                        <label for="provider" class="form-label">사장 답글</label>
                        <BFormSelect id="provider" v-model="state.form.ownerComment">
                            <option value="0">미등록</option>
                            <option value="1">등록</option>
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
                </div>
            </div>
            <div class="col-12">
                <div class="row align-items-center">
                    <div class="col-12 col-lg-6">
                        <DateTable title="review" :data="review" :field="fields" />
                    </div>
                    <div class="col-12 col-lg-6">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>