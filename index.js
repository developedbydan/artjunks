const sideMenu = document.getElementById("side-menu");
const body = document.querySelector("body");

const openMenu = () => {
  sideMenu.classList.remove("disabled");
  sideMenu.classList.add("enabled");
  body.classList.add("overflow-hidden");
};

const closeMenu = () => {
  sideMenu.classList.remove("enabled");
  sideMenu.classList.add("disabled");
  body.classList.remove("overflow-hidden");
};
