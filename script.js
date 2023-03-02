let titleBox = document.querySelector(".title-pupUp");
let closeIcon = document.querySelector(".close-title-btn");
let titleValue = document.querySelector("#title-input");

// add title popup animation------
closeIcon.addEventListener("click", () => {
    titleBox.classList.add("close-btn-active");
    titleBox.classList.remove("popupShow");
    titleValue.value = "";
})

let updateLSData = () => {
    let textAreaData = document.querySelectorAll("textarea");
    let data = [];
    textAreaData.forEach((note) => {
        return data.push(note.value);
    })

    if (data.length === 0) {
        localStorage.removeItem("notes")
    }
    else {
        localStorage.setItem('notes', JSON.stringify(data));
    }
}


// taking title from using ----------

// let titleSubmit = document.querySelector("#title-submit-btn");

// titleSubmit.addEventListener("click", (e) => {
//     e.preventDefault()
//     let noteTitle = titleValue.value;

//     if (noteTitle.length == 0) {
//         alert("Title is required")
//     } else {
//         newNote()
//         titleBox.classList.remove("popupShow");
//         titleValue.value = "";
//     }
// })

// taking title from using ----------

let nt_plcHoldr = document.querySelector(".note-placeholder");

// ----------adding note  funtion start
let newNote = (text = '') => {
    // if note cell is empty the placeholder will be displayed----

    nt_plcHoldr.style.display = "none";

    // main note cell adding on adding button to be click--

    let main_cell = document.querySelector(".note-field");
    let note = document.createElement("div");
    note.classList.add("note")
    let htmlData = `
                <div class="nt-header">
                    <h3>Note</h3>
                    <i class="dlt_nt fa-regular fa-trash-can"></i>
                </div>
                <textarea name="nt-cell" id="nt-cell" placeholder = "enter the info" spellcheck="false"></textarea>
                   
    `
    note.insertAdjacentHTML("afterbegin", htmlData);


    // text area refnce and local storage for saving notes---------


    let textArea = note.querySelector("textarea");
    textArea.value = text;

    textArea.addEventListener("input", (event) => {
        let value = event.target.value;
        updateLSData();
    });

    // delt note btn---------------


    let delbtn = note.querySelector('.dlt_nt');
    delbtn.addEventListener('click', () => {

        note.remove();
        updateLSData();

        if (main_cell.children.length == 1) {
            nt_plcHoldr.style.display = "block";
        }
    })

    main_cell.appendChild(note);
    updateLSData();
}

// ----------adding note  funtion end-----------


// adding title to input field replaces the note title--


// -------getting data from local server


const LSnotes = JSON.parse(localStorage.getItem("notes"));

if (LSnotes) {
    LSnotes.forEach((lsnote) => newNote(lsnote))
}


// ---------------adding btn funtionality


let nt_btn = document.querySelector(".adding-note")

nt_btn.addEventListener("click", () => {
    // titleBox.classList.add("popupShow")
    newNote()
})


// ---------------theme changing

let thmBtn = document.querySelector(".thm-btn")
let body = document.querySelector("body")
let thmLogo = thmBtn.querySelector(".fa-sun");

thmBtn.addEventListener('click', () => {
    body.classList.toggle("theme-changed")
    thmLogo.classList.toggle("fa-moon");
    cooKy();
})


// // ---------------dynamic footer year 

let year = document.querySelector("#cc-date");
let newDate = new Date().getFullYear();
year.innerHTML = newDate;


//------------setting link taget blank
let flw = document.querySelectorAll("a")

flw.forEach((ele) => {
    ele.setAttribute("target", "_blank");
})


// ------------storing theme changed input

let getTheme = localStorage.getItem("mode");

if (getTheme && getTheme === "theme-changed") {

    body.classList.add("theme-changed");
    thmLogo.classList.toggle("fa-moon");
}

let cooKy = () => {
    if (!body.classList.contains("theme-changed")) {
        return localStorage.setItem("mode", "normal-theme")
    }
    else {
        localStorage.setItem("mode", "theme-changed")
    }
}
