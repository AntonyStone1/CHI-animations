const firstBtn = document.querySelector('.delete-first');
const secondBtn = document.querySelector('.delete-second');
const noBtn = document.querySelector('.second_buttons-no');
const yesBtn = document.querySelector('.second_buttons-yes');

firstBtn.addEventListener('click', ()=> {
    firstBtn.classList.add('delete-first__active')
    secondBtn.classList.add('delete-second__active')
    noBtn.classList.add('second_buttons__active')
    yesBtn.classList.add('second_buttons__active')
})

noBtn.addEventListener('click', ()=> {
    secondBtn.classList.remove('delete-second__active')
    firstBtn.classList.remove('delete-first__active')
    noBtn.classList.remove('second_buttons__active')
    yesBtn.classList.remove('second_buttons__active')
})
yesBtn.addEventListener('click', ()=> {
    secondBtn.classList.remove('delete-second__active')
    firstBtn.classList.remove('delete-first__active')
    noBtn.classList.remove('second_buttons__active')
    yesBtn.classList.remove('second_buttons__active')
})