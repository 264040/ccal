
import { defineStore } from 'pinia'
import { getArticles } from "@/acerAPI";
//  `defineStore()` 的返回值的命名是自由的
// 但最好含有 store 的名字，且以 `use` 开头，以 `Store` 结尾。
// (比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。


interface TYPEposts {
    audien: string,
    author: string,
    avatarIcon: string,
    bgHue?: string | undefined,
    comments: number,
    content: string,
    forward: number,
    likes: number,
    time: string,
    title: string
}

export const useIndextore = defineStore('navgate', {
    state: () => ({
        index: 0 as number | unknown,  // 底部导航栏需要
        scrollTopAcer: 0,
        pageClientHeight: 0, //屏幕高度
        isLoading: true,
        acerDark: false, // 设置主题,
        scrollTAPLIST: 0, // 设置x坐标
        posts: [] as TYPEposts[], //首屏数据加载
        HomeChildPathName: '' as any, // 记录Home页的最后一个子路由路径
    }),
    getters: {
        Getindexkey: state => state.index,
        GetscrollTopAcer: state => state.scrollTopAcer,
        GetPageClientHeight: state => state.pageClientHeight,
        GetScrollTopAcer: state => state.scrollTopAcer,
        GetisLoading: state => state.isLoading,
        GetacerDark: stare => stare.acerDark,
        GetscrollTAPLIST: stare => stare.scrollTAPLIST,
        GetPosts: stare => stare.posts,
        GetchildPath: stare => stare.HomeChildPathName

    },
    actions: {
        setindexkey(i: number|unknown) {
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
        },
        setscrollTAPLIST(i: number) {
            this.scrollTAPLIST = i
        },
        async setPosts() {

            if (this.posts.length) return

            this.isLoading = true
            try {
                const dates: any = await getArticles()// 新数据  
                if (Array.isArray(dates.data)) {
                    this.posts = dates.data
                    this.isLoading = false
                } else {
                    this.isLoading = true

                }
            } catch (error) {
                this.isLoading = true
                console.error(error, 'getArticles');

            }

        },
        setChildPath(i: string | unknown) {
            this.HomeChildPathName = i
        }
    },
    persist: true
})