import request from './request'

// 推荐页数据
const getArticles =  () =>  request.get('/json/kp.json');



export {
    getArticles
}