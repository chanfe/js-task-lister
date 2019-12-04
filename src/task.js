class Task {
  // your code here
  constructor(title, priority="low") {
    this.title = title;
    this.priority = priority;
  }

  render() {
    return `
      <li>
        Task ${this.title}
        <button data-list-title="${this.title}" data-task-name="mocha" class="delete-task">X</button>
        <br>
        Priority: ${this.priority};
      </li>
      `;
  }
}
