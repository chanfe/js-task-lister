class Task {
  // your code here
  constructor(title, priority) {
    this.title = title;
    this.priority = priority;
  }

  _rendertask(title, priority){
    let li = document.createElement("li")
    li.innerHTML = `
    Task: ${title}
    <button data-list-title="${title}" data-task-name="mocha" class="delete-task">X</button>
    <br>
    Priority: ${priority}
    `
    return li
  }

  render() {
    return this._rendertask(this.title, this.priority)
  }
}
