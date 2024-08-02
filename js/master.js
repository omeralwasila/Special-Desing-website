//check if there local storge color option
let mainColors = localStorage.getItem("color-option");
if (mainColors !== null) {
  document.documentElement.style.setProperty(
    "--main--colors",
    localStorage.getItem("color-option")
  );
}

//toggle spin classon icon
document.querySelector(".op-set .fa-gear").onclick = function () {
  //   this.classList.toggle();

  // toggle class open on main setting box
  document.querySelector(".settings-box").classList.toggle("open");
};

//switch color

const colorli = document.querySelectorAll(".color-list li");

colorli.forEach((li) => {
  li.addEventListener("click", (e) => {
    console.log(e.target.dataset.color);
    //set color on root
    document.documentElement.style.setProperty(
      "--main--color",
      e.target.dataset.color
    );
    //set color on local storage

    localStorage.setItem("color-option", e.target.dataset.color);

    handleActive(e);
  });
});

// random background option
let backgroundOption = true;

//variable to control the interval
let interval;

//switch random background option
const randombackground = document.querySelectorAll(".random-background span");
//loop on all span
randombackground.forEach((span) => {
  span.addEventListener("click", (e) => {
    handleActive(e);

    if (e.target.dataset.background === "yes") {
      // use === for comparison
      backgroundOption = true;
      randomizeImgs();
    } else {
      backgroundOption = false;
      clearInterval(interval);
    }
  });
});

//select landing page element
let landingPage = document.querySelector(".landing-page");

//get array of images
let imgsArray = ["3.jpg", "2.jpg", "1.jpg", "3.jpg", "2.jpg", "1.jpg"];

//function randomBackground

function randomizeImgs() {
  if (backgroundOption === true) {
    interval = setInterval(() => {
      //get random number

      let randomNumber = Math.floor(Math.random() * imgsArray.length);
      //change background img url

      landingPage.style.backgroundImage =
        'url("../images/' + imgsArray[randomNumber] + '")';
    }, 1000);
  }
}

//skills selector

let ourskills = document.querySelector(".skills");

window.onscroll = function () {
  let skillsoffsetTop = ourskills.offsetTop;

  let skillsOuterHeight = ourskills.offsetHeight;

  let windowheight = this.innerHeight;

  let windowScrollTop = this.scrollY;
  console.log(windowScrollTop);

  if (windowScrollTop < skillsoffsetTop + skillsOuterHeight - windowheight) {
    console.log("done");
    let allSkills = document.querySelectorAll(
      ".skills .skill-box .skill-progres span"
    );
    allSkills.forEach((skill) => {
      skill.style.width = skill.dataset.progres;
    });
  }
};

//create popup img
// Create popup img
let OurGallery = document.querySelectorAll(".gallery img");

OurGallery.forEach((img) => {
  img.addEventListener("click", (e) => {
    // Create overlay
    let overlay = document.createElement("div");
    overlay.className = "popup-overlay"; // Correct class name
    document.body.appendChild(overlay);

    // Create popup box
    let popupBox = document.createElement("div");
    popupBox.className = "popupbox"; // Correct class name
    let popupImg = document.createElement("img");
    popupImg.src = img.src;
    popupBox.appendChild(popupImg);
    document.body.appendChild(popupBox);

    // Close popup when overlay is clicked
    overlay.addEventListener("click", () => {
      overlay.remove();
      popupBox.remove();
    });
  });
});

//select all bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet");
const alllinks = document.querySelectorAll(".links a");

function scrolltosomewhere(elements) {
  elements.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}

scrolltosomewhere(allBullets);
scrolltosomewhere(alllinks);

// handle active state

function handleActive(event) {
  event.target.parentElement.querySelectorAll(".active").forEach((element) => {
    element.classList.remove("active");
  });
  //add active
  event.target.classList.add("active");
}

let bulletspan = document.querySelectorAll(".bullets-option span");
let bulletsContainer = document.querySelector(".nav-bullets");

bulletspan.forEach((span) => {
  span.addEventListener("click", (e) => {
    handleActive(e);

    let shouldShow = span.dataset.display === "Show";
    bulletsContainer.style.display = shouldShow ? "block" : "none";
  });
});

//Reset Button
document.querySelector(".reset-option").onclick = () => {
  localStorage.clear();
  window.location.reload();
};

//togle menu

let togglebtn = document.querySelector(".Toggle-Menu");
let tlinks = document.querySelector(".links");
console.log(togglebtn);

togglebtn.onclick = (e) => {
  tlinks.classList.toggle("open");
  togglebtn.classList.toggle("menu-active");
};

// document.addEventListener("click", (e) => {
//   if (e.target !== togglebtn && e.target !== tlinks) {
//     if (tlinks.classList.contains("open")) {
//       tlinks.classList.toggle("open");
//       togglebtn.classlist.toggle(".menu-active");
//     }
//   }
// });
