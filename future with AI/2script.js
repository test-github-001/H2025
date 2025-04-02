const logo = document.getElementById('logo');
setInterval(() => {
    logo.src = logo.src.includes('bluelogo') ? 'images/pinklogo.png' : 'images/bluelogo.png';
}, 2000);

// GPT
document.addEventListener("DOMContentLoaded", () => {
    const faders = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    faders.forEach(el => observer.observe(el));
});


// gpt, это с 1 страницы код, чтобы текст менялся на английский

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