Soru.prototype.cevabiKontrolEt = function(cevap){
    return cevap===this.dogruCevap
}

function Soru(soruMetni, cevapSecenekleri, dogruCevap){
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

let sorular = [
    new Soru("Hangisi a paket yönetimi uygulamasıdır?",{a: "Node.js",b: "Typescript",c: "Npm"},"a"),
    new Soru("Hangisi b paket yönetimi uygulamasıdır?",{a: "Node.js",b: "Typescript",c: "Npm"},"a"),
    new Soru("Hangisi c paket yönetimi uygulamasıdır?",{a: "Node.js",b: "Typescript",c: "Npm"},"a"),
    new Soru("Hangisi d paket yönetimi uygulamasıdır?",{a: "Node.js",b: "Typescript",c: "Npm"},"a")
]

function Quiz(sorular){
    this.sorular = sorular;
    this.soruIndex = 0;
}

Quiz.prototype.soruGetir = function(){
    return this.sorular[this.soruIndex];
}

const quiz = new Quiz(sorular);

document.querySelector('.btn_start').addEventListener('click',function(){
    document.querySelector('.quiz-box').classList.add('active');
    soruGoster(quiz.soruGetir());
})

function soruGoster(soru){
    let question = `<span>${soru.soruMetni}</span>`;
    let options = '';
    for(let cevap in soru.cevapSecenekleri){
        options +=
        `
            <div class="option">
                <span><b>${cevap}</b>: ${soru.cevapSecenekleri[cevap]}</span>
            </div>
        `;
    }
    document.querySelector(".question_text").innerHTML = question;
    document.querySelector('.option_list').innerHTML = options;
}

document.querySelector('.next_btn').addEventListener('click',function(){
    if(quiz.sorular.length != quiz.soruIndex + 1){
        quiz.soruIndex += 1;
        soruGoster(quiz.soruGetir())
    }else{
        console.log('quiz bitti')
    }
})