const checkbox = document.querySelector('.call__checkbox');
const title = document.querySelector('.call__title');
const text = document.querySelector('.call__text');
const label = document.querySelector('.call__label');
const form = document.querySelector('.call__form');
const rules = document.querySelector('.call__rules');
const input = document.querySelector('.call__phone');
const popupCall = document.querySelector('#popup__call');

async function submit(event) {
    const isPrivacyApplied = checkbox.checked;

    event.preventDefault();
    [label, form, rules].forEach(item => item.classList.remove('hidden'));

    if (isPrivacyApplied) {
        try {
            if (input.value.length == 17) {
                const phone = input.value;
                // const response = await await fetch('http://localhost:5000', {
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
}

document.querySelector('.call__form').addEventListener('submit', (event) => submit(event));

// window.addEventListener("scroll", function (e) {
//     const scrollFromTop = document.querySelector(`html`).scrollTop;
//     console.log(document.querySelector('.header__top'));
//     document.querySelector('.header__top').style.background = scrollFromTop > 0 ? `rgba(0, 0, 0, 0.3` : `transparent`;
// })

document.addEventListener('click', e => {
    // Открыть popup
    if (e.target.classList.contains('header__text')) {
        text.textContent = 'Введите номер — позвоним вам в течение 5-10 минут в рабочее время';
        label.textContent = 'Введите ваш номер телефона';
        label.style.color = '$white';
        [label, form, rules].forEach(item => item.classList.remove('hidden'));
        popupCall.classList.remove('hidden');
    }

    // Закрыть popup
    if (e.target.classList.contains('button-close')) {
        const label = document.querySelector('.call__label');
        popupCall.classList.add('hidden');
    }
})