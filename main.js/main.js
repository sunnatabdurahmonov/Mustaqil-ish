const menu_btn = document.querySelector('.menu_btn');
const navigation = document.querySelector('.navigation');

menu_btn.addEventListener('click', () => {
    menu_btn.classList.toggle('active')
    navigation.classList.toggle('active')
})


