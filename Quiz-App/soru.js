Soru.prototype.cevabiKontrolEt = function(cevap){
    return cevap===this.dogruCevap
}

function Soru(soruMetni, cevapSecenekleri, dogruCevap){
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

let sorular = [
    new Soru("Hangisi javascript paket yönetimi uygulamasıdır?",{a: "Node.js",b: "Typescript",c: "Npm",d: "Nuget"},"c"),
    new Soru("Hangisi frontend kapsamında değerlendirilmez?",{a: "Css",b: "Html",c: "Javascript",d: "Sql"},"d"),
    new Soru("Hangisi backend kapsamında değerlendirilir?",{a: "Node.js",b: "Typescript",c: "Angular",d: "React"},"a"),
    new Soru("Hangisi javascript programlama dilinin kullanmaz?",{a: "React",b: "Angular",c: "Vuejs",d: "Asp.Net"},"d")
]