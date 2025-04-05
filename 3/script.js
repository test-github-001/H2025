const input = document.getElementById("user-input");
const chatLog = document.getElementById("chat-log");

input.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    const userText = input.value.trim();
    if (userText !== "") {
      chatLog.innerHTML += `<p><strong>Я:</strong> ${userText}</p>`;
      input.value = "";
      respond(userText);
    }
  }
});

function respond(message) {
  const responses = [
    "привет я ии спрашивай что угодно!",
    "Обрабатываю запрос...",
    "чем я могу помочь",
    "Я ТЕБЕ НУЖЕН НЕ ТАК ЛИ?",
    "ИИ МИР поможет во всём!"
  ];
  const response = responses[Math.floor(Math.random() * responses.length)];
  setTimeout(() => {
    chatLog.innerHTML += `<p><strong>ИИ:</strong> ${response}</p>`;
    chatLog.scrollTop = chatLog.scrollHeight;
  }, 1000);
}