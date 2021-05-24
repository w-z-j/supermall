import axios from 'axios'

export function request(baseconfig){ 
    const instence = axios.create({
        baseURL: 'http://123.207.32.32:8000'
    }) 

    instence.interceptors.request.use(req => {
        // console.log(req);
        return req;
    }, err => {
        console.log(err);
    })
    instence.interceptors.response.use(res => {
        // console.log(res);
        return res;
    }, err => {
        console.log(err);
    })

    return instence(baseconfig)        
}
