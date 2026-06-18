const theme = document.querySelector(".theme");
const main = document.querySelector(".task-section");
const card = document.querySelectorAll(".card");
const form = document.querySelector("form");
const taskPopup = document.querySelector(".task-popup");
const createBtn = document.querySelector(".create-task");
const taskCards = document.querySelector(".task-cards");
const closeBtn = document.querySelector(".close");
const addTask = document.querySelector(".addTask");
const capture = document.querySelector("#capture");
const bubble = document.querySelector("#bubble");
const eventDisplay = document.querySelector(".event-display");
const pipelineParent = document.querySelector(".pipeline");
const pipelineDisplay = document.querySelector(".pipeline-meaning");
const pipelineText = document.querySelectorAll(".text");
let body = document.body;

// localStorage.setItem("theme", JSON.stringify(body.dataset.theme));
// let themelds = JSON.parse(localStorage.getItem("theme"));
// body.classList.add(`${themelds}`);

let taskArr = JSON.parse(localStorage.getItem("tasks")) || [];

let editIndex = null;

createBtn.addEventListener("click", () => {
  taskPopup.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  taskPopup.style.display = "none";
});

let ui = () => {
  taskCards.innerHTML = "";
  taskArr.forEach((elem, index) => {
    taskCards.innerHTML += `<div class="card">
                  <div class="card-heading">${elem.inputVal}</div>
                  <p>${elem.category}</p>
                  <div class="card-btns">
                      <button onclick="editCard('${elem.inputVal}')" class="edit-btn">Edit</button>
                      <button onclick="completeTask('${index}')" class="cmplt-btn">Complete</button>
                      <button onclick="deleteTask('${index}')" class="del-btn">Delete</button>
                  </div>
              </div>`;
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputVal = form[0].value;
  let category = form[1].value;

  if (inputVal.trim() === "" || category === "") {
    alert("Please Fill your task properly");
    return;
  }

  let obj = {
    inputVal,
    category,
  };

  if (editIndex != null) {
    taskArr[editIndex] = obj;
    localStorage.setItem("tasks", JSON.stringify(taskArr));
    editIndex = null;
  } else {
    taskArr.push(obj);
    localStorage.setItem("tasks", JSON.stringify(taskArr));
  }

  ui();

  form.reset();
  taskPopup.style.display = "none";
});

let editCard = (name) => {
  taskPopup.style.display = "flex";
  let task = taskArr.find((elem) => elem.inputVal === name);
  editIndex = taskArr.findIndex((elem) => elem.inputVal === name);
  form[0].value = task.inputVal;
  form[1].value = task.category;
};

let completeTask = (index) => {
   let cards = document.querySelectorAll(".card");
  cards[index].classList.toggle("completed");
  localStorage.setItem("tasks", JSON.stringify(taskArr));
};

let deleteTask = (index) => {
  taskArr.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(taskArr));
  ui();
};

theme.addEventListener("click", () => {
  body.classList.toggle("dark");
  // body.dataset.theme = body.getAttribute("class") || "light";

  theme.textContent = body.classList.contains("dark") ? "Light" : "Dark";
  // localStorage.setItem("theme", `'${body.dataset.theme}'`);
});

ui();

capture.addEventListener("click", () => {
  eventDisplay.innerHTML = "";
  eventDisplay.innerHTML += `<ol>
                    <li>Grand Parent</li>
                    <li>Parent</li>
                    <li>Child</li>
                </ol>`;
});
bubble.addEventListener("click", () => {
  eventDisplay.innerHTML = "";
  eventDisplay.innerHTML += `<ol>
                    <li>Child</li>
                    <li>Parent</li>
                    <li>Grand Parent</li>
                </ol>`;
});

let pipeline = [
  {
    name: "HTML",
    defination: "HTML is the structure of our webpage",
  },
  {
    name: "Parsing",
    defination:
      "Parsing means the browser reads the HTML characters and understands their structure.",
  },
  {
    name: "Tokenization",
    defination:
      "Tokenization breaks HTML into meaningful tokens like start tags, end tags, and text.",
  },
  {
    name: "DOM Tree",
    defination: "The DOM Tree is the object-based structure created from HTML.",
  },
  {
    name: "CSS",
    defination: "CSS is that file where we style our webpage",
  },
  {
    name: "CSSOM Tree",
    defination:
      "The CSSOM Tree is the object-based structure created from CSS rules.",
  },
  {
    name: "DOM Tree + CSSOM Tree",
    defination:
      "The browser combines structure from the DOM and styles from the CSSOM.",
  },
  {
    name: "Render Tree",
    defination:
      "The Render Tree contains visible nodes with final styles used for layout and painting.",
  },
];

pipelineParent.addEventListener("click", (e) => {
  pipelineDisplay.innerText = "";
  pipeline.forEach((elem) => {
    if (e.target.innerText === elem.name) {
      pipelineDisplay.innerText = elem.defination;
    }
  });
});
