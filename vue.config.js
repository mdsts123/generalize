const path=require('path');
console.log(path.resolve(__dirname,'./src'));

module.exports={
  configureWebpack:{
    resolve:{
      alias:{
        "@":path.resolve(__dirname,'./src')
      }
    }
  }
}