'use strict';

import initialTasks from './task-data.js';

let currentTaskList = initialTasks.map((task, index) => ({
    ...task,
    "id": index + 1
}));

export function getIncompleteTasks() {
    return currentTaskList.filter(task => task.status === 'incomplete');
}

export const addTask = (taskDescription) => {
    const lastId = currentTaskList.length > 0 ? currentTaskList[currentTaskList.length - 1].id : 0;
    currentTaskList = [...currentTaskList, {id: lastId + 1, description: taskDescription, status: 'incomplete'}];
}

export const markComplete = (taskId) => {
    currentTaskList = currentTaskList.map(task => {
        if (task.id === taskId) {
            return {
                ...task,
                status: "complete"
            };
        } else {
            return {...task};
        }
    });
}

// Update the markComplete() test case in Model.js module