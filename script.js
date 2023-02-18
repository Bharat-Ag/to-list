let noteBtn = document.querySelector(".btn")


let ntPlaceholder = document.querySelector(".nt-placeholder");


let addNewNote = (text = '') => {

    ntPlaceholder.style.display = "none";

    let pDiv = document.querySelector(".nt-container")
    let note = document.createElement('div');
    note.classList.add("note");
    let htmlData = `
                
    
            
             <div class="opration">
                <h3>Title</h3>
                <div class="alert">
                      <button class="edit" title="create new note">
                          <i class=" edit-icon fa-regular fa-pen-to-square"></i>
                      </button>
                      <button class="delete" title="delete">
                          <i class=" del-icon fa-solid fa-trash"></i>
                      </button>
                 </div>
            </div>

            <div class="writing ">
                <textarea class="text" spellcheck="true" placeholder="write your notes here.."></textarea>
            </div>`;

    note.insertAdjacentHTML("afterbegin", htmlData);


    let delBtn = note.querySelector('.del-icon');
    delBtn.addEventListener("click", () => {

        note.remove()
    })




    





    pDiv.appendChild(note);

}
noteBtn.addEventListener("click", () =>
    addNewNote()
);








































// ---------------dynamic footer year 

let year = document.querySelector(".year");
 let newDate = new Date().getFullYear();
 year.innerHTML = newDate;

