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

//配列

{
  const otherScores = [20,10];
  const scores = [80,90,40,70, ...otherScores];
  // scores.push(60, 50);
  // scores.shift();

    for (let i = 0; i < scores.length; i++) {
      console.log(`Score ${i}:${scores[i]}`);
    }

    scores.forEach((score, index) => {
      console.log(`Score ${index}:${score}`)
    });
}

//map

{
  const prices = [180, 190, 200];

  const updatePrices = prices.map(price => price +20);
    console.log(updatePrices);
}

//filter

{
  const numbers =[1,6,7,8,9];

  // const evenNumbers = numbers.filter(number => {
  //   if (number%2===0){
  //     return true;
  //   }else {
  //     return false;
  //   }
  // });

  const evenNumbers = numbers.filter(number => number%2===0);

  console.log(evenNumbers);
}

//オブジェクト記法

{
  const point = {
    x:100,
    y:180,
  };

  point.x=120;

  console.log(point['x']);

  point.z=90;
  delete point.y;

  console.log(point);
} 

//オブジェクトのプロパティを列挙するとき

{
  const point = {
    x: 100,
    y: 180,
  }

  const keys = Object.keys(point);
  keys.forEach(key => {
    console.log(`Key: ${key} Value: ${point[key]}`);
  })
}

{
  const points = [
    {x: 30, y: 20},
    {x: 10, y: 50},
    {x: 40, y: 20},
  ];
  console.log(points[1].y);
}

//変数の代入

{
  let x = [1, 2];
  let y = [...x];
  x[0] = 5;
  console.log(x);
  console.log(y);
}

//部分文字列

{
  const str = 'hello';
  //str.substring(開始位置、終了位置);
  console.log(str.substring(2,4));

  console.log(str[1]);
}

//join()、split()

{
  const d = [2019,11,13];
  console.log(d.join('/'));

  const t = '17:08:24';
  console.log(t.split(':'));

  const [hour, minute, second] = t.split(':');
  console.log(hour);
  console.log(minute);
  console.log(second);
}

//数値計算

// floor 小数点以下切り捨て
// ceil 〃切り上げ
// round 四捨五入
// toFixed(数字)  数字桁まで表示
// Math.random 0以上１未満のランダムな数値を生成
// Math.random()

{
  console.log(Math.floor(Math.random()*6)+1);
}

//日時

{
  // d.getFullYear(); 年
  // d.getMonth();　月
  // d.getDate();　日
  // d.getDay();　曜日
  
  const d = new Date();
  console.log(d);

  console.log(`${d.getMonth()+1}月${d.getDate()}日`);
}

//alert, confirm
{
  // alert('hello');
  // const answer = confirm('削除しますか？');
  // if (answer) {
  //   console.log('削除しました');
  // } else {
  //   console.log('キャンセルしました');
  // }
 }

//  タイマー機能

{
  // let i = 0;

  // function showTime() {
  //   console.log(new Date());
  //   i++;
  //   if(i>2) {
  //     clearInterval(intervalId);
  //   }
  // }

  // const intervalId = setInterval(showTime, 1000);
}

// 例外処理

{
  const name = 2;

  try {
    console.log(name.toUpperCase()); //大文字にする
  } catch(e) {
    console.log(e);
  }

  console.log('Finish!');
}

// オブジェクトが複数ある時
{
  class Post{
    constructor(text) {
      this.text = text;
      this.likeCount = 0;
    }

      show() {
        console.log(`${this.text} - ${this.likeCount}likes`);
      }

      like() {
        this.likeCount++;
        this.show();
      }

      //静的メソッド
      // thisは使えない
      static showInfo() {
        console.log('Post class version 1.0');
      }
  }

  const posts = [
    new Post('JavaScriptの勉強中'),
    new Post('プログラミング楽しい！'),
  ];

  posts[0].like();
  posts[1].like();

  Post.showInfo();

}