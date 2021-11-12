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

const porgressPrecent = document.querySelector('#percent');
const progressBar = document.querySelector('#bar');
const cont = document.querySelector('#cont');

const checkAndchangeRange = () => {
    let value = porgressPrecent.value;
    if (isNaN(value)) {
        value = 100;
    } else {
        let r = progressBar.getAttribute('r')
        let c = Math.PI * (r * 2);
        if (value < 0)  value = 0;
        if (value > 100)  value = 100;

        let pct = ((100-value)/100)*c;
        progressBar.style.strokeDashoffset = pct;
        cont.setAttribute('data-pct', value)
    }
}


porgressPrecent.addEventListener('change', () => {
    checkAndchangeRange();
})


/////////// Array methods //////////////



let array = [1,2,3,4,5,4,-7,-12,-45,3,2,3,4,5,9,8,10,5,5,5]
// console.log(array.map((item) => item === 3));;

Array.prototype.customMap = function(callback, thisArgs) {
    if (this == null) {
        throw new Error("Cant iterate over undefined or null");
    }

    let O = Object(this);    

    if (typeof callback !== "function") {
      throw new Error("Callback is not a function");
    }

    const result = [];
    for (let i = 0; i < O.length; i++) {
        if (i in O) {
            result[i] = callback.call(thisArgs, this[i], i, this)
        }
    }  
    return result;
}
// array.customMap((item, index, arr) => console.log(item, index, arr));

Array.prototype.customForEach = function(callback, thisArgs) {
    if (this == null) {
        throw new Error("Cant iterate over undefined or null");
    }
    let O = Object(this);

    if (typeof callback !== "function") {
      throw new Error("Callback is not a function");
    }

    for (let i = 0; i < O.length; i++) {
        if (i in O) {
            result[i] = callback.call(thisArgs, this[i], i, this)
        }
    }
}

// console.log(array.forEach(item => console.log(item)));
// console.log(array.customForEach(item => console.log(item)));



function isPrime(num) {
    if (num <= 1) return false;
    else if (num === 2) return true;
    else {
      for (let i = 2; i < num; i++) if (num % i === 0) return false;
      return true;
    }
  }
Array.prototype.customFilter = function(callback, thisArgs) {
    if (this == null) {
        throw new Error("Cant iterate over undefined or null");
    }
    let O = Object(this);

    if (typeof callback !== "function") {
      throw new Error("Callback is not a function");
    }

    const result = [];
    for (let i = 0; i < O.length; i++) {
        if (i in O) {
            if (callback.call(thisArgs, this[i], i, this)) {
                result.push(this[i])
            }
        } 
    }
    return result;
}

// console.log(array.filter(isPrime));
// console.log(array.customFilter(isPrime));


Array.prototype.customReduce = function(callback, initialValue) {
    if (!initialValue && this.length === 0) {
        throw new Error("Array is empty");
    } else if (initialValue && this.length === 0) {
        return initialValue;
    }
    let obj = Object(this);
    let acc = initialValue ? initialValue : undefined;
    for (let i = 0; i < this.length; i++) {
        if (i in obj) {
            if (acc !== undefined) {
                acc = callback(acc, this[i], i, this)
            } else {
                acc = this[i];
            }
        }
        
       
    }   
    return acc;
}

console.log([1,2,,,,,4].customReduce((acum, item) => acum += item));