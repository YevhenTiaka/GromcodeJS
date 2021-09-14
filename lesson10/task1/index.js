const addImage = (imgSrc, callback) => {
  const imgElem = document.createElement('img');
  imgElem.setAttribute('alt', 'My Photo');
  imgElem.src = imgSrc;
  const containerElem = document.querySelector('.page');
  containerElem.append(imgElem);

  const onImageLoaded = () => {
    const width = imgElem.width;
    const height = imgElem.height;

    callback(null, width, height);
  };
  imgElem.addEventListener('load', onImageLoaded);
  imgElem.addEventListener('error', () => callback('Image load is failed'));
};
const imgSrc =
  'https://gromcode.s3.eu-central-1.amazonaws.com/courses/front-end/lessons/javascript-full/lesson29/task1/example.png';
// callack function
const onImageLoaded = (error, imgElem) => {
  if (error) {
    console.log(error);
    return;
  }

  const { width, height } = imgElem;

  const sizeElem = document.querySelector('.image-size');

  sizeElem.textContent = `${width} x ${height}`;
};
addImage(imgSrc, onImageLoaded);
