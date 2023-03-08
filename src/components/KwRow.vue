<template>
  <div class="kw-row">
    <KwCell v-for="entryData in Object.entries(data)"></KwCell>
  </div>
</template>

<script setup lang="ts">
import KwCell from "@/components/KwCell.vue";
import type {GridData} from "@/types";

/*********** Type & Interface **************/


/*********** Normal Instance **************/


/*********** Reactive Instance **************/

const props = defineProps<{
  data: GridData
}>()

/*********** Hook **************/


/*********** Function **************/

console.log(Object.entries(props.data))

/*********** ETC... **************/


</script>

<style lang="scss" scoped>

</style>
