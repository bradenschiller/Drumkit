window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
    key.classList.add('active');
    setTimeout(() => {
        key.classList.remove('active')
    }, 100);
    // keeps non audio element from being called at all
    if(!audio) return;
    // rewinds element to start everytime its pressed to replay audio file
    audio.currentTime = 0; 
    audio.play();
})
    