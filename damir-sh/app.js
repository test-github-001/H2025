document.addEventListener("DOMContentLoaded", function () {
    const openPopupBtn = document.getElementById('openPopup');
    const closePopupBtn = document.getElementById('closePopup');
    const saveNoteBtn = document.getElementById('saveNote');
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
    const noteText = document.getElementById('noteText');
    const notesList = document.getElementById('notesList');

    
    openPopupBtn.addEventListener('click', function () {
        popup.style.display = 'block';
        overlay.style.display = 'block';
    });

    
    closePopupBtn.addEventListener('click', function () {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });

    overlay.addEventListener('click', function () {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });

    
    saveNoteBtn.addEventListener('click', function () {
        let text = noteText.value.trim();
        if (text !== '' && text !== "Что вы думаете по этой теме?") {
            const note = document.createElement('div');
            note.classList.add('note');
            note.textContent = text;
            notesList.appendChild(note);

            
            noteText.value = "Что вы думаете по этой теме?";
            
            
            popup.style.display = 'none';
            overlay.style.display = 'none';
        }
    });
});