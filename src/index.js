document.addEventListener('DOMContentLoaded', () => {
  // your solution here
  // grab DOM elements
  const listDiv = document.getElementById("app-content");
  

  const divList = createList();
  listDiv.append(divList)

  let listObj = {}
  const app = new TaskLister();

  document.getElementById('create-list-form').addEventListener("submit", evt => {
    evt.preventDefault();
    let name = evt.target.querySelector("#new-list-title").value
    if(document.querySelectorAll("button[data-title]")){
      let newlist = new List(name)
      if(!(name in listObj)){
        listObj[name] = newlist
        app.add_option(name)
        if (Object.keys(listObj).length <= 1){
          listDiv.prepend(app.render())
        }
        else{
          document.getElementById('create-task-form').remove();
          listDiv.prepend(app.render())
        }

        divList.innerHTML = ""

        Object.values(listObj).map(e => {
          divList.appendChild(e.render())
        }) 

      }
      else{
        alert("List titles must be unique")
      }
    }
    let buttons=document.getElementsByTagName('button');
    
    for (let item of buttons) {
      item.addEventListener("click", evt => {
        removeList(item.id)
        delete listObj[item.id]
        app.remove_option(item.id)

        if (Object.keys(listObj).length === 0){
          document.getElementById('create-task-form').remove();
        }
        else{          
          document.getElementById('create-task-form').remove();
          listDiv.prepend(app.render())
        }
      })
    }

    evt.target.reset();    
  })


});

function listean(listObj, divList){
  document.getElementById('create-task-form').addEventListener("submit", evt => {
    evt.preventDefault();
    let name = evt.target.querySelector("#parent-list").value
    let descript = evt.target.querySelector("#new-task-description").value
    let priority = evt.target.querySelector("#new-task-priority").value
    if (priority === ""){
      priority = "low"
    }
    listObj[name].addtask(descript, priority)

    console.log(divList)
    divList.innerHTML = ""

    Object.values(listObj).map(e => {
      console.log(e)
      divList.appendChild(e.render())
    }) 
    
    evt.target.reset(); 
  })
}

//create a lists
function createList(){
  let div = document.createElement("div")
  div.id = "lists"
  return div
}

function removeList(name){
  var elem = document.getElementById(name);
  console.log(elem.parentNode.parentNode)
  elem.parentNode.parentNode.remove();
}

