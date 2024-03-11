var swiper = new Swiper(".services-slider", {
    slidesPerView: 3,
    spaceBetween: 32,
    loop: true,
    centeredSlides: false,
    grabCursor: true,
    keyboard: {
        enabled: true,
    },
    breakpoints: {
        1200: {
            slidesPerView: 3,
        },
        769: {
            slidesPerView: 2,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 32,
        },
        320: {
            slidesPerView: 1.18,
            spaceBetween: 16,
        },
    },
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var swiper = new Swiper(".model-airplane__slider", {
    loop: true,
    effect: "fade",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var swiper = new Swiper(".projects-slider", {
    loop: true,
    effect: "fade",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

document.addEventListener('DOMContentLoaded', function () {
    let header = document.getElementById('header');
    let headerHeight = header.offsetHeight;

    // Вызываем функцию обработки скролла при загрузке страницы
    handleScroll();

    window.addEventListener('scroll', handleScroll);

    function handleScroll() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > headerHeight - 50) {
            header.classList.add('scroll-header');
        } else if  (scrollTop < headerHeight) {
            header.classList.remove('scroll-header');
        }
    }
});


$('.mob-menu-btn').on('click', function () {
    $(this).toggleClass('active');
    $('header').toggleClass('active');
    $('body').toggleClass('hidden');
    $('.navbar').slideToggle(0);
    $('.menu-hide-link').removeClass('active');
    $('.next-level').slideUp(100);
})

$( document ).ready(function() {
    if ($(window).width() <= 991) {
        $('.next-level__top-row').on('click', function () {
            $('.menu-hide-link').removeClass('active');
            $('.dropdown-wrap').removeClass('active');
        })
    }
});


$( document ).ready(function() {
    $('.item-show-next__level').on('click', function () {
        if ($(this).parent('li.dropdown-wrap').hasClass('active')) {
            $(this).parent('li.dropdown-wrap').removeClass('active');
        } else {
            $(this).parent('li.dropdown-wrap').siblings('.dropdown-wrap').removeClass('active');
            $(this).parent('li.dropdown-wrap').addClass('active');
        }
    });

    $('.show-last-level').on('click', function () {
        $(this).toggleClass('active');
        $(this).siblings('.last-level').slideToggle();
    })
});

$(document).on("click", function(event){
    if(!$(event.target).closest('.dropdown-wrap').length) {
        $('.dropdown-wrap').removeClass('active');
    }
});

jQuery(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
            $('#scroll-to-top').fadeIn();
        } else {
            $('#scroll-to-top').fadeOut();
        }
    });
    $('#scroll-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });
});


//TAB FOR SLIDER BLOCK
$('.tab-section').each(function() {
    let ths = $(this);
    ths.find('.b-tab').not(':first').addClass('hidden');
    ths.find('.b-nav-tab').click(function() {
        ths.find('.b-nav-tab').removeClass('active').eq($(this).index()).addClass('active');
        ths.find('.b-tab').addClass('hidden').eq($(this).index()).removeClass('hidden')
    }).eq(0).addClass('active');
});

$('a[href^="#"]').on('click', function (e) {
    let link = $(this).attr('href'),
        el = $(document).find(link);
    if (el.length > 0) {
        el = el.eq(0).offset().top;
        $('html, body').animate({
            scrollTop: el - 100 + 'px'
        }, 300, 'linear');
    }
    return false;
});


$('.form-js-label').find('input').on('input', function (e) {
    $(e.currentTarget).attr('data-empty', !e.currentTarget.value);
});
function validateForm() {
    let nameInput = document.getElementById('firstName');
    let emailInput = document.getElementById('email');
    let textInput = document.getElementById('text');
    let flexCheckChecked = document.getElementById('flexCheckChecked');

    let nameError = document.getElementById('nameError');
    let emailError = document.getElementById('emailError');
    let textError = document.getElementById('textError');
    let checkboxError = document.getElementById('checkboxError');

    if (!isValidName(nameInput.value)) {
        nameError.classList.add('error');
        nameError.parentElement.classList.add('error');
    } else {
        nameError.classList.remove('error');
        nameError.parentElement.classList.remove('error');
    }

    if (!isValidEmail(emailInput.value)) {
        emailError.classList.add('error');
        emailError.parentElement.classList.add('error');
    } else {
        emailError.classList.remove('error');
        emailError.parentElement.classList.remove('error');
    }

    if (!isValidText(textInput.value)) {
        textError.classList.add('error');
        textInput.parentElement.classList.add('error');
    } else {
        textError.classList.remove('error');
        textInput.parentElement.classList.remove('error');
    }

    // Проверяем, выбран ли чекбокс
    if (!flexCheckChecked.checked) {
        checkboxError.classList.add('error');
        // Добавляем класс "error" для класса "form-check"
        document.querySelector('.form-check').classList.add('error');
    } else {
        checkboxError.classList.remove('error');
        // Удаляем класс "error" для класса "form-check", если чекбокс выбран
        document.querySelector('.form-check').classList.remove('error');
    }

    // Проверка, прошла ли валидация
    if (nameError.classList.contains('error') ||
        emailError.classList.contains('error') ||
        textError.classList.contains('error') ||
        !flexCheckChecked.checked) {
        return false; // Возвращаем false, чтобы форма не отправлялась
    }

    return true; // Возвращаем true, если валидация прошла успешно
}


function isValidName(name) {
    var nameRegex = /^[a-zA-Zа-яА-Я\s]+$/;
    return nameRegex.test(name);
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidText(text) {
    return text.trim() !== '';
}

$(document).ready(function() {
    $(".submitForm").on("click", function(event) {
        // Предотвращаем действие по умолчанию (отправку формы), так как мы будем использовать AJAX
        event.preventDefault();

        // Находим ближайшую форму относительно кнопки
        let form = $(this).closest('form');

        // Проверяем валидацию формы
        if (!validateForm(form)) {
            return; // Прерываем выполнение функции, если валидация не прошла успешно
        }

        // Если валидация прошла успешно, отправляем AJAX-запрос
        let formData = form.serialize();
        $.ajax({
            type: "POST",
            url: "submit_form.php",
            data: formData,
            dataType: 'json',
            contentType: 'application/x-www-form-urlencoded',
            success: function(response) {
                document.location.reload();
            },
            error: function(error) {
                console.error("Ошибка при отправке данных:", error);
            }
        });
    });
});

function validateForm2() {
    let emailInput = document.getElementById('emailSubscribe');
    let emailError = document.getElementById('errorEmailSubscribe');

    if (!isValidEmail(emailInput.value)) {
        emailError.classList.add('error');
        emailError.parentElement.parentElement.classList.add('error');
    } else {
        emailError.classList.remove('error');
        emailError.parentElement.parentElement.classList.remove('error');
    }
    if (
        emailError.classList.contains('error') ) {
        return false;
    }

    return true;
}


function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidText(text) {
    return text.trim() !== '';
}

$(document).ready(function() {
    $(".subscribeForm").on("click", function(event) {

        event.preventDefault();
        let form = $(this).closest('form');

        if (!validateForm2(form)) {
            return; // Прерываем выполнение функции, если валидация не прошла успешно
        }

        // Если валидация прошла успешно, отправляем AJAX-запрос
        let formDataModal = form.serialize();
        $.ajax({
            type: "POST",
            url: "submit_form.php",
            data: formDataModal,
            dataType: 'json',
            contentType: 'application/x-www-form-urlencoded',
            success: function(response) {
                document.location.reload();
            },
            error: function(error) {
                console.error("Ошибка при отправке данных:", error);
            }
        });
    });
});

