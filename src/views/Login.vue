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
    <div class="d-flex justify-content-center align-items-center vh-100">
        <div class="container">
            <div class="text-center mb-3">
                <img class="logo" src="@/assets/logo.svg" />
            </div>
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
    </div>
</template>

<style scoped>
.logo {
    width: 150px;
    height: 150px;
}
</style>