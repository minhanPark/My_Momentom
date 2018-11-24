const clockText = document.querySelector(".clock h1");

const setTimeText = text => {
  clockText.innerHTML = text;
};

const getTime = () => {
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const text = `${hours < 10 ? `0${hours}` : hours} : ${
    minutes < 10 ? `0${minutes}` : minutes
  } : ${seconds < 10 ? `0${seconds}` : seconds}`;
  setTimeText(text);
};

const clockInit = () => {
  getTime();
  setInterval(getTime, 1000);
};

clockInit();
