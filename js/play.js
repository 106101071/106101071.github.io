let sound = document.getElementById('sound');
let a1 = document.getElementById('a1');
let a2 = document.getElementById('a2');
let waveRect = document.getElementsByClassName('recc');
let playing = false;

for(let i = 0; i < waveRect.length; i++){
    waveRect[i].style.webkitAnimationPlayState = 'paused';
}

sound.addEventListener('click', ()=>{
    audioAutoPlay = () => {
        a1.play();
        a2.pause();
        a2.currentTime = 0;
        for(let i = 0; i < waveRect.length; i++){
            waveRect[i].style.webkitAnimationPlayState = 'running';
        }
        playing = true;
    }
    if(playing){
        a1.pause();
        a1.currentTime = 0;
        a2.pause();
        a2.currentTime = 0;
        for(let i = 0; i < waveRect.length; i++){
            waveRect[i].style.webkitAnimationPlayState = 'paused';
        }
        playing = false;
    }
    else audioAutoPlay();
});
a1.addEventListener('ended', ()=>{
    a1.currentTime = 0;
    a2.play();
});
a2.addEventListener('ended', ()=>{
    a2.currentTime = 0;
    for(let i = 0; i < waveRect.length; i++){
        waveRect[i].style.webkitAnimationPlayState = 'paused';
    }
    playing = false;
})