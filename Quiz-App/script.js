document.querySelector('.btn_start').addEventListener('click',function(){
    document.querySelector('.quiz-box').classList.add('active');
    startTimer(10);
    startTimerLine();
    soruGoster(quiz.soruGetir());
    soruSayisiniGoster(quiz.soruIndex+1,quiz.sorular.length)
    document.querySelector('.next_btn').classList.remove('show');
})

document.querySelector('.next_btn').addEventListener('click',function(){
    if(quiz.sorular.length != quiz.soruIndex + 1){
        quiz.soruIndex += 1;
        startTimer(10);
        startTimerLine();
        soruGoster(quiz.soruGetir())
        soruSayisiniGoster(quiz.soruIndex+1,quiz.sorular.length)
        document.querySelector('.next_btn').classList.remove('show');
    }else{
        clearInterval(counter);
        clearInterval(counterLine);
        console.log('quiz bitti')        
        document.querySelector('.quiz-box').classList.remove('active');
        document.querySelector('.score_box').classList.add('active');
        skoruGoster(quiz.sorular.length,quiz.dogruCevapSayisi)
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
    clearInterval(counter);
    clearInterval(counterLine);
    let cevap = option.querySelector('span b').textContent; /* hangi cevaba tıkladıysam onun şık bilgisi gelir */
    
    let soru = quiz.soruGetir();
    if(soru.cevabiKontrolEt(cevap)){
        quiz.dogruCevapSayisi += 1; 
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

function soruSayisiniGoster(soruSirasi, soruSayisi){
    let tag = `<span class="badge bg-warning">${soruSirasi}/${soruSayisi}</span>`
    document.querySelector('.quiz-box .question_index').innerHTML = tag;
}

function skoruGoster(soruSayisi, dogruCevapSayisi){
    let tag = `Toplam ${soruSayisi} sorudan ${dogruCevapSayisi} doğru cevap verdiniz.`;
    document.querySelector('.score_text').innerHTML = tag;
}

document.querySelector('.btn_quit').addEventListener('click',function(){
    window.location.reload();
})

document.querySelector('.btn_replay').addEventListener('click',function(){
    quiz.soruIndex = 0;
    quiz.dogruCevapSayisi = 0;

    document.querySelector('.quiz-box').classList.add('active');
    soruGoster(quiz.soruGetir());
    soruSayisiniGoster(quiz.soruIndex+1,quiz.sorular.length)
    document.querySelector('.next_btn').classList.remove('show');

    document.querySelector('.score_box').classList.remove('active');
})

const time_text = document.querySelector('.time_text');
const time_second = document.querySelector('.time_second');
let counter;
function startTimer(time){
    counter = setInterval(timer,1000); /* timer ismindeki fonksiyonu bulup 1 saniyede bir çalıştıracak. */

    function timer(){
        time_second.textContent = time;
        time--;

        if(time<0){
            clearInterval(counter);
            time_text.textContent = 'Süre Bitti';
            
            let cevap = quiz.soruGetir().dogruCevap;

            for(let option of option_list.children){
                if(option.querySelector('span b').textContent === cevap){
                    option.classList.add('correct');
                    option.insertAdjacentHTML("beforeend",correctIcon)
                }
                option.classList.add('disabled')
            }
            document.querySelector('.next_btn').classList.add('show');
        }
    }
}

let time_line = document.querySelector('.time-line')
let counterLine;
function startTimerLine(){
    let line_width = 0;
    counterLine = setInterval(timer,20);

    function timer(){
        line_width += 1;
        time_line.style.width = line_width + 'px';

        if(line_width == 550){
            clearInterval(counterLine);
        }
    }
}