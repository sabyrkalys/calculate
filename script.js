const display = document.getElementById('display'),
$btn = document.querySelectorAll('.btn'); // [...] 19
let arr = [];
let accum = null; 

// логика работы калькулятора
function calculat(btnValue) {
    let value = btnValue.innerText; // получаем текс внутри тега

    if(value === "AC"){
        arr = [];
        display.value = ""

    } else if(value === "←"){
        arr.pop();
        display.value = arr.join("");

    } else if(value === "="){
        display.value = eval(accum);
        arr = [];
    } else {
        arr.push(value) // записываем в массив числа
        console.log('arr', arr) // 56*4
        accum = arr.join("")
        display.value = arr.join("")
    }
   
}

// отслеживается событие клика на кнопки калькулятора
console.log('$btn', $btn)
$btn.forEach(item => item.addEventListener('click', (event)=>{ // button
    let btnValue = event.target;
    console.log('btnValue', btnValue)

    calculat(btnValue) // активную кнопку передаем логику функции
}))

display.addEventListener('change', (e)=>console.log('e.target.value', e.target.value))






