const SITE_INPUT = "site";
const google = document.querySelector(".google"),
  naver = document.querySelector(".naver"),
  changeButton = document.querySelectorAll(".change-button");

const whichVisible = () => {
  const site = localStorage.getItem(SITE_INPUT);
  return site;
};

const setSearch = text => {
  localStorage.setItem(SITE_INPUT, text);
};

const handleChageBtn = e => {
  if (e.target.parentElement.parentElement.classList.contains("google")) {
    google.classList.add("hiding");
    naver.classList.remove("hiding");
    setSearch("naver");
  } else {
    naver.classList.add("hiding");
    google.classList.remove("hiding");
    setSearch("google");
  }
};

const setButton = () => {
  changeButton.forEach(btn => {
    btn.addEventListener("click", handleChageBtn);
  });
};

const searchInit = () => {
  const searchInput = whichVisible();
  if (searchInput === "naver") {
    google.classList.add("hiding");
  } else {
    naver.classList.add("hiding");
  }
  setButton();
};

searchInit();
