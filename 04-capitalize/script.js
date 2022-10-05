/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/
function capitalize(str) {
    let newStr = str.split(" ");
    const newStr2 = [];
    let i = 0;
    newStr.forEach(function (item) {
        item = item.charAt(0).toUpperCase() + item.slice(1);
        newStr2[i] = item;
        i++;
    });
    newStr = newStr2.join(" ");
    return newStr;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"

