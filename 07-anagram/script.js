/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 * 
*/

function anagram(str1, str2) {
    //прреобразуем в массивы
    let newstr1 = str1.split('');
    let newstr2 = str2.split('');

    //в верхний регистр
    for (let i = 0; i < newstr1.length; i += 1) {
        newstr1[i] = newstr1[i].toUpperCase();
    }

    for (let i = 0; i < newstr2.length; i += 1) {
        newstr2[i] = newstr2[i].toUpperCase();
    }

    //проверим случай, когда слова являются одинаковыми -> не являюются анаграммами
    let newstrCopy1 = newstr1.join('');
    let newstrCopy2 = newstr2.join('');
    if (newstrCopy1 == newstrCopy2) {
        return false;
    }
    //сортируем массивы
    newstr1 = newstr1.sort();
    newstr2 = newstr2.sort();
    //преобразуем в слова
    newstr1 = newstr1.join('');
    newstr2 = newstr2.join('');
    //если строки равны -> анаграмма
    if (newstr1 == newstr2) {
        return true;
    }
    return false;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false
console.log(anagram('up', 'UP')); // false