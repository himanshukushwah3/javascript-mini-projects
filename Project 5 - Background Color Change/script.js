let back = document.querySelector('.container')
let hex = document.querySelector('#hex-color');
const changeColor = () => {
    back.style.background = "";
    let randomColor = Math.floor(Math.random() * 0xffffff).toString(16);
    randomColor = `#${randomColor.padStart(6, '0')}`;
    console.log(randomColor);
    back.style.background = randomColor;
    hex.innerHTML = randomColor    
}