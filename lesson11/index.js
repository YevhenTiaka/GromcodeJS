const addImage = (imgSrc, callback) => {
  const imgElem = document.createElement('img');
  imgElem.setAttribute('alt', 'My Photo');
  imgElem.src = imgSrc;
  const containerElem = document.querySelector('.page');
  containerElem.append(imgElem);
  const onImageLoaded = () => {
    const width = imgElem;
    const height = imgElem;
    callback(width, height);
  };
  imgElem.addEventListener('load', onImageLoaded);
};
const imgSrc =
  'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg';
// callback function
const onImageLoaded = ({ width, height }) => {
  const sizeElem = document.querySelector('.image-size');
  sizeElem.textContent = `${width} x ${height}`;
};
addImage(imgSrc, onImageLoaded);
