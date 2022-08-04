const PROXY_CONFIG =  [
    {
        context: [ 
            "/api"
        ],
        target: "https://bootcamp-bni-backend.herokuapp.com" ,
        secure: false,
        changeOrigin: true
    
    }

]
module.exports = PROXY_CONFIG;
