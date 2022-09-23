const body = document.querySelector("body");
const form = document.querySelector("form");

// Store element
function storeList() {
    window.localStorage.todoList = list.innerHTML;
}

function getTodo(){
    if (window.localStorage.todoList) {
        list.innerHTML = window.localStorage.todoList;
    } else {
        list.innerHTML = `<li>Aucune tâche à faire, cliquer sur un todo  pour le supprimer</li>`;
    }
}

window.addEventListener('load', getTodo);

// Add element
form.addEventListener('submit', (e) => {
    e.preventDefault();
    list.innerHTML += `<li>${todo.value}</li>`;
    todo.value ="";
    storeList();
});

// Remove element
list.addEventListener('click', (e) => {
    if (e.target.classList.contains("finished")) {
        e.target.remove();
    } else {
        e.target.classList.add("finished");
    }
    storeList();
});
