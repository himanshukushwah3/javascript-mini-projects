const addNoteBtn = document.querySelector('#add-note');
const main = document.querySelector('#section-body')

// ? === Adding a Note ===
addNoteBtn.addEventListener('click', () => {
    addNote()
})

const addNote = (text = "") => {
    const note = document.createElement('div');
    note.classList.add('note')
    note.innerHTML = `
    <div class="tool">
        <i class="save fas fa-save"></i>
        <i class="trash fas fa-trash"></i>
    </div>
    <textarea>${text}</textarea>`;
    main.appendChild(note)
    saveNote()

    // ? === Deleting a Note ===
    note.querySelector('.trash').addEventListener('click', () => {
        note.remove();
        saveNote(); 
    })

    // ? === Focus Out save ===
    note.querySelector('textarea').addEventListener('focusout', () => {
        saveNote()
    })

    // ? === Save the Note ===
    note.querySelector('.save').addEventListener('click', () => {
        saveNote()
    })
}

const saveNote = () => {
    const notes = document.querySelectorAll('.note textarea');
    // console.log(notes);
    const data = [];
    notes.forEach(item => data.push(item.value))
    // console.log(data);
    if(data.length === 0){
        localStorage.removeItem('notes')
    }else{
        localStorage.setItem('notes', JSON.stringify(data))
    }
}

// ? === get data after refresh
(
    () => {
        const lsNotes = JSON.parse(localStorage.getItem('notes'));
        if(lsNotes === null){
            addNote()
        }else{
            lsNotes.forEach(item => {
                addNote(lsNotes)
            })
        }
        
        // if(lsNotes.length === 0){
        //     localStorage.removeItem('notes')
        // }else{
        //     addNote(lsNotes)
        // }
    }
)();