<script setup>
import StatsCard from '@/components/StatsCard.vue';
import DashboardCard from '@/components/DashboardCard.vue';

// 가게 관리, 고객 문의 테이블에 들어갈 값 전달을 위해 임의로 만든 객체
const stores = {
    name: '가게 관리',
    title: ['상호명', '소재지', '개업연월일', '상태'],
    data: [
        {
            0: '재원이 두마리 치킨',
            1: '부산광역시 기장군 철마면 철마천로 190',
            2: '2025-08-27',
            3: 0
        },
        {
            0: '숙다방',
            1: '경상북도 구미시 구미대로24길 4',
            2: '2025-08-25',
            3: 0
        },
        {
            0: '홍플러스',
            1: '경기도 화성시 팔탄면 버들로 1337-8',
            2: '2025-08-24',
            3: 1
        }
    ]
};
const contacts = {
    name: '고객 문의',
    title: ['글쓴이', '제목', '작성일', '답글'],
    data: [
        {
            0: '김재원',
            1: '가게 등록했는데 활성화해주세요',
            2: '2025-08-27',
            3: 1
        },
        {
            0: '이은숙',
            1: '메뉴 등록이 안돼요ㅠ',
            2: '2025-08-26',
            3: 0
        },
        {
            0: '홍상회',
            1: '고객이 주문을 취소했는데 결제 취소할 수 있나요?',
            2: '2025-08-25',
            3: 0
        },
    ]
};

// 차트에 들어갈 값 전달을 위해 임의로 만든 객체
</script>

<template>
    <div class="container">
        <div class="row">
            <!-- 숫자 통계 -->
            <div class="stats col-12">
                <div class="row">
                    <div class="stats-card-area mb-3">
                        <StatsCard title="이번 달 가입자 수" :count="1000" />
                    </div>
                    <div class="stats-card-area mb-3">
                        <StatsCard title="이번 달 가게 등록 수" :count="1187" />
                    </div>
                    <div class="stats-card-area mb-3">
                        <StatsCard title="이번 달 고객 문의 수" :count="4222" />
                    </div>
                    <div class="stats-card-area mb-3">
                        <StatsCard title="이번 달 ㅁㄴㅇㄹ" :count="876" />
                    </div>
                </div>
            </div>

            <!-- 차트 통계 -->
            <div class="chart col-12">
                <div class="row">
                    <div class="col-12 mb-3">
                        <div class="card" style="height: 375px;">

                        </div>
                    </div>
                </div>
            </div>

            <!-- 가게 관리, 고객 문의 -->
            <div class="board col-12">
                <div class="row">
                    <!-- 가게 관리 -->
                    <div class="col-12 col-xl-6 mb-3">
                        <DashboardCard title="가게 관리" :table="stores" />
                    </div>

                    <!-- 고객 문의 -->
                    <div class="col-12 col-xl-6">
                        <DashboardCard title="고객 문의" :table="contacts" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
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
</style>