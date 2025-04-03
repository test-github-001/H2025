const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = document.querySelector('main').clientHeight;
}
resizeCanvas();

const letters = '0123456789';
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0f0';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(draw, 33);

window.addEventListener('resize', () => {
    resizeCanvas();
    drops.length = Math.floor(canvas.width / fontSize);
    for (let i = 0; i < drops.length; i++) {
        drops[i] = Math.random() * canvas.height / fontSize;
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const redLeft = document.querySelector(".red-left");
    const redRight = document.querySelector(".red-right");
    const blueLeft = document.querySelector(".blue-left");
    const blueRight = document.querySelector(".blue-right");
    const vibor = document.querySelector(".vibor");
    const vibor2 = document.querySelector(".vibor2");

    function resetCapsules() {
        redLeft.classList.remove("red-left2");
        redRight.classList.remove("red-right2");
        blueLeft.classList.remove("blue-left2");
        blueRight.classList.remove("blue-right2");

        redLeft.classList.add("red-left");
        redRight.classList.add("red-right");
        blueLeft.classList.add("blue-left");
        blueRight.classList.add("blue-right");

        vibor.style.opacity = "0";
        vibor2.style.opacity = "0";
        vibor.style.pointerEvents = "none"; // Отключаем клики
        vibor2.style.pointerEvents = "none"; // Отключаем клики
    }

    function openCapsule(leftElement, rightElement, choiceElement, newLeftClass, newRightClass) {
        resetCapsules(); // Сбрасываем состояние перед открытием новой капсулы

        leftElement.classList.remove("red-left", "blue-left");
        rightElement.classList.remove("red-right", "blue-right");

        leftElement.classList.add(newLeftClass);
        rightElement.classList.add(newRightClass);

        choiceElement.style.opacity = "1";
        choiceElement.style.pointerEvents = "auto"; // Включаем клики для активного выбора
    }

    // Обработчики для красной капсулы
    redLeft.addEventListener("click", () => openCapsule(redLeft, redRight, vibor2, "red-left2", "red-right2"));
    redRight.addEventListener("click", () => openCapsule(redLeft, redRight, vibor2, "red-left2", "red-right2"));

    // Обработчики для синей капсулы
    blueLeft.addEventListener("click", () => openCapsule(blueLeft, blueRight, vibor, "blue-left2", "blue-right2"));
    blueRight.addEventListener("click", () => openCapsule(blueLeft, blueRight, vibor, "blue-left2", "blue-right2"));

    // Кнопки "No" сбрасывают состояние
    document.querySelector(".vibor button").addEventListener("click", resetCapsules);
    document.querySelector(".vibor2 button").addEventListener("click", resetCapsules);
});