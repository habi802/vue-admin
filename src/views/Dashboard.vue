<script setup>
import StatsCard from '@/components/StatsCard.vue';
</script>

<template>
    <div class="container">
        <div class="row">
            <!-- 숫자 통계 -->
            <div class="stats col-12">
                <div class="row">
                    <div class="stats-card-area mb-3">
                        <StatsCard title="제목1" :count="1000" />
                    </div>
                    <div class="stats-card-area mb-3">
                        <StatsCard title="제목2" :count="1187" />
                    </div>
                    <div class="stats-card-area mb-3">
                        <StatsCard title="제목3" :count="4222" />
                    </div>
                    <div class="stats-card-area mb-3">
                        <StatsCard title="제목4" :count="876" />
                    </div>
                </div>
            </div>

            <!-- 차트 통계 -->
            <div class="chart col-12">
                <div class="row"></div>
            </div>

            <!-- 가게 관리, 고객 문의 -->
            <div class="board col-12">
                <div class="row">
                    <!-- 가게 관리 -->
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header">
                                가게 관리
                            </div>
                            <div class="card-body">
                                
                            </div>
                        </div>
                    </div>

                    <!-- 고객 문의 -->
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header">
                                고객 문의
                            </div>
                            <div class="card-body">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.stats-card-area {
    flex: 0 0 100%;
    max-width: 100%;

    @media (min-width: 480px) {
        flex: 0 0 50%;
        max-width: 50%;
    }

    @media (min-width: 1150px) {
        flex: 0 0 25%;
        max-width: 25%;
    }
}

.card {
    width: 200px;
}
</style>