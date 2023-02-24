document.querySelector('.burger').addEventListener('click', function (event) {
    const sidebar = document.querySelector('.header__bottom');
    const contacts = document.querySelectorAll('[data-type="contacts"]');
    const header = document.querySelector('.header__top')

    document.querySelector('.burger span').classList.toggle('active');
    document.querySelector('.header__bottom').classList.toggle('active');
    event.stopPropagation();

    if (sidebar.classList.contains('active')) {
        contacts.forEach(item => item.style.color = 'black');
        header.style.backgroundColor = 'white';
    } else {
        contacts.forEach(item => item.style.color = 'white');
        header.style.backgroundColor = 'transparent';
    }
})