let modal = document.querySelector('.modal');
let biArrowUp = document.querySelector('.bi-box-arrow-up');
let biX = document.querySelector('.bi-x');
let conteinerModal = document.querySelector('.conteiner-modal');
let allBi = document.querySelectorAll('.bi');

biArrowUp.addEventListener('click', () => {
    modal.classList.toggle('active');
    conteinerModal.classList.toggle('active');
    biX.classList.toggle('active');

    allBi.forEach((bis) => {
        bis.classList.toggle('active');
    });

    biX.addEventListener('click', () => {
        modal.classList.remove('active');
        conteinerModal.classList.remove('active');
        biX.classList.remove('active');
        allBi.forEach((bis) => {
            bis.classList.remove('active');
        });
    });
});