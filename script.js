
let nt_plcHoldr = document.querySelector(".note-placeholder");

// ----------adding note
let newNote = (text = '') => {
    nt_plcHoldr.style.display = "none";
    let main_cell = document.querySelector(".note-field");
    let note = document.createElement("div")

    note.classList.add("note")
    let htmlData = `
                <div class="nt-header">
                    <h3>Title</h3>
                    <i class="dlt_nt fa-regular fa-trash-can"></i>
                </div>
                <textarea name="nt-cell" id="nt-cell"></textarea>    
    `
    note.insertAdjacentHTML("afterbegin", htmlData);

    let dlt_noteBtn = document.querySelector(".dlt_nt");



    let delbtn = note.querySelector('.dlt_nt');
    delbtn.addEventListener('click', () => {

        note.remove();

        if (main_cell.children.length == 1) {
            nt_plcHoldr.style.display = "block";
        }
    })


    main_cell.appendChild(note);

}


let nt_btn = document.querySelector(".adding-note")

nt_btn.addEventListener("click", () => {
    newNote();
})


// // ---------------theme changing

// let themeBtn = document.querySelector(".thm-btn")
// let body = document.querySelector("body");
// themeBtn.addEventListener("click", () => {

//     body.classList.toggle("light_mode")
//     themeBtn.classList.toggle("fa-moon")

// })










// // ---------------dynamic footer year 

let year = document.querySelector("#cc-date");
let newDate = new Date().getFullYear();
year.innerHTML = newDate;




//------------setting link taget blank
let flw = document.querySelectorAll("a")

flw.forEach((ele) => {
    ele.setAttribute("target", "_blank")
})
