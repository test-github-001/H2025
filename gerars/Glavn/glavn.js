document.getElementById('AItest').addEventListener('submit', function(e) {
    e.preventDefault();
    let aCount = 0;
    let bCount = 0;
    let cCount = 0;
    for (let i = 1; i <= 10; i++) {
        const answer = document.querySelector(`input[name="q${i}"]:checked`);
        if (answer) {
            if (answer.value === 'a') aCount++;
            if (answer.value === 'b') bCount++;
            if (answer.value === 'c') cCount++;  
        }
    }
    const resultDiv = document.getElementById('result');
    let resultText = '';
    if (aCount > bCount && aCount > cCount) {
        resultText = "Вы действительно боитесь нейросетей, и в глубине души считаете что мы не должны так сильно полагаться на нейросети.";
    } else if (bCount > aCount && bCount > cCount) {
        resultText = "Вы просто равнодушны к нейросетям и вряд ли видите в них опасность. Возможно вам стоит почитать книги об ИИ или поспрашивать друзей об этом.";
    } else if (cCount > aCount && cCount > bCount) {
        resultText = "Вам очень нравятся нейросети и вы считаете, что они могут быть нашими лучшими друзьями. Это интересная позиция, но не забывайте что ИИ это лишь инструмент.";
    } else {
        resultText = "Ваши ответы сбалансированы, вы не определились с отношением к ИИ.";
    }
    resultDiv.textContent = resultText;
})

document.getElementById('chat-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const input = document.getElementById('chat-input');
    const output = document.getElementById('chat-output');
    const question = input.value.trim();

    // Отображаем вопрос пользователя
    output.innerHTML += `<p><strong>Вы:</strong> ${question}</p>`;
    input.value = ''; // Очищаем поле ввода
    output.scrollTop = output.scrollHeight;

    try {
        const response = await fetch('https://api.deepseek.com/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer sk-71aee75c7748438f92658448a5546155' // Ваш ключ
            },
            body: JSON.stringify({
                model: 'deepseek-chat', // Используем правильную модель
                messages: [
                    { role: 'system', content: 'Ты чат-бот, который отвечает на вопросы о будущем ИИ, учитывая мнения людей о страхах, надеждах и нейтральных взглядах.' },
                    { role: 'user', content: question }
                ],
                max_tokens: 150
            })
        });

        // Проверяем, успешен ли запрос
        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();

        // Проверяем, есть ли ожидаемые данные в ответе
        if (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) {
            const botAnswer = data.choices[0].message.content;
            output.innerHTML += `<p><strong>Бот:</strong> ${botAnswer}</p>`;
        } else {
            output.innerHTML += `<p><strong>Бот:</strong> Неожиданный формат ответа от сервера.</p>`;
        }
    } catch (error) {
        console.error('Ошибка:', error); // Выводим ошибку в консоль для отладки
        output.innerHTML += `<p><strong>Бот:</strong> Ошибка: ${error.message}. Попробуйте еще раз!</p>`;
    }

    output.scrollTop = output.scrollHeight;
});
