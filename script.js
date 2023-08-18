'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

// document.querySelector('.show-modal').addEventListener('click', function () {
//   document.querySelector('.modalHidden').display = 'block';
// });

function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

function openModal() {
  console.log(modal.classList);
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

for (let i = 0; i < btnOpenModal.length; i++) {
  console.log(btnOpenModal[i]);
  btnOpenModal[i].addEventListener('click', openModal);

  btnCloseModal.addEventListener('click', closeModal);
}

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  console.log(e);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
