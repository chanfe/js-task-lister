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
      if(!(newlist in listArray)){
        listArray[newlist] = 1
        divList.appendChild(newlist.render())
      }
      else{
        alert("List titles must be unique")
      }
      
    }
    evt.target.reset();
    console.log(listArray, name)
    console.log(divList.innerHTML)
    // listArray.map((ele) => divList.appendChild(ele.render()))
    
  })

  

  


});

//create a lists
function createList(){
  let div = document.createElement("div")
  div.id = "lists"
  return div
}

