require.config({
    baseUrl: './js',
    paths: {
        setData: './app/setData',
        script: './lib/script'
    }
})
require(['setData'])