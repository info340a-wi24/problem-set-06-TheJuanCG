'use strict';

import { getIncompleteTasks } from './Model.js';

function renderSingleTask(task, markCompleteCallback) {
    let li = document.createElement('li');
    li.classList.add('list-group-item');
    li.textContent = " " + task.description;

    let button = document.createElement('button');
    button.classList.add('btn', 'btn-sm', 'btn-warning');

    let span = document.createElement('span');
    span.classList.add('material-icons-outlined');
    span.textContent = 'done';

    button.appendChild(span);

    button.addEventListener('click', () => {
        markCompleteCallback(task);
    });

    li.prepend(button);

    return li;
}

export function renderTaskList(markCompleteCallback) {
    let incompleteTasks = getIncompleteTasks();

    if (incompleteTasks.length === 0) {
        let div = document.createElement('div');
        div.textContent = 'None!';
        return div;
    }

    let ul = document.createElement('ul');
    ul.classList.add('list-group', 'list-group-flush');

    incompleteTasks.forEach(task => {
        let listItem = renderSingleTask(task, markCompleteCallback);
        ul.appendChild(listItem);
    });

    return ul;
}
