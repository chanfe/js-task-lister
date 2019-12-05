class TaskLister {
  // your solution here
  constructor(){

  }

  _renderList(){
    let form = document.createElement("form")
    form.id = "create-task-form"
    form.innerHTML = `
      <label for="parent-list">Select List:</label>
      <select id="parent-list">
        <!-- Major key alert:
        read the docs for HTML option selected:
        https://www.w3schools.com/tags/att_option_selected.asp -->
      <option value="My Dank List" selected>
        My Dank List
      </option>
      </select>
  
      <label for="new-task-description">Task description:</label>
      <input required type="text" id="new-task-description" placeholder="description">
  
      <label for="new-task-priority">Priority level:</label>
      <input type="text" id="new-task-priority" placeholder="priority">
      <input type="submit" value="Create New Task">
  `
    return form
  }

  render() {
    return this._renderList();
  }
}
