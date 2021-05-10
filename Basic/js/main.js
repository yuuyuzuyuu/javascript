'use strict'; //エラーチェックのため

//データ型

console.log(typeof 'hello');
console.log(typeof 5);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);

//定数 const
//変数 let var

let price = 150;
console.log(price*140);
console.log(price*160);

price = 170;
console.log(price*140);
console.log(price*160);

//数字からなる文字列の演算
console.log('5' + 3);
console.log(parseInt('5',10)+3); /*10進数の整数値に変換*/
console.log(parseInt('hello',10)); /*エラーになる*/

//条件演算子

let score = 85;
score >= 80 ? console.log('Great!') : console.log('Ok...');

//for文、繰り返し

for (let i = 1; i <= 10; i++) {
  // console.log('hello');
  console.log(`hello ${i}`);
}

//while文

let hp = 100;

while(hp > 0) {
  console.log(`${hp} HP left!`);
  hp -= 15;
}

//関数

function showAd(message = 'Ad') {  //仮引数
  console.log('----------');
  console.log(`--- ${message} ---`);
  console.log('----------');
}

showAd('Header Ad');　//実引数
console.log('Tom is great!');
console.log('Bob is great!');
showAd();
console.log('Steve is great!');
console.log('Richard is great!');
showAd('Footer Ad');

// アロー関数

const sum = (a, b, c) =>  a+b+c;

const total = sum(1,2,3) + sum(3,4,5);
console.log(total);

const double = a => a*2;
console.log(double(12));
