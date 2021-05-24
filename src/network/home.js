//这里专门放的是home首页的相关请求，不会直接在首页的组建中去调用request.js文件，那样代码会越来越多

//引入
import {request} from './request'

export function getHomeMultidata(){     //直接在home首页接收这个文件，去使用该方法
    return request({
        url: '/home/multidata',
    })
}