const amount = document.getElementById('amount');
const guest = document.getElementById('guest');
const quality = document.getElementById('quality');
const tipAmt = document.getElementById('tip-amt');

const calculate = () => {
    const tip = ((amount.value * quality.value) / (guest.value)).toFixed(2);
    amount.value = '';
    guest.value = '';
    quality.value = '';

    if(tip == 'NaN'){
        tipAmt.innerHTML = 'Tip $0 Each';
        showTipAmt()
    }else{
        tipAmt.innerHTML = `Tip $ ${tip} each`;
        showTipAmt()
    }
}

const showTipAmt = () => {
    let x = tipAmt;
    x.className = 'show';
    setTimeout(() => {
        x.className = x.className.replace('show', '')
    }, 3000);
}