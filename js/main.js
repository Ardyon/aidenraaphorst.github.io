const burgerMenu = document.querySelector("nav svg");
const linksMenu = document.querySelector("nav .links");
const links = linksMenu.querySelectorAll("a");
const ageSpan = document.querySelector("#age");

const calculateAge = (birthDate) => {
  var today = new Date();
  var birthDate = new Date(birthDate);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

ageSpan.innerHTML = calculateAge("2005-04-24");

const toggleLinksMenuVisibility = () => {
  linksMenu.classList.toggle("active");
};

const convertRemToPixels = (rem) => {
  return rem * parseFloat(getComputedStyle(document.body).fontSize);
}

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