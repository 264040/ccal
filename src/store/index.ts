import { defineStore } from 'pinia'


//  `defineStore()` 的返回值的命名是自由的
// 但最好含有 store 的名字，且以 `use` 开头，以 `Store` 结尾。
// (比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。
export const useIndextore = defineStore('navgate', {
    state: () => ({
        index: 0,
        scrollTopAcer: 0,
        pageClientHeight: 0, //屏幕高度
    }),
    getters: {
        indexkey: state => state.index,
        GetscrollTopAcer: state => state.scrollTopAcer,
        GetPageClientHeight: state => state.pageClientHeight,
        GetScrollTopAcer: state => state.scrollTopAcer
    },
    actions: {
        setindexkey(i: number) {
            this.index = i;
        },
        setScrollTopAcer(i: number) {
            this.scrollTopAcer = i;
        },
        setPageClientHeight(i:number){
            this.pageClientHeight = i
        }
    },
    persist: true
})