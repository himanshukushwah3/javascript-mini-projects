(() => {
    let screen = document.querySelector('.cal-screen');
    let buttons = document.querySelectorAll('.btn');
    let equal = document.querySelector('.btn-equal'); 
    let clear = document.querySelector('.btn-clear');

    // ? === For Getting the Values ===
    buttons.forEach((button) => {
        button.addEventListener('click', (event) => {
            let value = event.target.value;
            screen.value += value;
        })
    })

    // ? === Adding and Clear ===

    equal.addEventListener('click', (event) => {
        if(screen.value === ''){
            screen.value = '';
        }else{
            let answer = eval(screen.value);
            screen.value = answer
        }
    })

    clear.addEventListener('click', (e) => {
        screen.value = "";
    })
})();