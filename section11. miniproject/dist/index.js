"use strict";
const input = document.getElementById("todo");
const button = document.querySelector("button");
const form = document.querySelector("form");
const ul = document.querySelector("ul");
const todos = getTodos();
todos.forEach(createTodo);
function getTodos() {
    const todos = localStorage.getItem("todos");
    if (todos === null)
        return [];
    return JSON.parse(todos);
}
function createTodo(todo) {
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
function handleSubmit(e) {
    e.preventDefault();
    const todo = {
        text: input.value,
        isDone: false,
    };
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
    createTodo(todo);
    input.value = "";
}
form.addEventListener("submit", handleSubmit);
