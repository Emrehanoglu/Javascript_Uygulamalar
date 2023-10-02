const container = document.querySelector('.container')
const image = document.querySelector('#music-image')
const title = document.querySelector('#music-details .title')
const singer = document.querySelector('#music-details .singer')
const prev = document.querySelector('#controls #prev')
const play = document.querySelector('#controls #play')
const next = document.querySelector('#controls #next')
const duration = document.querySelector('#duration')
const currentTime = document.querySelector('#current-time')
const progressBar = document.querySelector('#progress-bar')
const volume = document.querySelector('#volume')
const volumeBar = document.querySelector('#volume-bar')


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
    const isMusicPlay = container.classList.contains('playing');
    isMusicPlay ? pauseMusic() : playMusic()
})

function pauseMusic(){
    container.classList.remove('playing')
    play.classList = 'fa-solid fa-play';
    audio.pause();
}
function playMusic(){
    container.classList.add('playing')
    play.classList = 'fa-solid fa-pause';
    audio.play();
}
/* bir önceki müziğe geçiş ve çalma işlemi */
prev.addEventListener('click', () => {
    prevMusic()
})
function prevMusic(){
    player.previous()
    let music = player.getMusic()
    displayMusic(music)
    playMusic()
}
/* bir sonraki müziğe geçiş ve çalma işlemi */
next.addEventListener('click', () => {
    nextMusic()
})
function nextMusic(){
    player.next();
    let music = player.getMusic()
    displayMusic(music)
    playMusic()
}

audio.addEventListener('loadedmetadata', () => { /* loadedmetadata: müziğe bağlanıldığını kontrol eder, müzik çalıyor mu kontrol eder */
    //console.log(audio.duration) /* ilgili müzik totalde kaç saniye ona baktım. */
    duration.textContent = calculateTime(audio.duration) 
    progressBar.max = audio.duration
})

function calculateTime(toplamSaniye){
    let dakika = Math.floor(toplamSaniye / 60)
    let saniye = Math.floor(toplamSaniye % 60)
    let güncellenenSaniye = saniye < 10 ? `0${saniye}` : `${saniye}`
    sonuc = `${dakika}:${güncellenenSaniye}`
    return sonuc
}

audio.addEventListener('timeupdate',() => {
    progressBar.value = Math.floor(audio.currentTime)
    currentTime.textContent = calculateTime(progressBar.value)
})

progressBar.addEventListener('input', () => {
    currentTime.innerText = calculateTime(progressBar.value) /* prgressBar üzerinde tıkladığım noktanın dakida ve saniye bilgisini currenTime elementime yazdım */
    audio.currentTime = progressBar.value
})

/* volume control */
let muteState = 'muted'
volume.addEventListener('click', () => {
    if(muteState === 'unmute'){
        audio.muted = true
        muteState = 'muted'
        volume.classList = 'fa-solid fa-volume-xmark' /* ikonun üstünü çizer, ses kısıldı */
        volumeBar.value = 0
    }else{
        audio.muted = false
        muteState = 'unmute'
        volume.classList = 'fa-solid fa-volume-high' /* ikonun açar, ses açıldı */
        volumeBar.value = 100
    }
})

volumeBar.addEventListener('input',(e) => {
    const volumeBarValue = e.target.value /* volumeBar üzerinde hangi noktaya tıklarsak oranın sayısal değerini döndürür */
    audio.volume = volumeBarValue / 100 /* volume bilgisi 0 ile 1 arası değerleri tanır bu yüzden 100 e böldüm */
    if(volumeBarValue == 0){
        audio.muted = true
        muteState = 'muted'
        volume.classList = 'fa-solid fa-volume-xmark' /* ikonun üstünü çizer, ses kısıldı */
    }else{
        audio.muted = false            
        muteState = 'unmute'
        volume.classList = 'fa-solid fa-volume-high' /* ikonun açar, ses açıldı */
    }
})