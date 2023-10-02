const container = document.querySelector('.container');
const image = document.querySelector('#music-image');
const title = document.querySelector('#music-details .title');
const singer = document.querySelector('#music-details .singer');
const prev = document.querySelector('#controls #prev');
const play = document.querySelector('#controls #play');
const next = document.querySelector('#controls #next');


const player = new MusicPlayer(musicList);

window.addEventListener("load", () => {
    let musicName = player.getMusic()
    displayMusic(musicName)
})

function displayMusic(musicName){
    image.src = "img/" + musicName.img;
    title.innerText = musicName.getName();
    singer.innerText = musicName.singer;
    audio.src ="mp3/" + musicName.file;
}

play.addEventListener('click',() => {
    audio.play();
})