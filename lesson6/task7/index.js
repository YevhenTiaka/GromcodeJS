// ================= searchElem ===============================
const eventsListElem = document.querySelector('.events-list');
const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');

// ================= elemCreateFunc ============================
const logTarget = (text, color) => {
  eventsListElem.innerHTML += `<span style ="color:${color};margin-left:8px;">${text}</span>`;
};
const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');

// =================== clear BTN ===============================
const clearBtn = document.querySelector('.clear-btn');

const cleanWindow = () => {
  eventsListElem.textContent = '';
};

clearBtn.addEventListener('click', cleanWindow);
// ==================== remove btn ==============================
const btnRemove = document.querySelector('.remove-handlers-btn');
const removeFunc = () => {
  divElem.removeEventListener('click', logGreenDiv, false);
  divElem.removeEventListener('click', logGreenDiv);

  pElem.removeEventListener('click', logGreyP, true);
  pElem.removeEventListener('click', logGreenP);

  spanElem.removeEventListener('click', logGreySpan, true);
  spanElem.removeEventListener('click', logGreenSpan);
};

btnRemove.addEventListener('click', removeFunc);
// ====================== attach BTN ==============================
const attachBtn = document.querySelector('.attach-handlers-btn');
const attachedFunc = () => {
  divElem.addEventListener('click', logGreenDiv, false);
  divElem.addEventListener('click', logGreenDiv);

  pElem.addEventListener('click', logGreyP, true);
  pElem.addEventListener('click', logGreenP);

  spanElem.addEventListener('click', logGreySpan, true);
  spanElem.addEventListener('click', logGreenSpan);
};
attachBtn.addEventListener('click', attachedFunc);

attachedFunc();
