'use strict';

let tasks = [];

const updateTasks = () => {
  let tasksElm = document.querySelector('.todo__tasks');
  tasksElm.innerHTML = '';
  for (let i = 0; i < tasks.length; i++) {
    const itemElm = renderTask(tasks[i], i);
    tasksElm.appendChild(itemElm);
  }
}

const renderTask = (task, index) => {
  const itemElm = document.createElement('div');
  itemElm.className = 'todo__new';
  itemElm.dataset.index = index;
  itemElm.innerHTML = `<button></button><span>${task}</span>`;
  const buttonElm = itemElm.querySelector('button');
  buttonElm.className = 'btn-rmv';
  buttonElm.textContent = '-';
  buttonElm.addEventListener('click', removeTask);
  return itemElm;
}

const addTask = () => {
  const inputElm = document.querySelector('#new-task');
  if (inputElm.value) {
    tasks.push(inputElm.value);
    updateTasks();
    inputElm.value = '';
  }
}

const removeTask = (e) => {
  const index = e.target.dataset.index;
  tasks.splice(index, 1);
  updateTasks();
}


document.querySelector('.btn-add').addEventListener('click', addTask);

document.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    addTask();
  }
})
