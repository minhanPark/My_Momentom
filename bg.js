const IMAGE = 8;
// const bg = document.querySelector(".js-bg");
const bg = document.querySelector("body");

const randomNum = () => {
  const random = Math.floor(Math.random() * IMAGE) + 1;
  return random;
};
const handleImage = () => {
  const num = randomNum();
  bg.style.backgroundImage = `url('./image/${num}.jpg')`;
};

const bgInit = () => {
  handleImage();
};
bgInit();
