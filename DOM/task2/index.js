function getItemsList() {
  const elementsList = document.querySelectorAll('.technology');
  console.dir(elementsList);
  return elementsList;
}
// getItemsList();
function getItemsArray() {
  const elements = document.querySelectorAll('.tool');
  const elementsArray = [...elements];
  console.dir([...elementsArray]);
  return elementsArray;
}
// getItemsArray();

export { getItemsArray, getItemsList };
