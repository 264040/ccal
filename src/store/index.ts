import { defineStore } from 'pinia'


//  `defineStore()` 的返回值的命名是自由的
// 但最好含有 store 的名字，且以 `use` 开头，以 `Store` 结尾。
// (比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。
export const useIndextore = defineStore('navgate', {
    state: () => ({
        index: 0,  // 底部导航栏需要
        scrollTopAcer: 0,
        pageClientHeight: 0, //屏幕高度
        isLoading: false,
        acerDark: false, // 设置主题
    }),
    getters: {
        indexkey: state => state.index,
        GetscrollTopAcer: state => state.scrollTopAcer,
        GetPageClientHeight: state => state.pageClientHeight,
        GetScrollTopAcer: state => state.scrollTopAcer,
        GetisLoading: state => state.isLoading,
        GetacerDark: stare => stare.acerDark
    },
    actions: {
        setindexkey(i: number) {
            this.index = i;
        },
        setScrollTopAcer(i: number) {
            this.scrollTopAcer = i;
        },
        setPageClientHeight(i: number) {
            this.pageClientHeight = i
        },
        setIsloading(i: boolean) {
            this.isLoading = i
        },
        setAcerDark(i: boolean) {
            this.acerDark = i
            document.body.classList.toggle('acerDark', i)
        },
        setAcerDarkDD() {
            this.setAcerDark(!this.acerDark)
        },
        setAcerDarkas() {

            // 默认跟随系统
            const prefersDark: boolean | any = window.matchMedia("(prefers-color-scheme: dark)");
            this.setAcerDark(prefersDark.matches)
            //监听系统主题变化 
            if (prefersDark.addEventListener) {
                prefersDark.addEventListener('change', (e: MediaQueryListEvent) => <void>this.setAcerDark(e.matches))
            } else if (prefersDark?.addListener) {
                prefersDark.addListene('change', (e: MediaQueryListEvent) => <void>this.setAcerDark(e.matches))
            }
        }
    },
    persist: true
})