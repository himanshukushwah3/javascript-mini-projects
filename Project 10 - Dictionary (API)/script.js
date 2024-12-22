const input = document.getElementById('search-inp');
const title = document.getElementById('word');
const meaning = document.getElementById('meaning');
const result = document.getElementById('result');
const btn = document.getElementById('btn');
const sound = document.getElementById('sound');
const title2 = document.querySelector(".word");
const meaning2 = document.querySelector('.meaning');

const fetchApi = async (word) => {
    try {
        const data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then(res => res.json());
        if(data.title){
            title2.innerHTML = "Word Does not Exist";
            meaning2.style.display = 'none';
        }else{
            result.style.display = 'block';
            title.innerText = data[0].word;
            meaning.innerText = data[0].meanings[0].definitions[0].definition;

        // for Audio

        btn.addEventListener('click', () => {
            for(let i = 0; i <= data[0].phonetics.length; i++){
                if(data[0].phonetics[i].audio != ''){
                    sound.setAttribute("src", `${data[0].phonetics[i].audio}`)
                    sound.play()
                }else{
                    continue;
                }
            }
        })
        }
    } catch (error) {
        console.log(error);
    }
    
}

input.addEventListener('keyup', (e) => {
    if(e.target.value && e.key === 'Enter'){
        fetchApi(e.target.value)
    }
})




// var showDetails = () => {
//     let word = document.getElementById('item');
//     console.log(word.value);
//     fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word.value}`)
//     .then(res => res.json())
//     .then(data => {
//         console.log(`${data[0].phonetics.length}`)
//         console.log(data)
        
// }

// function playSound(){
//     for(let i = 0; i < data[0].phonetics.length; i++){
//         if(data[0].phonetics[i].audio != ''){
            
//         }else{
//             continue;
//         }
//     }
//     sound.play();
// }