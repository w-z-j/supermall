modules.exports = {
    configureWbpack: {
        resolve: {      //文件路径
            alias: {
                '@': 'src',     //默认别名，这个已经有了
                'common': 'src/common',
                'components': 'src/components',
                'network': 'src/network',
                'router': 'src/router',
                'store': 'src/store',
                'views': '@/views',
            }
        }
    }
}