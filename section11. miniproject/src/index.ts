const input = document.getElementById("todo")! as HTMLInputElement;
const button = document.querySelector("button")!;
const form = document.querySelector("form")!;
const ul = document.querySelector("ul")!;

interface Todo {
  text: string;
  isDone: boolean;
}

const todos: Todo[] = getTodos();
todos.forEach(createTodo);

function getTodos(): Todo[] {
  const todos = localStorage.getItem("todos");
  if (todos === null) return [];
  return JSON.parse(todos);
}

function createTodo(todo: Todo) {
  const text = todo.text;
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = todo.isDone;
  checkbox.addEventListener("change", function (e) {
    todo.isDone = checkbox.checked;
    localStorage.setItem("todos", JSON.stringify(todos));
  });

  const li = document.createElement("li");

  li.append(text);
  li.append(checkbox);

  ul.append(li);
}

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();

  const todo: Todo = {
    text: input.value,
    isDone: false,
  };

  todos.push(todo);

  localStorage.setItem("todos", JSON.stringify(todos));

  createTodo(todo);
  input.value = "";
}

form.addEventListener("submit", handleSubmit);
