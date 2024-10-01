document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".menu-burger");
  const menuList = document.querySelector(".menu__list");
  const title = document.querySelector(".content__title");
  const scrollItems = document.querySelectorAll(".anim");

  if (burger && menuList) {
    burger.addEventListener("click", () => {
      burger.classList.toggle("active");
      menuList.classList.toggle("active");
    });
  }

  if (title) {
    title.classList.add("_active");
  }

  const scrollAnimation = () => {
    const windowCenter = window.innerHeight + window.scrollY;

    scrollItems.forEach((el) => {
      const scrollOffset =
        el.getBoundingClientRect().top + window.scrollY + el.offsetHeight / 2;

      if (windowCenter >= scrollOffset) {
        el.classList.add("animation-class");
      } else {
        el.classList.remove("animation-class");
      }
    });
  };

  let scrollTimeout;
  const handleScroll = () => {
    if (!scrollTimeout) {
      scrollTimeout = setTimeout(() => {
        scrollAnimation();
        scrollTimeout = null;
      }, 100);
    }
  };

  window.addEventListener("scroll", handleScroll);
});
