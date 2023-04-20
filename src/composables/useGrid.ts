import {defineStore} from "pinia";

// 추가할 이벤트목록
export const useGridStore = (data: object[], columns: object[], eventOption: Partial<EventOption>) => defineStore('gridData', () => {
    return {
        data,
        columns,
    }
});

type EventOption = {
    loaded: () => void,
    edit: () => void,
    selectChange: () => void,
}

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }
//
//   return { count, doubleCount, increment }
// })
