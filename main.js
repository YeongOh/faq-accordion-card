const cardItem = document.querySelector('.card__list');

cardItem.addEventListener('click', (e) => {
  if (e.target.closest('.card__item__question')) {
    const question = e.target.closest('.card__item__question');
    const button = question.children[0];
    const answer = question.nextElementSibling;

    question.classList.toggle('active');
    button.classList.toggle('active');
    answer.classList.toggle('active');
  }
});

cardItem.addEventListener('mouseover', (e) => {
  const box = document.querySelector('.card__box');
  box.classList.add('move');
});

cardItem.addEventListener('mouseout', (e) => {
  const box = document.querySelector('.card__box');
  box.classList.remove('move');
});
