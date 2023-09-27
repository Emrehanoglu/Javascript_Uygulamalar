Soru.prototype.cevabiKontrolEt = function(cevap){
    return cevap===this.dogruCevap
}

function Soru(soruMetni, cevapSecenekleri, dogruCevap){
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
    console.log(this);
}

let sorular = [
    new Soru("Hangisi a paket yönetimi uygulamasıdır?",{a: "Node.js",b: "Typescript",c: "Npm"},"a"),
    new Soru("Hangisi b paket yönetimi uygulamasıdır?",{a: "Node.js",b: "Typescript",c: "Npm"},"a"),
    new Soru("Hangisi c paket yönetimi uygulamasıdır?",{a: "Node.js",b: "Typescript",c: "Npm"},"a"),
    new Soru("Hangisi d paket yönetimi uygulamasıdır?",{a: "Node.js",b: "Typescript",c: "Npm"},"a")
]

for(let index of sorular){
    console.log(index.soruMetni)
}

// let soru1 = new Soru("Hangisi javacsript paket yönetimi uygulamasıdır?",{a: "Node.js",b: "Typescript",c: "Npm"},"a");

// console.log(soru1.soruMetni);
// console.log(soru1.cevabiKontrolEt("b"));