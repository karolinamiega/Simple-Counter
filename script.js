let numbers = document.getElementById('numbers');
console.log(numbers);

let counter = 5;
let h3 = document.createElement('h3');
// h3.textContent = counter;
numbers.append(h3);
// changeColor();


let firstButton = document.createElement('button');
firstButton.textContent = '+';
numbers.append(firstButton);

let secondButton = document.createElement('button');
secondButton.textContent = '-';
numbers.append(secondButton);

let resetButton = document.createElement('button');
resetButton.textContent = 'reset';
numbers.after(resetButton);

let addTwoButton = document.createElement('button');
addTwoButton.textContent = '+2';
resetButton.after(addTwoButton);

let subTwoButton = document.createElement('button');
subTwoButton.textContent = '-2';
addTwoButton.after(subTwoButton);

let h4 = document.createElement('h4');
h4.textContent = 'Balai: ';
subTwoButton.after(h4);

let ul = document.createElement('ul');
h4.after(ul);

let inputButton = document.createElement('button');
inputButton.textContent = 'Irasyti bala';
subTwoButton.after(inputButton);

let removeGradesButton = document.createElement('button');
removeGradesButton.textContent = 'Istrinti balus';
inputButton.after(removeGradesButton);

let input = document.createElement('input');
input.setAttribute('type', 'number');
input.setAttribute('min', 1);
input.setAttribute('max', 10);
input.setAttribute('value', 8);
ul.after(input);

disabled();

firstButton.addEventListener('click', () => {
    disabled(1);
})

secondButton.addEventListener('click', () => {
    disabled(-1);
})
resetButton.addEventListener('click', () => {
    reset();
})

addTwoButton.addEventListener('click', () => {
    disabled(2);
})
subTwoButton.addEventListener('click', () => {
    disabled(-2);
})

inputButton.addEventListener('click', () => {
    let li = document.createElement('li');
    li.textContent = counter;
    ul.append(li);
    reset();
    li.addEventListener('click', () => li.remove());

})
removeGradesButton.addEventListener('click', () => {
    let allGrades = document.querySelectorAll('li');
    allGrades.forEach(grade => {
        grade.remove();
    })
})
input.addEventListener('input', () => {
    counter = Number(input.value);
    changeColor();
    disabled();
})

h3.style = `margin-left: 300px;`

firstButton.style = `color: green;
                     background-color: white;
                     font-size: 20px;
                     border: 1px solid black;
                     border-radius: 20px;
                     padding: 10px 15px;
                     margin-left: 255px;`

secondButton.style = `color: red;
                     background-color: white;
                     font-size: 20px;
                     border: 1px solid black;
                     border-radius: 20px;
                     padding: 10px 19px;
                     margin-left: 5px;`

resetButton.style = `color: black;
                     background-color: lightblue;
                     font-size: 20px;
                     border: 1px solid black;
                     border-radius: 10px;
                     padding: 5px 28px;
                     margin-top: 10px;`

addTwoButton.style = `color: black;
                     background-color: pink;
                     font-size: 20px;
                     border: 1px solid black;
                     border-radius: 10px;
                     padding: 5px 28px;
                     margin-left: 10px;`

subTwoButton.style = `color: black;
                     background-color: pink;
                     font-size: 20px;
                     border: 1px solid black;
                     border-radius: 10px;
                     padding: 5px 28px;
                     margin-left: 10px;`

inputButton.style = `color: black;
                     background-color: lightblue;
                     font-size: 20px;
                     border: 1px solid black;
                     border-radius: 10px;
                     padding: 5px 28px;
                     margin-left: 10px;`

removeGradesButton.style = `color: black;
                            background-color: lightblue;
                            font-size: 20px;
                            border: 1px solid black;
                            border-radius: 10px;
                            padding: 5px 28px;
                            margin-left: 10px;`

h4.style = `font-family: Arial, Helvetica, sans-serif;
            text-transform: uppercase;
            margin-left: 275px;`
            
ul.style = `font-family: Arial, Helvetica, sans-serif;
            text-transform: uppercase;
            margin-left: 255px;
            list-style: none;
            `

input.style = `margin-left: 250px;
                     padding: 5px 28px;`



function changeColor(){
let color = '';
if(counter >= 5){
    color = 'green';
} else{
    color = 'red';
}
h3.style.color = color;
}

function disabled(num = 0){
    counter = counter + num;
    h3.textContent = counter;
    input.value = counter;

    changeColor();
if(counter < 2){
    secondButton.setAttribute('disabled', true);
} else {
    secondButton.removeAttribute('disabled');
}
if(counter >= 10){
    firstButton.setAttribute('disabled', true);
} else {
    firstButton.removeAttribute('disabled');
}
}
function reset(){
    counter = 5;
    disabled();
}