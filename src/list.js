class List {
  // your code here
  //next no add a new list
  constructor(name){
    this.name = name
    this.tasks = []
  }

  _renderList(name){
    let div = document.createElement("div")
    div.innerHTML = `
    <h2>
      ${name}
      <button id="${name}" class="delete-list">X</button>
    </h2>
    `
    let ul = document.createElement("ul")

    this.tasks.map(e => {
      console.log(e.render())
      ul.appendChild(e.render())
    })

    div.append(ul)
    return div
  }

  addtask(name, priority){
    let task = new Task(name, priority)
    this.tasks.push(task)
  }

  render(){
    return this._renderList(this.name)
  }
}
