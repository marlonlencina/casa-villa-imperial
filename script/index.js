const header = document.querySelector("#header");

window.onscroll = function () {
  handleScroll();
};

const handleScroll = () => {
  if (window.pageYOffset > 90) {
    header.classList.add("bg-header-fixed");
  } else {
    header.classList.remove("bg-header-fixed");
  }
};

handleScroll();
