//Задача №10

let days = prompt('Введите любой день в году: ' , day );

if (days>0 && days<31){
    k=('Январь');} 
if (days>31 && days<59){
    k=('Февраль');} 
if (days>59 && days<90){
    k=('Март');} 
if (days>90 && days<120){
    k=('Апрель');} 
if (days>120 && days<151){
    k=t('Май');} 
if (days>151 && days<181){
    k=('Июнь');} 
if (days>181 && days<212){
    k=('Июль');} 
if (days>212 && days<243){
    k=('Август');} 
if (days>243 && days<273){
    k=('Сентябрь');} 
if (days>273 && days<304){
    k=('Октябрь');} 
if (days>304 && days<334){
    k=('Ноябрь');} 
if (days>334 && days<365){
    k=('Декабрь');} 

switch (Math.round (days/92)){
    case 0:
        j= ("Зима")
    break;
    case 1:
        j= ("Весна")
    break;
    case 2:
        j= ("Лето")
    break;
    case 3:
        j= ("Осень")
    break;
    case 4:
        j= ("Осень")
    break;
    }

alert ('Месяц - ' + k + ' / Пора года - ' + j );
