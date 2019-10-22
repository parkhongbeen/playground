const todos = [
  { id: 3, content: 'HTML', completed: false},
  { id: 2, content: 'CSS', completed: true},
  { id: 1, content: 'Javascript', completed: false},
];

function render() {
  let html = '';

  todos.forEach(function(todo){
    html += `<li id="${todo.id}">\n<label><input type="checkbox" ${todo.completed ? " checked" : ""}>${todo.content}</label>\n</li>\n`

  })

  return html;
}

console.log(render());