const nameIcon = document.querySelector(".header .icon");
const greetingText = document.querySelector(".greeting");
const nameInput = document.querySelector(".js-name");
const defaultNickname = "Boss";
const LSName = "nickname";
const nickname = document.querySelector(".nickname");

const getLSName = () => {
  const name = localStorage.getItem(LSName);
  return name;
};

const setLSName = name => {
  localStorage.setItem(LSName, name);
};

const visibleNameInput = () => {
  if (nameInput.classList.contains("hiding")) {
    greetingText.classList.add("hiding");
    nameIcon.classList.add("hiding");
    nameInput.classList.remove("hiding");
  } else {
    nameInput.classList.add("hiding");
    greetingText.classList.remove("hiding");
    nameIcon.classList.remove("hiding");
  }
};

const handleNickname = e => {
  if (e.key === "Enter") {
    nickname.innerText = e.target.value;
    visibleNameInput();
    setLSName(e.target.value);
  }
};

nameIcon.addEventListener("click", visibleNameInput);
nameInput.addEventListener("keypress", handleNickname);
const nameInit = () => {
  const name = getLSName();
  if (name) {
    nickname.innerText = name;
  } else {
    nickname.innerText = defaultNickname;
  }
};

nameInit();
