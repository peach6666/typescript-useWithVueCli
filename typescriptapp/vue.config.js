module.exports={
    //打包後檔名不要用雜湊值
    filenameHashing: false,
    //在本地建立虛擬的後端伺服器，解決開發時的Cors問題
    devServer:{
        proxy:{
            //把/api直接定義給其他檔案call api用
            '/api':{
                target:'http://localhost:4600',
                pathRewrite:{'^/api':''},
                changeOrigin:true,
                ws:true
            }
        }
    }
}