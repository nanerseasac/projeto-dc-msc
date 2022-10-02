const btnPlay = document.querySelector(".btnPlay");
const btnOps = document.querySelector(".btnOps");
const modal = document.querySelector(".seletor")

const musica01 = new Audio('./msc/musica01.mp3');
const musica02= new Audio('./msc/musica02.mp3');
const musica03= new Audio('./msc/musica03.mp3');
const musica04= new Audio('./msc/musica04.mp3');
const musica05= new Audio('./msc/musica05.mp3');

let estado = false;
let musica = musica01;

function playPause(musica) {
    if(estado === false){
        estado = true
        btnPlay.src = './fotoo/pause.png'
        return musica.play()
    }
    return musicaPausar()
}
function trocarMusica(musicaDentro) {
    modal.classList.add('none');
    musica = musicaDentro;
    playPause(musica)
}
function abrirModal() {
    musicaPausar()
    if(modal.classList.contains('none')){
        return modal.classList.remove('none')
    }
    modal.classList.add('none')
}

function musicaPausar(){
    musica.pause()
    musica.currentTime = 0;
    estado = false;
    btnPlay.src = './fotoo/play-icon.png'
}

function barraMusical(){
    musica.volume = 0.1
}