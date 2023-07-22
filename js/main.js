const burgerMenu = document.querySelector("nav svg");
const linksMenu = document.querySelector("nav .links");
const links = linksMenu.querySelectorAll("a");

burgerMenu.addEventListener("click", () => toggleLinksMenuVisibility());

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = e.target.attributes.href.value;
    
    // Scroll to element with an offset
    if(href.startsWith("#")) {
      e.preventDefault();

      const elem = document.querySelector(href);
      const scrollY = elem.offsetTop - convertRemToPixels(8);

      scrollTo(0, scrollY);
    }

    toggleLinksMenuVisibility();
  });
});

const toggleLinksMenuVisibility = () => {
  linksMenu.classList.toggle("active");
};

const convertRemToPixels = (rem) => {
  return rem * parseFloat(getComputedStyle(document.body).fontSize);
}