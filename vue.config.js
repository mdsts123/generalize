const path=require('path');
console.log(path.resolve(__dirname,'./src'));

module.exports={
  baseUrl:'./',
  configureWebpack:{
    resolve:{
      alias:{
        "@":path.resolve(__dirname,'./src')
      }
    }
  }
}