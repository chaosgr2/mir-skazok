document.querySelectorAll('.form__count_wrap .form__count_plus').forEach(item => {

    item.addEventListener('click', function () {

        ++item.parentElement.querySelector('input').value;

        if (item.parentElement.querySelector('input').value > 1) {

            item.parentElement.querySelector('.form__count_minus').classList.remove('min');

        }

    });

});

document.querySelectorAll('.form__count_wrap .form__count_minus').forEach(item => {

    item.addEventListener('click', function () {

        --item.parentElement.querySelector('input').value;

        if (item.parentElement.querySelector('input').value < 2) {

            item.parentElement.querySelector('input').value = 1

            item.classList.add('form__count_min');

        }

    });

});