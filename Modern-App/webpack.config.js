const path = require('path')

module.exports = {
    entry : './src/js/index.js', //komutlarmı yazacağım, giriş dosyam,
    output : {
        path: path.resolve(__dirname,'dist'), //webpack dosyasının bulunduğu klasörü ifade eder,
        filename : 'js/bundle.js' //oluşacak dosyanın adı, bundle işlemi paketleme işlemi demek, bizde burada paketleme yaptığımız için bundle.js dedik
    },
    mode: 'development' //geliştirme aşamasında olduğumu, mode ile belirttim
}