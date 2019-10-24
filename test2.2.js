const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function getValues(key) {
 let new_todos = todos.map( function(arr){
    return arr[key]
 })
 return new_todos
}

console.log(getValues('id'));
console.log(getValues('content'));
console.log(getValues('completed'));


// return todos.map((todo, i) => todo[key]);
