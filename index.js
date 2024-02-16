const sideMenu = document.getElementById("side-menu");
const main = document.getElementsByTagName("main");

const openMenu = () => {
  sideMenu.classList.remove("disabled");
  sideMenu.classList.add("enabled");
  main.classList.add("overflow-hidden");
};

const closeMenu = () => {
  sideMenu.classList.remove("enabled");
  sideMenu.classList.add("disabled");
  main.classList.remove("overflow-hidden");
};
