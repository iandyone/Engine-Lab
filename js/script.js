const checkbox = document.querySelector('.call__checkbox');
const title = document.querySelector('.call__title');
const text = document.querySelector('.call__text');
const label = document.querySelector('.call__label');
const form = document.querySelector('.call__form');
const rules = document.querySelector('.call__rules');
const input = document.querySelector('.call__phone');
const popupCall = document.querySelector('#popup__call');
const wraper = document.querySelector('.wraper');

async function submit(event) {
    const isPrivacyApplied = checkbox.checked;

    [label, form, rules].forEach(item => item.classList.remove('hidden'));

    if (isPrivacyApplied) {
        try {
            const isValidPhoneNumber = input.value.length == 17;
            if (isValidPhoneNumber) {
                const phone = input.value;
                // const response = await fetch('http://localhost:5000', {
                //     method: 'POST',
                //     body: { phone: phone }
                // })
                title.textContent = 'Заявка принята';
                text.textContent = 'Оператор свяжется с вами в течении 5-10 минут';
                label.textContent = 'Введите ваш номер телефона';
                label.style.color = '$white';
                [label, form, rules].forEach(item => item.classList.add('hidden'));
            } else {
                label.textContent = 'Неверный номер';
                label.style.color = 'red';
            }

        } catch (error) {
            console.log(error.message);
        }
    }
    else {
        label.textContent = 'Необходимо принять условия Политики конфиденциальности';
        label.style.color = 'red';
    }

    event.preventDefault();
}

// === Validate form  === //
document.querySelector('.call__form').addEventListener('submit', (event) => submit(event));

// === Mobile/tablet header background  === //
wraper.addEventListener("scroll", function () {
    if(document.documentElement.clientWidth <= 992) {
        const scrollFromTop = wraper.scrollTop;
        document.querySelector('.header__top').style.background = scrollFromTop > 40 ? `rgba(0, 0, 0, 0.6` : `transparent`;
    }
})

// === Desktop header background === //
window.addEventListener('resize', () => {
    if(document.documentElement.clientWidth > 992) {
        document.querySelector('.header__top').style.background = 'white';
    }
})

document.addEventListener('click', e => {
    // === Open popup === //
    if (e.target.classList.contains('header__text')) {
        text.textContent = 'Введите номер — позвоним вам в течение 5-10 минут в рабочее время';
        label.textContent = 'Введите ваш номер телефона';
        label.style.color = '$white';
        [label, form, rules].forEach(item => item.classList.remove('hidden'));
        popupCall.classList.remove('hidden');
    }

    // === Close popup === //
    if (e.target.classList.contains('button-close')) {
        const label = document.querySelector('.call__label');
        popupCall.classList.add('hidden');
    }
})