let inputfeild = document.querySelector("input");
let btn = document.querySelector("button");
// console.log(inputfeild,btn);
let taskcontainer = document.querySelector(".tasks");
let clearbtn = document.querySelector(".clearbtn");
btn.addEventListener("click", (e) => {
  // console.log(e.target);
  let inputval = inputfeild.value;
  addtask(inputval);
});
inputfeild.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    addtask(inputfeild.value);
  }
});
function addtask(value) {
  if (value === "") {
    alert("OOPS...You must write something!!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = value;
    taskcontainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    clearbtn.style.visibility = "visible";

    inputfeild.value = "";
    inputfeild.focus();

    savedata();
  }
}
taskcontainer.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName == "LI") {
      e.target.classList.toggle("checked");
      savedata();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      savedata();
    }
  },
  false
);

function savedata() {
  localStorage.setItem("data", taskcontainer.innerHTML);
}
function showdata() {
  taskcontainer.innerHTML = localStorage.getItem("data");
}
showdata();

clearbtn.addEventListener("click", (e) => {
  taskcontainer.remove();
  clearbtn.style.visibility = "hidden";
});
