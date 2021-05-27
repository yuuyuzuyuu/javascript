const question = '好きな色は？';
const answers = [
  '赤',
  '青',
  'ピンク',
  '緑'
];
const correct = 'ピンク';

document.getElementById('js-question').textContent = question;

const button = document.getElementsByTagName('button');
button[0].textContent = answers[0];
button[1].textContent = answers[1];
button[2].textContent = answers[2];
button[3].textContent = answers[3];

button[0].addEventListener('click', () => {
  if(correct === button[0].textContent){
    window.alert('正解！');
  } else {
    window.alert('不正解！');
  }
});