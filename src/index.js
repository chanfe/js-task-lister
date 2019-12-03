document.addEventListener('DOMContentLoaded', () => {
  // your solution here
  // grab DOM elements
  const listDiv = document.getElementById("app-content");
  const app = new TaskLister();

  const divList = createList();
  listDiv.append(divList)

  let list = new List("aaaa")
  console.log(list.render())
  divList.append(list.render())

  listDiv.addEventListener("click", (e) => {
    console.log(e.target)
    if (e.target){

    }
  })

  // listDiv.append(dicList)



  // document.getElementById('create-list-form').addEventListener("submit", evt => {
  //   evt.preventDefault();
  //   let name = evt.target.querySelector("#new-list-title").value
  //   if(document.querySelectorAll("button[data-title]")){
  //     divLists.append(new List(name))
  //   }
  // })

  


});

//create a lists
function createList(){
  let div = document.createElement("div")
  div.id = "lists"
  return div
}

