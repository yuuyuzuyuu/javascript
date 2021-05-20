'use strict';

{
  const question = document.getElementById('question');
  const choices = document.getElementById('choices');
  const btn = document.getElementById('btn');

  const quizSet = [
    {q: 'What is A?', c: ['A1', 'A2', 'A3']},
    {q: 'What is B?', c: ['B1', 'B2', 'B3']},
    {q: 'What is C?', c: ['C1', 'C2', 'C3']},
  ];
  let currentNum = 0;



  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    return arr;
  }

  function checkAnswer(li) {
    if (li.textContent === quizSet[currentNum].c[0]) {
      console.log('correct');
    } else {
      console.log('wrong');
    }
  }

  function setQuiz() {
    question.textContent = quizSet[currentNum].q;

    const shuffledChoices = shuffle([...quizSet[currentNum].c]);
    shuffledChoices.forEach(choice => { // まず最初の要素としてchoiceには'A0'が入る
      const li = document.createElement('li'); // <li></li>といった空の状態のli要素が生成される
      li.textContent = choice; // choiceを代入することで <li>A0</li>というように選択肢の文字列が入った状態になる。
      li.addEventListener('click', () => {
        checkAnswer(li);
      });
      choices.appendChild(li); // 親要素であるulに生成したli要素と追加することで画面に表示される
  });
  }

  setQuiz();
}