<template>
  <div class="kw-grid">
    <KwRow v-for="data in list" :data="data"></KwRow>
  </div>
</template>

<script setup lang="ts">
import KwRow from "@/components/KwRow.vue";
import type {GridData} from "@/types";


/*********** Type & Interface **************/


/*********** Reactive Instance **************/

const props = defineProps<{
  list: Array<GridData>
}>()


/*********** Normal Instance **************/

/*********** Hook **************/


/*********** Function **************/


/*********** ETC... **************/


</script>

<style lang="scss" scoped>

</style>
