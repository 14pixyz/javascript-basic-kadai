const btnClick = document.getElementById('btn');
const text = document.getElementById('text');

btnClick.addEventListener('click', () => {
  text.textContent = 'ボタンをクリックしました';
});