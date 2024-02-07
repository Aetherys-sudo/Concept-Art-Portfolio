// logic for the burger button efects starts here

// we select the items from the DOM
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

// add click event listener 
burger.addEventListener("click", () => {
  // if clicked, count it as active and show the menu
  navLinks.classList.toggle("active");
  burger.classList.toggle("active");
});

// add bounce effects to the socials buttons
const socials = document.querySelectorAll(".fa-brands");
socials.forEach((social) => {
  //if hovered, add the bounce class to make it animated using FontAwesome
  social.addEventListener("mouseover", () => {
    social.classList.add("fa-bounce");
    social.style.color = "#E75480";
  });

  //when not hovered anymore, remove the class to stop it from bouncing
  social.addEventListener("mouseout", () => {
    social.classList.remove("fa-bounce");
    social.style.color = "#333333";
  });
});

//add effects for each portfolio work element
//first we unpack the array received via querySelectorAll
const pic = [...document.querySelectorAll(".pic")];

//iterate over every item
pic.forEach((item) => {
  //when hovering over one of the elements in the loop
  item.addEventListener("mouseenter", function(e) {
    this.classList.add("pic-hover");
  });

  //when removing hover effect from one of the elements in the loop
  item.addEventListener("mouseout", function(e) {
    this.classList.remove("pic-hover");
  });

  //show the description for the image, by adding theclass to make it visible, when clicking on one of the items from the item iteration
  item.addEventListener("click", function(e) {
    this.nextElementSibling.classList.add("description-show");
    this.nextElementSibling.classList.remove("description-hide");

    //img-hover is an auxiliary class to make the image below display at the same scale as the description, for a better and smoother experience
    this.classList.add("img-hover");
  
  });
});

//unpack all image descriptions and iterate over them
const description = [...document.querySelectorAll(".description")];
description.forEach((item) => {
  // when clicked again, make the description dissapear and make the image the main display once again
  item.addEventListener("click", function(e) {
    this.classList.add("description-hide");
    this.classList.remove("description-show");

    //img-hover is an auxiliary class to make the image below display at the same scale as the description, for a better and smoother experience
    this.previousElementSibling.classList.remove("img-hover");
  });
});






