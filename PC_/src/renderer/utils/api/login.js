/*
 * @Descripttion: 
 * @Author: mikasa
 * @Date: 2020-10-16 13:50:05
 */
import {getData,postData,UploadFile} from '../request'
//登录
export function login(data = {}){
    return getData('/login/cellphone',data)
}
//刷新登录
export function refreshlogin(data = {}){
    return getData('/login/refresh',data)
}