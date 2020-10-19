/*
 * @Descripttion: 
 * @Author: mikasa
 * @Date: 2020-10-13 15:22:23
 */
import {getData,postData,UploadFile} from '../request'

// 登录
// 首页-发现
export function findIndex(data = {}){
    return getData('/homepage/block/page',data)
}
// 推荐 mv
export function personalizedMv(data = {}){
    return getData('/personalized/mv',data)
}
// 推荐歌单
export function personalizedList(data = {}){
    return getData('/personalized',data)
}
// 推荐电台
export function personalizedDjprogram(data = {}){
    return getData('/personalized/djprogram',data)
}
//推荐节目
export function personalizedRecommend(data = {}){
    return getData('/program/recommend',data)
}

//每日推荐
export function recommendsongs(data = {}){
    return getData('/recommend/songs',data)
}

//banner
export function recommendbanner(data = {}){
    return getData('/banner',data)
}

//获取

