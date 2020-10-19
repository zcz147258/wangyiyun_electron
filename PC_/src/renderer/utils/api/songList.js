/*
 * @Descripttion: 
 * @Author: mikasa
 * @Date: 2020-10-17 13:55:26
 */
import {getData,postData,UploadFile} from '../request'

//获取歌单
export function getSongList(data = {}){
    return getData('/user/playlist',data)
}