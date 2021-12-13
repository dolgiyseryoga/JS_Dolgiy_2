//Задача №9

let days_year = prompt('Введите номер дня для перевода: ');

if (days_year<0){
    alert ("Некорректное число")
}
let year_s = days_year/365;
let month = days_year*0.03285;
let weeks = days_year*0.1429;
let hour = days_year*24;
let minutes = days_year*1440;
let seconds = days_year*86400;

console.log(year_s.toFixed(2) + ' Года\n\
' + month.toFixed(2) +' Месяца\n\
' + weeks.toFixed(2) + ' Недель\n\
' + hour.toFixed(2) + ' Часов\n\
' + minutes.toFixed(2) + ' Минут\n\
' + seconds.toFixed(2) +' Секунд');

