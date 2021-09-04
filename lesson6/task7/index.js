const logTarget = (text, color) => {
  const eventsListElem = document.querySelector('.events-list');
  eventsListElem.innerHTML += `<span style ="color:${color};margin-left:8px;">div</span>`;
};
const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');
const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');
divElem.addEventListener('click', logGreenDiv);
pElem.addEventListener('click', logGreenP);

pElem.addEventListener('click', logGreyP, true);
pElem.addEventListener('click', logGreenP);

spanElem.addEventListener('click', logGreySpan, true);
spanElem.addEventListener('click', logGreenSpan);

const clearBtn = document.querySelector('.clear-btn');
const cleanWindow = () => {
  const eventList = document.querySelector('.events-list');
  eventList.textContent = '';
};
clearBtn.addEventListener('click', cleanWindow);
const btnRemove = document.querySelector('.remove-handlers-btn');
btnRemove.removeEventListener('click', logTarget);
const attachBtn = document.querySelector('.attach-handlers-btn');
attachBtn.addEventListener('click', logTarget);
console.log(attachBtn);
