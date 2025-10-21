document.addEventListener('DOMContentLoaded', () => {
    // Бургер меню
    const burger = document.querySelector('.header__burger');
    const menu = document.querySelector('.header__menu');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        menu.classList.toggle('header__menu--open');
    });

    // Показать все карточки
    const cards = document.querySelectorAll('.equipment__card');
    const showMoreBtn = document.querySelector('.equipment__catalog--btn');

    const hideExtraCards = () => {
        if (window.innerWidth <= 576) {
            cards.forEach((card, index) => {
                if (index >= 4) card.style.display = 'none';
            });
        } else {
            cards.forEach((card) => (card.style.display = 'flex'));
        }
    };

    hideExtraCards();
    window.addEventListener('resize', hideExtraCards);

    showMoreBtn.addEventListener('click', () => {
        if (window.innerWidth <= 576) {
            cards.forEach((card) => (card.style.display = 'flex'));
            showMoreBtn.disabled = true;
        }
    });
});
