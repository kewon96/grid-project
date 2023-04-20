<template>
  <div class="kw-grid">
<!--      <KwGridHeader />-->
    <KwRow v-for="(data, index) in list" :data="data" :index="index"></KwRow>
  </div>
</template>

<script setup lang="ts">
import KwRow from "@/components/KwRow.vue";
import type {GridData, KwGrid} from "@/types";


/*********** Type & Interface **************/


/*********** Reactive Instance **************/

const props = defineProps<{
    list: Array<GridData>,
    grid: KwGrid,
}>();


/*********** Normal Instance **************/

/*********** Hook **************/


/*********** Function **************/


/*********** ETC... **************/


</script>

<style lang="scss" scoped>

</style>
