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

///// Rotations buttons /////


const firstRotationBtn = document.querySelector('.first_btn-a');
const SecondRotationBtn = document.querySelector('.second_btn-a');
const thirdRotationBtn = document.querySelector('.third_btn-a');
const fourthRotationBtn = document.querySelector('.fourth_btn-a');


firstRotationBtn.addEventListener('click', ()=> {
    firstRotationBtn.classList.toggle('first_btn__active');
});
SecondRotationBtn.addEventListener('click', ()=> {
    SecondRotationBtn.classList.toggle('second_btn__active');
});
thirdRotationBtn.addEventListener('click', ()=> {
    thirdRotationBtn.classList.toggle('third_btn__active');
});
fourthRotationBtn.addEventListener('click', ()=> {
    fourthRotationBtn.classList.toggle('fourth_btn__active');
});


/////////////// Progress bar ////////////

// const porgressPrecent = document.querySelector('#porgress_precent');
// const progressBar = document.querySelector('.svg_circle-item__bar');



// porgressPrecent.addEventListener('input', () => {

// })

// const numToSquare = num => {
//     num = String(num);
//     return num.split('').map(item => item *= item).join('');
// }

// console.log(numToSquare(9119));