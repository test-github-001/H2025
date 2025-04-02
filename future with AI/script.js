window.addEventListener('load', () => {
    const heroContent = document.querySelector('.hero-content.bottom-left');
    heroContent.classList.add('active');
  });

  // GPT
  const marquee = document.querySelector('.marquee');
  let baseDuration = 20; // исходная длительность анимации (в секундах)
  let speedFactor = 1;
  
  function updateAnimationSpeed() {
    marquee.style.animationDuration = `${baseDuration / speedFactor}s`;
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const blocks = document.querySelectorAll('.block');

    const onScroll = () => {
        blocks.forEach(block => {
            const blockTop = block.getBoundingClientRect().top; // getBoundingClientRect - GPT
            const triggerPoint = window.innerHeight * 0.9;

            if (blockTop < triggerPoint) {
                block.classList.add('show');
            }
        });
    };

    window.addEventListener('scroll', onScroll);
    onScroll();
});

const logo = document.getElementById('logo');
setInterval(() => {
    logo.src = logo.src.includes('bluelogo') ? 'images/pinklogo.png' : 'images/bluelogo.png';
}, 2000);

/*****************************
 * 
 *  SMOOTH SCROLL TO ANCHOR
 * 
 */

document.getElementById('call-us').addEventListener('click', function() {
    const scrollTarget = document.getElementById('footer-content');
    if (scrollTarget) {
        const topOffset = 0; // Отступ, если нужно
        const elementPosition = scrollTarget.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - topOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
});


    // чу-чуть помощь GPT 
    document.getElementById('accept-cookies').addEventListener('click', function() {
        document.getElementById('cookie-banner').style.display = 'none';
        // можно добавить запись в localStorage или cookie
    });

window.onload = function() {
    if (!localStorage.getItem('welcomeShown')) {
        document.getElementById('welcome-popup').classList.add('show');
    }

    document.getElementById('popup-close').onclick = function() {
        document.getElementById('welcome-popup').classList.remove('show');
        localStorage.setItem('welcomeShown', 'true');
    }
}

// GPT

document.addEventListener("DOMContentLoaded", function () {
    const langSwitch = document.getElementById("lang-switch"); // Кнопка смены языка
    let currentLang = localStorage.getItem("language") || "ru"; // Получаем язык из localStorage или ставим "ru"

    // Функция загрузки JSON-файла с переводом
    function loadLanguage(lang) {
        fetch(`data.${lang}.json`)
            .then(response => response.json())
            .then(data => {
                updateText(data);
                localStorage.setItem("language", lang); // Сохраняем выбранный язык
            })
            .catch(error => console.error("Ошибка загрузки языка:", error));
    }

    // Функция обновления текста
    function updateText(data) {
        // Меняем текст у элементов с data-key
        document.querySelectorAll("[data-key]").forEach(el => {
            const key = el.getAttribute("data-key");
            if (data[key]) el.innerHTML = data[key];
        });

        // Меняем текст у элементов с id
        Object.keys(data).forEach(key => {
            const el = document.getElementById(key);
            if (el) el.innerHTML = data[key];
        });
    }

    // Переключение языка при клике на кнопку
    langSwitch.addEventListener("click", function () {
        currentLang = currentLang === "ru" ? "en" : "ru";
        loadLanguage(currentLang);
    });

    // Загружаем язык при загрузке страницы
    loadLanguage(currentLang);
});
