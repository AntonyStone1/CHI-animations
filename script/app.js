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


/////////// Array methods //////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
///////////////////////////////////////  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//////////////////////////////////////    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/////////////////////////////////////      \\\\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////////////////        \\\\\\\\\\\\\\\\\\\\\\\\\\\
///////////////////////////////////          \\\\\\\\\\\\\\\\\\\\\\\\\\




let array = [1,2,3,4,5,4,-7,-12,-45,3,2,3,4,5,9,8,10,5,5,5]
// console.log(array.map((item) => item === 3));;

Array.prototype.customMap = function(callback, thisArgs) {
    
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
    let obj = Object(this);

    if (typeof callback !== "function") {
      throw new Error("Callback is not a function");
    }

    for (let i = 0; i < O.length; i++) {
        if (i in obj) {
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
    let obj = Object(this);

    if (typeof callback !== "function") {
      throw new Error("Callback is not a function");
    }

    const result = [];
    for (let i = 0; i < O.length; i++) {
        if (i in obj) {
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

// console.log([1,2,,,,,4].reduce((acum, item) => item ? acum.concat([item]) : accum, []));
// console.log([1,2,,,,,4].customReduce((acum, item) => item ? acum.concat([item]) : accum, []));

const randomNum = (num) => 2 + num;

Array.prototype.customAt = function(value) {
    value = Number(value);
    if (value !== undefined && !isNaN(value)) {
        return (value >= 0) ? this[value] : this[this.length + value];  
    } else {
        return this[0];
    }
        
}

// console.log([12,3,46,2,34].at(2));
// console.log([12,3,46,2,34].customAt(2));



Array.prototype.customConcat = function(thisArgs) {    
    const result = this;
    for (let j = 0; j < arguments.length; j++) {
        if (arguments[j].length !== undefined) { 
            for (let i = 0; i < arguments[j].length; i++) {
                result[result.length] = arguments[j][i];
            }
        } else {
            result[result.length] = arguments[j];
        }
    }
    
    return result;
}

// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = ['1', 2, '3'];
// console.log(array1.concat(array2, array3, [1,[2,3]],{1:2, 2:3}, [22,3,4,5,{1:22, 2:33}]));
// console.log(array1.customConcat(array2, array3, [1,[2,3]],{1:2, 2:3}, [22,3,4,5,{1:22, 2:33}]));

Array.prototype.customEvery = function(callback, thisArgs) {    
    let obj = Object(this);

    if (typeof callback !== "function") {
      throw new Error("Callback is not a function");
    }
    let result = false;
    for (let i = 0; i < obj.length; i++) {
        if (i in obj) {
            if (callback.call(thisArgs, this[i], i, this)) {
                result = true;
            } else {
                result = false;
            }
        } 
    }
    return result;
}

// const isBelowThreshold = (currentValue) => currentValue < 40;

// const array1 = [1, 30, 39, 29, 10, 40];

// console.log(array1.every(isBelowThreshold));
// console.log(array1.customEvery(isBelowThreshold));


Array.prototype.customPop = function() {
    let result = this[this.length - 1];
    this.length = this.length - 1;
    return result;
}

// let popArr = [1, 30, 39, 29, 10, 40];
// console.log(popArr);
// console.log(popArr.pop());
// console.log(popArr);
// console.log(popArr.customPop());
// console.log(popArr);

Array.prototype.customPush = function(value) {
    if (value !== undefined) {
        this[this.length] = value;
    }    
    return this.length;
}
// let pushArr = [1, 30, 39, 29, 10, 40];
// console.log(pushArr);
// console.log(pushArr.push(5));
// console.log(pushArr);
// console.log(pushArr.customPush(5));
// console.log(pushArr);



Array.prototype.customSort = function(callback) {
    if (typeof callback !== 'function' && callback !== undefined) {
        throw new TypeError(callback + ' is not a function');
    }
    if (callback) {
        for (let i = 0; i < this.length - 1; i++) {
            for (let j = 0; j < this.length - 1; j++) {
                if (callback(this[j], this[j + 1]) > 0) {
                    let temp = this[j];
                    this[j] = this[j + 1];
                    this[j + 1] = temp;
                }
            }
        }
    }    


    if (!callback) {
        if (this.length < 10) {
            return isort(this);
            function isort(arr) {
                let n = arr.length;
                for (let i = 1; i < n; i++) {
                    let current = String(arr[i]);
                    let j = i-1; 
                    while ((j > -1) && (current < String(arr[j]))) {
                        arr[j+1] = arr[j];
                        j--;
                    }
                    arr[j+1] = (typeof arr[i] === 'string') ? current: +current;
                }
            return arr;
            }
        }
        
        return qsort(this);
        function qsort(arr) {
            if (arr.length < 2) {
                return arr;
            } else {
                const pivot = String(arr[Math.floor(arr.length / 2)]);
                const less = [];
                const greater = [];
                const center = [];
                
                for (let i = 0; i < array.length; i++) {
                    if (arr[i] == undefined) continue;
                    arr[i] = String(arr[i]);
                    if (arr[i] < pivot) {
                        less[less.length] = (typeof arr[i] === 'string') ? arr[i]: +arr[i];
                    }
                    if (arr[i] > pivot) {
                        greater[greater.length] = (typeof arr[i] === 'string') ? arr[i]: +arr[i];
                    }
                    if (arr[i] === pivot) {
                        center.push((typeof arr[i] === 'string') ? arr[i]: +arr[i])
                    }
                    
                }
                return [...qsort(less), ...center, ...qsort(greater)]
            }
        }
    }
    return this;
}
    





let arrToSort = [1,2,3,6,37,4,5,3,3];
let strArr = ['asfsdf', 'dffd', 'frgthv', 'defefe', 'asfsdf', 'dffd', 'frgthv', 'defefe', 'frgthv', 'defefe', 'asfsdf', 'dffd', 'frgthv', 'defefe']
console.log(strArr.sort((a,b) => a - b));
console.log(strArr.customSort((a,b) => a - b));