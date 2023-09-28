Soru.prototype.cevabiKontrolEt = function(cevap){
    return cevap===this.dogruCevap
}

function Soru(soruMetni, cevapSecenekleri, dogruCevap){
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

let sorular = [
    new Soru("Hangisi a paket yönetimi uygulamasıdır?",{a: "Node.js",b: "Typescript",c: "Npm",d: "Nuget"},"a"),
    new Soru("Hangisi b paket yönetimi uygulamasıdır?",{a: "Node.js",b: "Typescript",c: "Npm",d: "Nuget"},"b"),
    new Soru("Hangisi c paket yönetimi uygulamasıdır?",{a: "Node.js",b: "Typescript",c: "Npm",d: "Nuget"},"c"),
    new Soru("Hangisi d paket yönetimi uygulamasıdır?",{a: "Node.js",b: "Typescript",c: "Npm",d: "Nuget"},"d")
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
    document.querySelector('.next_btn').classList.remove('show');
})

document.querySelector('.next_btn').addEventListener('click',function(){
    if(quiz.sorular.length != quiz.soruIndex + 1){
        quiz.soruIndex += 1;
        soruGoster(quiz.soruGetir())
        document.querySelector('.next_btn').classList.remove('show');
    }else{
        console.log('quiz bitti')
    }
})

const option_list = document.querySelector('.option_list');

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
    option_list.innerHTML = options;         
    
    const option = option_list.querySelectorAll('.option');
    for(let opt of option){
        opt.setAttribute('onclick','optionSelected(this)')
    }
}

const correctIcon = '<div class="icon"><i class="fa fa-check"></i></div>';
const incorrectIcon = '<div class="icon"><i class="fa fa-times"></i></div>';

function optionSelected(option){
    let cevap = option.querySelector('span b').textContent; /* hangi cevaba tıkladıysam onun şık bilgisi gelir */
    
    let soru = quiz.soruGetir();
    if(soru.cevabiKontrolEt(cevap)){
        option.classList.add('correct');
        option.insertAdjacentHTML("beforeend",correctIcon)
    }else{
        option.classList.add('incorrect');
        option.insertAdjacentHTML("beforeend",incorrectIcon)
    }

    for(let i=0;i<option_list.children.length;i++){
        option_list.children[i].classList.add('disabled');
    }

    document.querySelector('.next_btn').classList.add('show');
}