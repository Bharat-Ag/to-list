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
    let notes = [];

    textAreaData.forEach((note) => {
        return notes.push(note.value);
    })

    localStorage.setItem('notes', JSON.stringify(notes));
}


let nt_plcHoldr = document.querySelector(".note-placeholder");

// ----------adding note
let newNote = (text = '') => {

    // if note cell is empty the placeholder will be displayed----

    nt_plcHoldr.style.display = "none";

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let dateObj = new Date();
    nt_month = monthNames[dateObj.getMonth()]
    nt_date = dateObj.getDate()
    nt_year = dateObj.getFullYear()

    // main note cell adding on adding button to be click--

    let main_cell = document.querySelector(".note-field");
    let note = document.createElement("div");
    note.classList.add("note")
    let htmlData = `
                <div class="nt-header">
                    <h3>title</h3>
                    <i class="dlt_nt fa-regular fa-trash-can"></i>
                </div>
                <textarea name="nt-cell" id="nt-cell" placeholder = "enter the info" spellcheck="false"></textarea>
                <div class="nt-date">
                    <span id="nt-date">${nt_month}</span>
                    <span id="nt-date">${nt_date} ,</span>
                    <span id="nt-date">${nt_year}</span>
                </div>    
    `
    note.insertAdjacentHTML("afterbegin", htmlData);


    // text area refnce and local storage for saving notes---------


    let textArea = note.querySelector("textarea");
    textArea.value = text;

    textArea.addEventListener("input", (event) => {
        const value = event.target.value;
        console.log(value);
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
}


// adding title to input field replaces the note title--
let titleSubmit = document.querySelector("#title-note-btn");

titleSubmit.addEventListener("click", (e) => {
    e.preventDefault()
    let noteTitle = titleValue.value;

    if (noteTitle.length == 0) {
        alert("Title is required")
    } else {
        newNote()
        titleBox.classList.remove("popupShow");
        titleValue.value = "";
    }
})

// -------getting data from local server


const notes = JSON.parse(localStorage.getItem("notes"));

if (notes) {
    notes.forEach((note) => newNote(note))
}


// ---------------adding btn funtionality


let nt_btn = document.querySelector(".adding-note")

nt_btn.addEventListener("click", () => {
    titleBox.classList.add("popupShow")
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
