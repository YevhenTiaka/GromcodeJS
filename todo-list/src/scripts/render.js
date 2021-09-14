import { getItem } from './storage.js';

const listElem = document.querySelector('.list');
export const renderTasks = () => {
  listElem.innerHTML = '';
  const taskList = getItem('tasksList') || [];
  const listItemsElems = taskList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const listItemElem = document.createElement('li');

      listItemElem.classList.add('list-item');
      if (done) {
        listItemElem.classList.add('list-item_done');
      }
      const checkboxElem = document.createElement('input');
      checkboxElem.setAttribute('type', 'checkbox');
      checkboxElem.checked = done;
      checkboxElem.classList.add('list__item-checkbox');
      listItemElem.append(checkboxElem, text);
      return listItemElem;
    });
  listElem.append(...listItemsElems);
};
