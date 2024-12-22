const container = document.querySelector('.container');
const refreshBtn = document.querySelector('.refresh-btn');

const maxColorBox = 12;
const generatePalette = () => {
    container.innerHTML = "";
    for (let i = 0; i < maxColorBox; i++) {
        // Generate Random Color
        let randomColor = Math.floor(Math.random() * 0xffffff).toString(16);
        randomColor = `#${randomColor.padStart(6, '0')}`;
    
        // creating a new 'li' element and inserting it to the container
        const color = document.createElement('li');
        color.classList.add('color');
        color.innerHTML = `<div class="rect-box" style='background-color: ${randomColor}'>
        </div>
        <span class="color-value">${randomColor}</span>`;

        // Adding Click Event to current 'li' element to copy the color
        color.addEventListener('click', () => copyColor(color, randomColor));
        container.appendChild(color);
    }
}
generatePalette();
 const copyColor = (item, hexVal) =>{
    const colorElement = item.querySelector('.color-value');
    navigator.clipboard.writeText(hexVal).then(() => {
        colorElement.innerHTML = 'Copied';
        setTimeout(() => colorElement.innerHTML = hexVal, 1000), 1000
    }).catch(() => alert('Failed'));
 }  



refreshBtn.addEventListener('click', generatePalette);