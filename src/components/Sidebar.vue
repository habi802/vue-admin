<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
    <div id="sidebar" class="d-flex flex-column vh-100 bg-light p-3" tabindex="-1">
        <div class="text-center mb-4">
            <img class="logo" src="@/assets/logo.png" />
        </div>
        <ul class="nav nav-pills flex-column">
            <li class="nav-item"><a href="/" :class="`nav-link ${route.path === '/' ? 'active' : ''}`">대시보드</a></li>
            <li class="nav-item"><a href="/user" :class="`nav-link ${route.path === '/user' ? 'active' : ''}`">회원 관리</a></li>
            <li class="nav-item"><a href="#" class="nav-link">가게 관리</a></li>
            <li class="nav-item"><a href="/review" :class="`nav-link ${route.path === '/review' ? 'active' : ''}`">리뷰 관리</a></li>
            <li class="nav-item"><a href="#" class="nav-link">주문 관리</a></li>
            <li class="nav-item"><a href="#" class="nav-link">결제 관리</a></li>
            <li class="nav-item"><a href="#" class="nav-link">고객 문의</a></li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
#sidebar {
    width: 275px;
}

.logo {
    width: 165px;
    height: 75px;
}

.nav-link {
    color: #E65558;
}

.nav-link.active {
    background-color: #E65558;
    color: white;
}
</style>