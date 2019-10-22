const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function getValues(key) {
  var newtodos = todos.map(arr => {return arr[key]});

	return newtodos;
}

console.log(getValues('id'));
console.log(getValues('content'));
console.log(getValues('completed'));