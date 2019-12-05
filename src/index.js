document.addEventListener('DOMContentLoaded', () => {
  // your solution here
  // grab DOM elements
  const listDiv = document.getElementById("app-content");
  const app = new TaskLister();

  const divList = createList();
  listDiv.append(divList)

  // listDiv.addEventListener("click", (e) => {
  //   console.log(e.target.querySelector('.delete-list'))
  //   if (e.target.querySelector('.delete-list').click()){
  //     console.log("click")
  //   }
  // })
  // let a = listDiv.querySelector('.delete-list')
  // console.log(a)
  // listDiv.append(dicList)


  let listArray = {}
  document.getElementById('create-list-form').addEventListener("submit", evt => {
    evt.preventDefault();
    let name = evt.target.querySelector("#new-list-title").value
    if(document.querySelectorAll("button[data-title]")){
      let newlist = new List(name)
      if(!(name in listArray)){
        listArray[name] = newlist
        if (Object.keys(listArray).length <= 1){
          let tasklister = new TaskLister()
          listDiv.prepend(tasklister.render())
        }
        divList.appendChild(newlist.render())
      }
      else{
        alert("List titles must be unique")
      }
    }
    let buttons=document.getElementsByTagName('button');
    console.log(buttons)
    for (let item of buttons) {
      item.addEventListener("click", evt => {
        removeList(item.id)
        delete listArray[item.id]
        if (Object.keys(listArray).length === 0){
          document.getElementById('create-task-form').remove();
        }
      })
    }

    evt.target.reset();    
  })


});

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

