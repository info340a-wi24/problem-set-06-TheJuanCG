'use strict';

import * as model from "./Model.js";
import { renderTaskList } from "./View.js"; 

function markCompleteCallback(task) {
    model.markComplete(task.id);
    renderTaskView(); 
}

export function renderTaskView() {
    const tasksRoot = document.querySelector('#tasks-root');
    tasksRoot.innerHTML = "";
    const taskList = renderTaskList(markCompleteCallback);
    tasksRoot.appendChild(taskList);
}

document.querySelector('#add-task-button').addEventListener('click', () => {
    const taskInput = document.querySelector('#task-input');
    const taskDescription = taskInput.value;

    if (taskDescription) {
        model.addTask(taskDescription);
        taskInput.value = '';
        renderTaskView();
    }
});
