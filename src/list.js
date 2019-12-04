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
      <button data-title="${name}" class="delete-list">X</button>
    </h2>
    `
    let ul = document.createElement("ul")
    div.append(ul)
    return div
  }

  addtask(name, priority){
    let task = new Task(name, priority)
    this.task.push(task)
  }

  render(){
    return this._renderList(this.name)
  }
}
