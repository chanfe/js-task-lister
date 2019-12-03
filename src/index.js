document.addEventListener('DOMContentLoaded', () => {
  // your solution here
  // grab DOM elements
  const listDiv = document.getElementById("app-content");

  // const app = new TaskLister();

  const divLists = createList()

  listDiv.append(divLists)

  document.getElementById('create-list-form').addEventListener("submit", evt => {
    evt.preventDefault();
    let name = evt.target.querySelector("#new-list-title").value
    if(document.querySelectorAll("button[data-title]"))
    divLists.append(renderTask(name))
  })

});

function find(){
  
}

//create a lists
function createList(){
  let div = document.createElement("div")
  div.id = "lists"
  return div
}

function renderTask(name){
  let div = document.createElement("div")
  div.innerHTML = `
  <h2>
    ${name}
    <button data-title="${name}" class="delete-list">X</button>
  </h2>
  `
  let ul = document.createElement("ul")
  div.append(ul)
  return div
}
