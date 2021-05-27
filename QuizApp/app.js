const quiz = [
  {
    question: '好きな色は？',
    answers: [
      '赤',
      '青',
      'ピンク',
      '緑'
    ],
    correct: 'ピンク'
  }, {
    question: '好きな食べ物は？',
    answers: [
      'うどん',
      'ラーメン',
      '焼肉',
      'ピザ'
    ],
    correct: 'うどん'
  }, {
    question: '好きな季節は？',
    answers: [
      '春',
      '夏',
      '秋',
      '冬'
    ],
    correct: '夏'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const button = document.getElementsByTagName('button');
const buttonLength = button.length;

// クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}

setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解！');
  }

  quizIndex++;

  if(quizIndex < quizLength) {
    //問題数がまだあれば実行
    setupQuiz();
  } else {
    window.alert('Finished! Your score is' + score + '/' + quizLength + '!');
  }

};

let handlerIndex = 0;
while(handlerIndex < buttonLength){
  button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}
