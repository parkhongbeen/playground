const todos = [
  { id: 3, content: 'HTML', completed: false},
  { id: 2, content: 'CSS', completed: true},
  { id: 1, content: 'Javascript', completed: false},
];

function render() {
  let html = '';

  todos.forEach(function(todo){
    html += `<li id="${todo.id}">
    <label><input type="checkbox"${todo.completed ? "checked" : ""}>${todo.content}</label>
</li>\n`;
  });
  return html;
}

console.log(render());


// let html = '';
// for(let i=0; i<todos.length; i++) {
//   const todo = todos[i];
//   html += `<li id="${todo.id}">
//   <label><input type="checkbox"${todo.completed ? "checked" : ""}>${todo.content}</label>
// </li>\n`;
// }