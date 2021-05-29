'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    const results = ['lucky!', 'unhappy', 'brilliant!!', 'normal', 'beautiful!'];
    const n = Math.floor(Math.random() * results.length);
    btn.textContent = results[n];
  });
}