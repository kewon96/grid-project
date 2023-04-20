<template>
<!--  <KwGrid :grid="grid" />-->
    <KwGrid :list="list" :grid="grid"></KwGrid>
</template>

<script setup lang="ts">
import KwGrid from "@/components/KwGrid.vue";
import {useGridStore} from "@/composables/useGrid";
import list from '@/assets/data'
import {storeToRefs} from "pinia";

const columnsList = [
    {
        binding: 'empNo',
        header: '번호'
    },
    {
        binding: 'empNm',
        header: '이름'
    },
    {
        binding: 'regNo',
        header: '주민번호'
    },
    {
        binding: 'joinDt',
        header: '입사일'
    },
    {
        binding: 'addr',
        header: '주소'
    },
    {
        binding: 'emailId',
        header: '이메일'
    },
]
const grid = useGridStore(list, columnsList, {})();
const { data, columns } = storeToRefs(grid);

console.log(data, columns)

</script>
