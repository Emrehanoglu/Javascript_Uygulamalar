var models = 
[
    {
        name : 'Bmw 116d',
        image : 'img/bmw.jpg',
        link : 'http://www.arabalar.com.tr/bmw/1-serisi/2023/116d-1-5-sport-line'

    },
    {
        name : 'Honda 1.4 ls',
        image : 'img/honda.jpg',
        link : 'http://www.arabalar.com.tr/honda/city/2011/1-4-ls'
    },
    {
        name : 'Jeep Limited AT',
        image : 'img/jeep.jpg',
        link : 'http://www.arabalar.com.tr/jeep/renegade/2023/1-3-limited-at'
    },
    {
        name : 'Mercedes Sedan-200-1-3-amg',
        image : 'img/mercedes.jpg',
        link : 'http://www.arabalar.com.tr/mercedes/a-serisi/2023/sedan-200-1-3-amg'
    },
    {
        name : 'Volvo 1-5-t2-plus',
        image : 'img/volvo.jpg',
        link : 'http://www.arabalar.com.tr/volvo/xc40/2023/1-5-t2-plus'
    }
]

var index = 1;
var slaytCount = models.length;
var interval;

var settings =
    {
        duration : "1000",
        random : true
    };

init(settings);

document.querySelector(".fa-arrow-left").addEventListener("click",function(){
    index--;
    ShowSlide(index);
});

document.querySelector(".fa-arrow-right").addEventListener("click",function(){
    index++;
    ShowSlide(index);
});

document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    })
})

document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
})

function init(settings){
    var prev;
    interval = setInterval(function(){
        if(settings.random){
            //random
            do{
                index = Math.floor(Math.random() * slaytCount);
            }while(prev == index)
            prev = index;
        }
        else{
            //artan
            if(slaytCount == index + 1){
                index = -1;
            }
            ShowSlide(index);
            index++;
        }
        ShowSlide(index);
    },settings.duration);
}

function ShowSlide(i){
    index = i;

    if(i < 0){
        index = slaytCount - 1;
    }
    else
        if(i > 5){
            index = 0;
    }

    document.querySelector(".card-img-top").setAttribute("src",models[index].image);
    document.querySelector(".card-title").textContent = models[index].name;
    document.querySelector(".card-link").setAttribute("href",models[index].link);
}


