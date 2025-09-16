import axios from "axios"

const service = axios.create({
    baseURL: '/',
    timeout: 5000
})


service.interceptors.response.use(
    res => {
        if (Array.isArray(res.data)) {
            return res
        } 

        return '不是数组' as any
    },
    ree => {
        console.log(ree, '请求错误');
        Promise.reject(ree)
    }
)

export default service