<template>
  <div class="kw-row">
    <KwNum>{{index + 1}}</KwNum>
    <KwCell v-for="entryData in Object.entries(data)"></KwCell>
  </div>
</template>

<script setup lang="ts">
import KwNum from "@/components/KwNum.vue";
import KwCell from "@/components/KwCell.vue";
import type {GridData} from "@/types";

/*********** Type & Interface **************/


/*********** Normal Instance **************/


/*********** Reactive Instance **************/

const props = defineProps<{
  data: GridData
    index: number
}>()

/*********** Hook **************/


/*********** Function **************/

console.log(Object.entries(props.data))

/*********** ETC... **************/


</script>

<style lang="scss" scoped>

</style>
