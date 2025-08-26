<script setup>
import { reactive } from 'vue';

const state = reactive({
    form: {
        loginId: '',
        loginPw: ''
    }
});

const submit = () => {

};
</script>

<template>
    <div class="container">
        <h2>로그인</h2>
        <form @sumbit.prevent="submit">
            <div class="mb-3">
                <label for="admin-login-id" class="form-label">아이디</label>
                <input type="text" id="admin-login-id" class="form-control" v-model="state.form.loginId">
            </div>
            <div class="mb-3">
                <label for="admin-login-pw" class="form-label">비밀번호</label>
                <input type="password" id="admin-login-pw" class="form-control" v-model="state.form.loginPw">
            </div>
            <button type="submit" class="btn btn-primary">로그인</button>
        </form>
    </div>
</template>

<style scoped>

</style>