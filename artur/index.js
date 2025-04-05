function toggleContent() {
    var content = document.getElementById("content");
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block"; // Показываем содержимое
    } else {
        content.style.display = "none"; // Скрываем содержимое
    }
}


