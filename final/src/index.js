import _ from 'lodash';
import './index.css';
import imagen from './assets/imagen.png';
import data from './assets/data.csv';

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js').then(
            registration => {
                console.log("SW registrado", registration);
            }
        ).catch(
            error => {
                console.log("SW no registrado", error);
            }
        );
    });
}

let myData = [...data];

function countPending(myTasks) {
    const totalPending = _.reduce(myTasks, function(sum, task) {
        if (task[1] === 'pending') {
            return sum + 1;
        }
        return sum;
    }, 0);

    const pendingDiv = document.getElementById('pending-counter');
    pendingDiv.innerText = `Pending Tasks: ${totalPending}`;
}

function myImage() {
    const myImage = new Image();
    myImage.src = imagen;
    myImage.alt = 'Vector de idea creado por gstudioimagen - www.freepik.es';

    return myImage;
}

function mainHeader() {
    const myDiv = document.createElement('div');
    myDiv.classList.add('main-header');

    const myText = document.createElement('span');
    myText.innerText = 'ToDo List';

    myDiv.appendChild(myText);
    myDiv.appendChild(myImage());

    return myDiv;
}

function triggerTask(index) {
    const markCell = document.getElementById(`mark-cell-${index}`);
    const taskCell = document.getElementById(`task-cell-${index}`);
    const statusCell = document.getElementById(`status-cell-${index}`);

    const status = statusCell.innerText.toLowerCase();
    const newStatus = status === 'pending' ? 'done' : 'pending';

    markCell.classList.remove(status);
    markCell.classList.add(newStatus);

    taskCell.classList.remove(status);
    taskCell.classList.add(newStatus);

    statusCell.classList.remove(status);
    statusCell.classList.add(newStatus);
    statusCell.innerText = newStatus;

    myData[index][1] = newStatus;
    countPending(myData);
}

function gridList( dataGrid ) {
    const myGrid = document.createElement('div');
    myGrid.classList.add('main-grid');

    const column0 = document.createElement('div');
    column0.classList.add('header-cell', 'mark-cell');
    myGrid.appendChild(column0);

    const column1 = document.createElement('div');
    column1.classList.add('header-cell', 'left-cell');
    column1.innerText = 'ToDo';
    myGrid.appendChild(column1);

    const column2 = document.createElement('div');
    column2.classList.add('header-cell', 'right-cell');
    column2.innerText = 'Status';
    myGrid.appendChild(column2);

    dataGrid.forEach((element, index) => {
        const itemStatus = element[1];

        const markCell = document.createElement('button');
        markCell.addEventListener('click', () => triggerTask(index));
        markCell.classList.add('task-cell', 'mark-cell', itemStatus);
        markCell.setAttribute('id', `mark-cell-${index}`);
        myGrid.appendChild(markCell);

        const taskCell = document.createElement('div');
        taskCell.classList.add('task-cell', 'left-cell', itemStatus);
        taskCell.innerText = element[0];
        taskCell.setAttribute('id', `task-cell-${index}`);
        myGrid.appendChild(taskCell);
    
        const statusCell = document.createElement('div');
        statusCell.innerText = itemStatus;
        statusCell.classList.add('status-cell', 'right-cell', itemStatus);
        statusCell.setAttribute('id', `status-cell-${index}`);
        myGrid.appendChild(statusCell);
    });

    return myGrid;
}

function mainComponent() {
    const element = document.createElement('div');
    element.classList.add('main-element');
    element.appendChild(mainHeader());
    element.appendChild(gridList(data));

    return element;
}

document.body.appendChild(mainComponent());
countPending(myData);