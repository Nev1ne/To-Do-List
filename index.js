import './styles.scss';

import { listContainer, createItemTask } from './modules/renderTasks';
import {
  dragStart, dragEnd, dragOver, dragDrop,
} from './modules/dragDrop';
import { checkBoxStatus, changeStyleTask } from './modules/checkStatus';
import { Task, inputTask, addTask } from './modules/addtask';
import {
  clearCompletedTasks, removeAllIcon, removeAllItems, removeCompletedItem, removeSelectedItem,
} from './modules/remove';

let toDoTasks = [
  {
    description: 'Go to the gym',
    completed: false,
    index: 0,
  },
  {
    description: 'Visit Dubai',
    completed: true,
    index: 1,
  },
  {
    description: 'Watch the sunset',
    completed: false,
    index: 2,
  },
];

const displayTasks = () => {
  listContainer.innerHTML = '';
  toDoTasks.forEach((task) => createItemTask(task));
};

const refrestCompletedTask = (bool, element) => {