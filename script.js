let play = document.querySelector('#play')
let audio = document.querySelector('#audio1')
let next = document.querySelector('#next')
let voltar = document.querySelector('#voltar')
let tocando = 0
let faixa = 1

function tocar() {
    audio.play()
}

function pausar() {
    audio.pause()
}

function playpause() {
    if(tocando == 0) {
        play.classList.remove('bi-play-fill')
        play.classList.add('bi-pause-circle-fill')
        tocar()
        tocando = 1
    } else if(tocando == 1) {
        play.classList.add('bi-play-fill')
        play.classList.remove('bi-pause-circle-fill')
        pausar()
        tocando = 0 
    }
}

function passar() {
    faixa++
    if(faixa == 2) {
        audio.src = 'books/dom-casmurro/2.mp3'
        tocar()
    } else if(faixa == 3) {
        audio.src = 'books/dom-casmurro/3.mp3'
        tocar()
    } else if(faixa == 4) {
        audio.src = 'books/dom-casmurro/4.mp3'
        tocar()
    } else if(faixa == 5) {
        audio.src = 'books/dom-casmurro/5.mp3'
        tocar()
    } else if(faixa == 6) {
        audio.src = 'books/dom-casmurro/6.mp3'
        tocar()
    } else if(faixa == 7) {
        audio.src = 'books/dom-casmurro/7.mp3'
        tocar()
    } else if(faixa == 8) {
        audio.src = 'books/dom-casmurro/8.mp3'
        tocar()
    } else if(faixa == 9) {
        audio.src = 'books/dom-casmurro/9.mp3'
        tocar()
    } else if(faixa == 10) {
        audio.src = 'books/dom-casmurro/10.mp3'
        tocar()
    } else if(faixa > 10) {
        faixa = 1
        tocar()
    }
}

function volte() {
    faixa--
    if(faixa == 2) {
        audio.src = 'books/dom-casmurro/2.mp3'
        tocar()
    } else if(faixa == 3) {
        audio.src = 'books/dom-casmurro/3.mp3'
        tocar()
    } else if(faixa == 4) {
        audio.src = 'books/dom-casmurro/4.mp3'
        tocar()
    } else if(faixa == 5) {
        audio.src = 'books/dom-casmurro/5.mp3'
        tocar()
    } else if(faixa == 6) {
        audio.src = 'books/dom-casmurro/6.mp3'
        tocar()
    } else if(faixa == 7) {
        audio.src = 'books/dom-casmurro/7.mp3'
        tocar()
    } else if(faixa == 8) {
        audio.src = 'books/dom-casmurro/8.mp3'
        tocar()
    } else if(faixa == 9) {
        audio.src = 'books/dom-casmurro/9.mp3'
        tocar()
    } else if(faixa == 10) {
        audio.src = 'books/dom-casmurro/10.mp3'
        tocar()
    } else if(faixa > 10) {
        faixa = 1
        tocar()
    }
}

play.addEventListener('click' , playpause)
next.addEventListener('click' , passar)
voltar.addEventListener('click' , volte)
