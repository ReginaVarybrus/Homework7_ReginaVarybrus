'use strict';

console.log('======Task 1======');

let frameworks = ['AngularJS', 'jQuery'];

frameworks.unshift('Backbone.js');
console.log(frameworks);

frameworks.push('ReactJS', 'Vue.js');
console.log(frameworks);

frameworks.splice(1, 0, 'CommonJS');
console.log(frameworks);

let result = frameworks.indexOf('jQuery');
if (result !== -1) {
    frameworks.splice(result, 1, 'Это здесь лишнее');
};
console.log(frameworks);

console.log('======Task 2======');

function removeNegativeElements(el) {
    return el >= 0 || typeof el === 'string';
}

let filtered = [-9, 2, 3, 0, -28, 'value'].filter(removeNegativeElements);
console.log(filtered);
filtered = [-9, -21, -12].filter(removeNegativeElements);
console.log(filtered);
filtered = ['-102', 102].filter(removeNegativeElements);
console.log(filtered);

function removeNegativeEl(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0 && typeof arr[i] !== 'string') {
            arr.splice(i, 1);
            i--;
        };
    }
    return arr;
};

let someArray = [-9, 2, 3, 0, -28, 'value'];
console.log(removeNegativeEl(someArray));

someArray = [-9, -21, -12];
console.log(removeNegativeEl(someArray));

someArray = ['-102', 102];
console.log(removeNegativeEl(someArray));

console.log('======Task 3======');

function getStringElements(el) {
    return typeof el === 'string';
}

let arr = [1 , true , 42 , "red" , 64 , "green" , "web" , new Date() , -898 , false].filter(getStringElements);
console.log(arr);


function getStringEl(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'string') {
            arr.splice(i, 1);
            i--;
        };
    }
    return arr;
};

arr = [1 , true , 42 , "red" , 64 , "green" , "web" , new Date() , -898 , false];
console.log(getStringEl(arr));

// Рекурсию обязательно попробую, после того, как сделаю 8-е дз


