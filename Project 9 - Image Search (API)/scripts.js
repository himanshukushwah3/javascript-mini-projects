const grid = document.getElementById('grid');
const input = document.getElementById('input')

const apiRequest = () => {
    const url = `https://api.unsplash.com/search/photos?per_page=12&query=${input.value}&client_id=WEJp9BZP-6_TmapncHTHqx6HL-Rt2-PZkH-J0-g0MJ8`;
    fetch(url).then(res => {
        if(!res.ok){
            throw Error(res.statusText)
        }
        return res.json()
    })
    .then(data => {
        console.log(data);
        console.log(data.results.length);
        console.log(data.results);
        loadImages(data);
    })
    .catch(err => console.log(err))
}

const loadImages = (data) => {
    console.log(data);
    removeImages()
    for(let i = 0; i < data.results.length; i++){
        let image = document.createElement('div');
        image.className = 'img';
        image.style.backgroundImage = `url(${data.results[i].urls.raw})`;
        image.addEventListener('dblclick', () => {
            window.open(data.results[i].links.download, '_blank')
        });
        grid.appendChild(image);
    }
}

const removeImages = () => {
    grid.innerHTML = "";
}

input.addEventListener('keydown', (event) => {
    if(event.key == 'Enter'){
        apiRequest();
    }
})