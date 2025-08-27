<script setup>
import Sidebar from '@/components/Sidebar.vue';
</script>

<template>
    <div class="container-fluid p-0">
        <!-- 햄버거 버튼 (작은 화면에서만) -->
        <div class="border-bottom">
            <button class="hamburger btn d-md-none m-2" type="button"
                    data-bs-toggle="offcanvas" data-bs-target="#sidebar"
                    aria-controls="sidebar">
                ☰
            </button>
        </div>

        <div class="row flex-nowrap g-0">
            <!-- 사이드바 -->
            <div id="sidebar" class="offcanvas-md offcanvas-start d-md-flex bg-light" tabindex="-1">
                <Sidebar />
            </div>
            
            <!-- 메인 컨텐츠 -->
            <main class="col p-3 ms-0">
                <RouterView />
            </main>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.hamburger {
    border-color: #FF6666;
    color: #FF6666;

    &:hover {
        background-color: #FF6666;
        color: white;
    }
}

#sidebar {
    width: 275px;
}
</style>