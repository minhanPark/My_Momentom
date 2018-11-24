const TODO = "todo";
const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-input");
const todo_ul = document.querySelector(".todo-list");
let todoList = [];

const getTodoList = () => {
  const todo = localStorage.getItem(TODO);
  if (todo === null) {
    return todoList;
  } else {
    const parsedTodo = JSON.parse(todo);
    todoList = parsedTodo;
    return todoList;
  }
};

const setTodoList = () => {
  localStorage.setItem(TODO, JSON.stringify(todoList));
};

const sliceArr = index => {
  const first = todoList.slice(0, index);
  const last = todoList.slice(index + 1, todoList.length);
  const newArr = [...first, ...last];
  return newArr;
};

const paintTodo = todos => {
  todo_ul.innerHTML = "";
  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = todo.text;
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";
    deleteBtn.addEventListener("click", handleDeleteBtn);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    li.id = index;
    todo_ul.appendChild(li);
  });
};

const handleDeleteBtn = e => {
  const parentId = Number(e.target.parentElement.id);
  todoList = sliceArr(parentId);
  setTodoList();
  paintTodo(todoList);
};

const handleTodoSubmit = e => {
  e.preventDefault();
  const currentValue = todoInput.value;
  const newText = { text: currentValue };
  const newTodoList = [...todoList, newText];
  todoList.push(newText);
  setTodoList();
  paintTodo(newTodoList);
  todoInput.value = "";
};

const todoInit = () => {
  const todo = getTodoList();
  paintTodo(todo);
  todoForm.addEventListener("submit", handleTodoSubmit);
};

todoInit();

//배열을 저장
