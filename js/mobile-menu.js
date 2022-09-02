(() => {
    const refs = {
      openMenuBtn: document.querySelector(".mobile-menu__btn-open"),
      closeMenuBtn: document.querySelector(".mobile-menu__btn-close"),
      menu: document.querySelector(".mobile-menu"),
      body: document.querySelector("body"),
    };
  
    refs.openMenuBtn.addEventListener("click", toggleModal);
    refs.closeMenuBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.menu.classList.toggle("is-open");
      refs.body.classList.toggle("no-scroll");
    }
  })();