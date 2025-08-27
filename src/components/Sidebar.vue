<script setup>

</script>

<template>
    <!-- 햄버거 버튼 (작은 화면에서만) -->
    <div>
        <button class="btn btn-outline-dark d-md-none m-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebar" aria-controls="sidebar">☰</button>
    </div>

    <!-- 사이드바 -->
    <div class="offcanvas-md offcanvas-start d-flex flex-column vh-100 bg-light p-3" tabindex="-1" id="sidebar">
        <div class="mb-4">
            <img class="logo" src="@/assets/logo.svg" />
        </div>
        <ul class="nav nav-pills flex-column">
            <li class="nav-item"><a href="#" class="nav-link active">대시보드</a></li>
            <li class="nav-item"><a href="#" class="nav-link">통계</a></li>
            <li class="nav-item">
                <a class="nav-link d-flex justify-content-between align-items-center" data-bs-toggle="collapse" href="#submenu1" role="button" aria-expanded="false" aria-controls="submenu1">
                    메뉴 1
                </a>
                <ul class="collapse nav flex-column ms-3" id="submenu1">
                    <li class="nav-item"><a class="nav-link" href="#">하위 1-1</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">하위 1-2</a></li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<style scoped>
#sidebar {
    width: 220px;
}

.logo {
    width: 75px;
    height: 75px;
}
</style>