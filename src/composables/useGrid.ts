import {defineStore} from "pinia";
import {ref} from "vue";

// 추가할 이벤트목록
type EventOption = {
    loaded: () => void,
    edit: () => void,
    selectChange: () => void,
}

export const useGridStore = (list: object[], columns: object[], eventOption: Partial<EventOption>): any => defineStore('gridData', () => {
    const itemsRef = ref<object[]>(list);
    const columnsRef = ref<object[]>(columns);

    return {
        itemsRef,
        columnsRef,
    }
})

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }
//
//   return { count, doubleCount, increment }
// })
