// function getInterval(start, end) {
//   var start = new Date().getTime();
//   var end = new Date('05/29/2017').getTime();
//   // Два объекта даты, разница в миллисекундах
//   var interval = end - start;
//   // Два объекта даты, разница в секундах
//   // interval = interval / 1000;
//   interval /= 1000;
//   // Находим разницу в днях / часах / минутах / секундах

//   day = Math.round(interval / 60 / 60 / 24);
//   hour = Math.round((interval / 60 / 60) % 24);
//   minute = Math.round((interval / 60) % 60);
//   second = Math.round(interval % 60);
// }

// console.log(getInterval());
const date1 = new Date(2011, 1, 12, 13, 12, 10);
const date2 = new Date(2011, 1, 1, 0, 0, 0);
const diff = startDate > endDate ? startDate - endDate : endDate - startDate;
const milisecInDay = 86400000;
const days = diff / milisecInDay;
const hours = new Date(diff).getUTCHours();
const minutes = new Date(diff).getMinutes();
const seconds = new Date(diff).getSeconds();
return `${Math.floor(days)}d ${hours}h ${minutes}m ${seconds}s`;
};
console.log(getDiff(date1, date2));

const getDiff = (startDate, endDate) => {
  // let diff = null;
  // if (startDate > endDate) {
  //   diff = startDate - endDate;
  // } else {
  //   diff = endDate - startDate;
  // }
  const diff = startDate > endDate ? startDate - endDate : endDate - startDate;
  const milisecInDay = 86400000;
  const days = diff / milisecInDay;
  const hours = new Date(diff).getUTCHours();
  const minutes = new Date(diff).getMinutes();
  const seconds = new Date(diff).getSeconds();
  return `${Math.floor(days)}d ${hours}h ${minutes}m ${seconds}s`;
};

const getDiff = (startDate, endDate) => {
  const diff = startDate > endDate ? startDate - endDate : endDate - startDate;
  const dayInMs = 86400000;
  const days = diff / dayInMs;
  const hours = new Date(diff).getUTCHours();
  const minutes = new Date(diff).getMinutes();
  const seconds = new Date(diff).getSeconds();
  return `${Math.floor(days)}d ${hours}h ${minutes}m ${seconds}s`
};