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
divElem.addEventListener('click', logGreenP);

pElem.addEventListener('click', logGreyP, true);
pElem.addEventListener('click', logGreenP);

spanElem.addEventListener('click', logGreySpan, true);
spanElem.addEventListener('click', logGreenSpan);

const clearBtn = document.querySelector('.clear-btn');
//clear BTN
const eventList = document.querySelector('.events-list');
const cleanWindow = () => {
  eventList.textContent = '';
};

clearBtn.addEventListener('click', cleanWindow);
// remove btn
const btnRemove = document.querySelector('.remove-handlers-btn');
const removeFunc = () => {
  divElem.removeEventListener('click', logGreenDiv);
  divElem.removeEventListener('click', logGreenP);

  pElem.removeEventListener('click', logGreyP, true);
  pElem.removeEventListener('click', logGreenP);

  spanElem.removeEventListener('click', logGreySpan, true);
  spanElem.removeEventListener('click', logGreenSpan);
};

btnRemove.addEventListener('click', removeFunc);
//attach BTN
const attachBtn = document.querySelector('.attach-handlers-btn');
const attachedFunc = () => {
  divElem.addEventListener('click', logGreenDiv);
  divElem.addEventListener('click', logGreenP);

  pElem.addEventListener('click', logGreyP, true);
  pElem.addEventListener('click', logGreenP);

  spanElem.addEventListener('click', logGreySpan, true);
  spanElem.addEventListener('click', logGreenSpan);
};

attachBtn.addEventListener('click', attachedFunc);
attachedFunc();
