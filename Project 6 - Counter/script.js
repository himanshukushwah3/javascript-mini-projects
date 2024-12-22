let counter = document.getElementById('count');
let count = 0

const increaseCount = () => {
    count += 1;
    counter.innerHTML = count
}
const resetCount = () => {
    count = 0
    counter.innerHTML = count;

}
const decreaseCount = () => {
    count -= 1;
    counter.innerHTML = count;

}