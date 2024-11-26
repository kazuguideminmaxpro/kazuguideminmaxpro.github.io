const button = document.getElementById('musicButton');
const audio = document.getElementById('audio');
let isPlaying = false;

button.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        button.textContent = "Включить музыку";
    } else {
        audio.play();
        button.textContent = "Выключить музыку";
    }
    isPlaying = !isPlaying;
});