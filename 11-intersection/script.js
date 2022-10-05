/*
 * Задача 11: «Пересечения массивов»
 *
 * Напишите функцию intersection(arr1, arr2). Она должна принимать
 * на вход два массива целых чисел. Функция должна вернуть новый
 * массив чисел, содержащихся в обоих исходных массивах.
 * 
*/

function uniq(arr) {
    let uniqueNumb = [];
    arr.forEach((number) => {
        if (!uniqueNumb.includes(number)) { //если номер еще не добавили в новый массив, 
            uniqueNumb.push(number);        //то добавим
        }
    });
    return uniqueNumb;
}

function intersection(arr1, arr2) {
    arr1 = uniq(arr1);
    arr2 = uniq(arr2);

    let newArr = [];
    let j = 0;
    for (let i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) > -1) {
            newArr[j] = arr2[i];
            j++;
        }
    }
    return newArr;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])); // [4, 1]
console.log(intersection([1, 5, 4, 2], [7, 12])); // []
console.log(intersection([1, 1, 5, 4, 2], [8, 91, 4, 1, 1, 3])); // []