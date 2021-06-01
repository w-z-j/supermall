modules.exports = {
    configureWbpack: {
        resolve: {      //文件路径
            alias: {
                '@': 'src',     //默认别名，这个已经有了
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'router': '@/router',
                'store': '@/store',
                'views': '@/views',
            }
        }
    }
}