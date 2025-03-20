let inpBox = document.getElementById('input');
let list = document.getElementById('list');

function add(){
    if (inpBox.value === "") {
        alert("First add some text ")
    } else {
        let li = document.createElement("li");
        li.innerHTML = inpBox.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inpBox.value = "";
    saveData();
} 

list.addEventListener("click", (el) => {
    if (el.target.tagName === 'LI') {
        el.target.classList.toggle('checked'); 
    saveData();
    }
    else if (el.target.tagName === 'SPAN') {
        el.target.parentElement.remove();
    saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("value", list.innerHTML);
}

function showTaskData() {
    list.innerHTML = localStorage.getItem("value");
}


showTaskData();