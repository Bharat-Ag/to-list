let noteBtn = document.querySelector(".btn");
let ntPlaceholder = document.querySelector(".nt-placeholder");


let addNewNote = (text = '') => {

    let pDiv = document.querySelector(".nt-container");
    ntPlaceholder.style.display = "none";

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
        let dltModal = document.querySelector(".dlt-modal");
        let modalBtn = dltModal.querySelectorAll("button");

        dltModal.style.transform = "scale(1)";
        dltModal.style.transform = "translate(-50% ,-50%)";

        note.remove()


        if (pDiv.children.length == 1) {
            ntPlaceholder.style.display = "block";
        }
    })

    pDiv.appendChild(note);

}
noteBtn.addEventListener("click", () =>
    addNewNote()
);




// ---------------theme changing

let themeBtn = document.querySelector(".thm-btn")
let body = document.querySelector("body");
themeBtn.addEventListener("click", () => {

    body.classList.toggle("light_mode")
    themeBtn.classList.toggle("fa-moon")

})










// ---------------dynamic footer year 

let year = document.querySelector(".year");
let newDate = new Date().getFullYear();
year.innerHTML = newDate;

