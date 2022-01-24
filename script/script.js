"use sctrict";

const homeMainBefore = document.querySelector("#home-main-before");

const homeMainAfter = document.querySelector("#home-main-after");

const arrowLeft = document.querySelectorAll(".home-main-before");
const arrowRight = document.querySelectorAll(".home-main-after");

const header = document.getElementById("header");
const headerNav = document.getElementById("header-nav");

var slideHome = 0;

showSlidesHome();

function showSlidesHome() {
  slideHome++;
  var animiFrom = document.querySelectorAll(".animi-from");

  let homeSlideContent = document.querySelector(".home-slide-content");

  if (slideHome > animiFrom.length - 1) {
    slideHome = -1;
  }
  if (slideHome === animiFrom.length) {
    homeSlideContent.style.left = "0";
    return;
  }
  if (slideHome === 0) {
    homeSlideContent.style.left = "0";
  } else if (slideHome === 1) {
    homeSlideContent.style.left = "-120%";
  } else if (slideHome === 2) {
    homeSlideContent.style.left = "-240%";
  } else if (slideHome === 3) {
    homeSlideContent.style.left = "-360%";
  } else if (slideHome === 4) {
    homeSlideContent.style.left = "-480%";
  } else if (slideHome === 5) {
    homeSlideContent.style.left = "-600%";
  }
  setTimeout(showSlidesHome, 4000);
}

function homeSlideBefore() {
  homeSlideNew(--slideHome);
}
function homeSlide() {
  homeSlideNew(++slideHome);
}
function homeSlideNew(n) {
  var animiFrom = document.querySelectorAll(".animi-from");

  let homeSlideContent = document.querySelector(".home-slide-content");

  if (n > animiFrom.length - 1) {
    slideHome = 0;
  }
  if (n < 1) {
    slideHome = animiFrom.length;
  }
  if (n === animiFrom.length) {
    homeSlideContent.style.left = "0";
    return;
  }
  if (n === 0) {
    homeSlideContent.style.left = "0";
  } else if (n === 1) {
    homeSlideContent.style.left = "-120%";
  } else if (n === 2) {
    homeSlideContent.style.left = "-240%";
  } else if (n === 3) {
    homeSlideContent.style.left = "-360%";
  } else if (n === 4) {
    homeSlideContent.style.left = "-480%";
  } else if (n === 5) {
    homeSlideContent.style.left = "-600%";
  }
}

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (scrollY > header.offsetHeight + 150) {
    header.classList.add("top");
  } else {
    header.classList.remove("top");
  }
}
const homeMain = document.getElementById("home-main");
const homeMainSection = document.getElementById("home-main-section");

const homeContent = document.getElementById("home-content");
const secondSection = document.getElementById("second-section");
const sectionContent = document.getElementById("section-content");
const history = document.getElementById("history");
const historyContent = document.getElementById("history-content");

const services = document.getElementById("services");
const servicesContent = document.getElementById("services-content");
const recentWorks = document.getElementById("recent-works");
const recentContent = document.getElementById("recent-content");
const caseStudy = document.getElementById("case-study");
const CaseStudyContent = document.getElementById("case-study-content");

const listItems = document.getElementById("list-items");
const listItemsContainer = document.getElementById("list-items-container");

const pricing = document.getElementById("pricing");
const pricingSectionContainer = document.getElementById(
  "pricing-section-container"
);
const ourTeam = document.getElementById("our-team");
const ourTeamContainer = document.getElementById("our-team-container");

const integration = document.getElementById("integration");
const integrationContainer = document.getElementById("integration-container");

const ourBlog = document.getElementById("our-blog");
const ourBlogContainer = document.getElementById("our-blog-container");
const keepInTouch = document.getElementById("keep-in-touch");
const keepInTouchContianer = document.getElementById("keep-in-touch-container");

const subscribe = document.getElementById("subscribe");
const subscribeContainerContent = document.getElementById(
  "subscribe-container-content"
);

const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".nav-links-menu");
const btns = document.querySelectorAll(".menu_button");
const links = document.querySelectorAll(".nav-links-menu li");

hamburger.addEventListener("click", () => {
  navlinks.classList.toggle("nav-active");
  hamburger.classList.toggle("change");
});

for (const btn of btns) {
  btn.addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    setTimeout(() => {
      this.className += " active";
    }, 1000);
    navlinks.classList.remove("nav-active");
    hamburger.classList.remove("change");
  });
}

window.addEventListener("scroll", home_function);
window.addEventListener("scroll", section_function);
window.addEventListener("scroll", history_function);
window.addEventListener("scroll", services_function);
window.addEventListener("scroll", recent_function);
window.addEventListener("scroll", case_function);
window.addEventListener("scroll", list_function);
window.addEventListener("scroll", pricing_function);
window.addEventListener("scroll", our_function);
window.addEventListener("scroll", integration_function);
window.addEventListener("scroll", blog_function);
window.addEventListener("scroll", keepInTouch_function);
window.addEventListener("scroll", subscribe_function);

function home_function() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  const homeStart = homeContent.getBoundingClientRect().top;
  if (homeStart < triggerBottom) {
    for (let btn of btns) {
      btn.classList.remove("active");
    }
    btns[0].classList.add("active");
  } else {
    sectionContent.classList.remove("from-top");
    btns[0].classList.remove("active");
  }
}
function section_function() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  const sectionStart = sectionContent.getBoundingClientRect().top;
  if (sectionStart < triggerBottom) {
    fromTopSection();
  } else {
    sectionContent.classList.remove("from-top");
  }
}
function fromTopSection() {
  sectionContent.classList.add("from-top");
}
function history_function() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  const historyStart = historyContent.getBoundingClientRect().top;
  if (historyStart < triggerBottom) {
    fromTopHistory();
    for (let btn of btns) {
      btn.classList.remove("active");
    }
    btns[1].classList.add("active");
  } else {
    historyContent.classList.remove("from-top");
    btns[1].classList.remove("active");
  }
}
/*from-top-animation */
function fromTopHistory() {
  historyContent.classList.add("from-top");
}

//done next
function services_function() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  const servicesStart = servicesContent.getBoundingClientRect().top;
  if (servicesStart < triggerBottom) {
    fromTopServices();
  } else {
    servicesContent.classList.remove("from-top");
  }
}
function fromTopServices() {
  servicesContent.classList.add("from-top");
}

//done next
function recent_function() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  const recentStart = recentContent.getBoundingClientRect().top;
  if (recentStart < triggerBottom) {
    fromTopRecent();
    for (let btn of btns) {
      btn.classList.remove("active");
    }
    btns[2].classList.add("active");
  } else {
    recentContent.classList.remove("from-top");
    btns[2].classList.remove("active");
  }
}
function fromTopRecent() {
  recentContent.classList.add("from-top");
}

//done next

function case_function() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  const caseStart = caseStudy.getBoundingClientRect().top;
  if (caseStart < triggerBottom) {
    fromTopCaseStudy();
  } else {
    caseStudy.classList.remove("from-top");
  }
}
function fromTopCaseStudy() {
  caseStudy.classList.add("from-top");
}

//done next

function list_function() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  const listStart = listItemsContainer.getBoundingClientRect().top;
  if (listStart < triggerBottom) {
    fromTopList();
  } else {
    listItemsContainer.classList.remove("from-top");
  }

  if (listStart > triggerBottom) {
    counters.forEach((counter) => {
      counter.innerText = "0";

      const updateCounter = () => {
        const target = +counter.getAttribute("data-att");
        const c = +counter.innerText;
        const increment = target / 300;
        if (c < target) {
          counter.innerText = `${Math.ceil(c + increment)}`;
          setTimeout(updateCounter, 10);
        } else {
          counter.innerText = target;
        }
      };
      updateCounter();
    });
  }
}
function fromTopList() {
  listItemsContainer.classList.add("from-top");
}

//done next
function pricing_function() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  const pricingStart = pricingSectionContainer.getBoundingClientRect().top;
  if (pricingStart < triggerBottom) {
    fromTopPricing();
    for (let btn of btns) {
      btn.classList.remove("active");
    }
    btns[3].classList.add("active");
  } else {
    pricingSectionContainer.classList.remove("from-top");
    btns[3].classList.remove("active");
  }
}
function fromTopPricing() {
  pricingSectionContainer.classList.add("from-top");
}
//done next

function our_function() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  const ourFunctionStart = ourTeamContainer.getBoundingClientRect().top;
  if (ourFunctionStart < triggerBottom) {
    fromTopOur();
    for (let btn of btns) {
      btn.classList.remove("active");
    }
    btns[4].classList.add("active");
  } else {
    ourTeamContainer.classList.remove("from-top");
    btns[4].classList.remove("active");
  }
}
function fromTopOur() {
  ourTeamContainer.classList.add("from-top");
}

//next done

function integration_function() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  const integrationStart = integrationContainer.getBoundingClientRect().top;
  if (integrationStart < triggerBottom) {
    fromTopIntegration();
  } else {
    integrationContainer.classList.remove("from-top");
  }
}
function fromTopIntegration() {
  integrationContainer.classList.add("from-top");
}
//done next

function blog_function() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  const blogStart = ourBlogContainer.getBoundingClientRect().top;
  if (blogStart < triggerBottom) {
    fromTopOurBlog();
    for (let btn of btns) {
      btn.classList.remove("active");
    }
    btns[5].classList.add("active");
  } else {
    ourBlogContainer.classList.remove("from-top");
    btns[5].classList.remove("active");
  }
}
function fromTopOurBlog() {
  ourBlogContainer.classList.add("from-top");
}
//done next

function keepInTouch_function() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  const keepInTouchStart = keepInTouchContianer.getBoundingClientRect().top;
  if (keepInTouchStart < triggerBottom) {
    fromTopKeepInTouch();
    for (let btn of btns) {
      btn.classList.remove("active");
    }
    for (let btn of btns) {
      btn.classList.remove("active");
    }
    btns[6].classList.add("active");
  } else {
    keepInTouchContianer.classList.remove("from-top");
    btns[6].classList.remove("active");
  }
}
function fromTopKeepInTouch() {
  keepInTouchContianer.classList.add("from-top");
}

//next done

function subscribe_function() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  const subscribeStart = subscribeContainerContent.getBoundingClientRect().top;
  if (subscribeStart < triggerBottom) {
    fromTopSubscribeContent();
  } else {
    subscribeContainerContent.classList.remove("from-top");
  }
}

function fromTopSubscribeContent() {
  subscribeContainerContent.classList.add("from-top");
}
//button add to by content length
const servicesContentItems = document.querySelectorAll(
  ".services-content-items"
);
const btnSelector = document.querySelector(".services-content-scroll");

for (let i = 0; i < servicesContentItems.length; i++) {
  let html = `<button class="services-content-scroll-btn" aria-label="Center Align" onclick="currentSlideServices(${
    i + 1
  })">
              </button>`;
  btnSelector.insertAdjacentHTML("beforeend", html);
}

//button to case study by length
const caseStudyTopContent = document.querySelectorAll(
  ".case-study-top-content"
);
const btnSelectorDown = document.querySelector(".btn-selector-new");

for (let i = 0; i < caseStudyTopContent.length; i++) {
  let html = `<button class="small-circle-read-more gray-circle gray-circle-new" aria-label="Center Align" onclick="currentSlide(${
    i + 1
  })"></button>`;
  btnSelectorDown.insertAdjacentHTML("beforeend", html);
}

//recent works filter and active

const bttn = document.querySelectorAll(".recent-content-links button");
const product = document.querySelectorAll(".image-one");
const recentDoc = document.querySelector(".recent-content-images");
bttn.forEach((items) => {
  items.addEventListener("click", function () {
    for (let btn of bttn) {
      btn.classList.remove("active2");
    }
    items.classList.add("active2");

    product.forEach((show) => {
      show.style.opacity = 0;
      show.style.transform = "scale(0.9)";

      let products = items.textContent.toLowerCase();
      setTimeout(function () {
        show.style.display = "none";
        if (show.getAttribute("data-att") === products || products === "all") {
          show.style.display = "flex";
          show.style.flexDirection = "column ";
          show.style.transform = "scale(1)";
          show.style.opacity = 100;
        }
      }, 500);
    });
  });
});

// loading animation

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-att");
    const c = +counter.innerText;
    const increment = target / 200;
    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 10);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});

const scale = function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

const radioBtn = document.querySelectorAll(".small-circle-read-more");
const radioContent = document.querySelector(".case-study-top-content");
radioBtn.forEach((rdBtn) => {
  rdBtn.addEventListener("click", function () {
    for (let btn of radioBtn) {
      btn.classList.remove("gray-circle");
    }
    rdBtn.classList.add("gray-circle");

    if (radioContent.classList.contains("radio-active1")) {
      radioContent.classList.remove("radio-active1");
      radioContent.classList.add("radio-active2");
    } else if (radioContent.classList.contains("radio-active2")) {
      radioContent.classList.remove("radio-active2");

      radioContent.classList.add("radio-active3");
    } else if (radioContent.classList.contains("radio-active3")) {
      radioContent.classList.remove("radio-active3");
      radioContent.classList.add("radio-active1");
    }
  });
});

// gray circle auto scroll animation start
var slideIndex = 0;

showSlides();
function showSlides() {
  var i;
  var dots = document.querySelectorAll(".small-circle-read-more");
  let caseEl = document.querySelector(".case-study-scroll-content");
  slideIndex++;
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" gray-circle-new", "");
  }
  if (slideIndex > dots.length) {
    slideIndex = 1;
  }
  dots[slideIndex - 1].className += " gray-circle-new";
  if (slideIndex === 1) {
    caseEl.style.left = "0";
  } else if (slideIndex === 2) {
    caseEl.style.left = "-150%";
  } else if (slideIndex === 3) {
    caseEl.style.left = "-300%";
  } else if (slideIndex === 4) {
    caseEl.style.left = "-450%";
  } else if (slideIndex === 5) {
    caseEl.style.left = "-600%";
  } else if (slideIndex === 6) {
    caseEl.style.left = "-750%";
  }
  setTimeout(showSlides, 5000);
}

function currentSlide(n) {
  showSlidesNew((slideIndex = n));
}
function showSlidesNew(n) {
  var i;
  var dots = document.querySelectorAll(".small-circle-read-more");
  let caseEl = document.querySelector(".case-study-scroll-content");
  if (n > dots.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" gray-circle-new", "");
  }
  dots[slideIndex - 1].className += " gray-circle-new";
  if (n === 1) {
    caseEl.style.left = "0";
  } else if (n === 2) {
    caseEl.style.left = "-150%";
  } else if (n === 3) {
    caseEl.style.left = "-300%";
  } else if (n === 4) {
    caseEl.style.left = "-450%";
  } else if (n === 5) {
    caseEl.style.left = "-600%";
  } else if (n === 6) {
    caseEl.style.left = "-750%";
  }
}

/*radio button fix*/
let slideInexTop = 0;

showSlidesTop();
function showSlidesTop() {
  var i;
  var slides = document.querySelectorAll(".services-content-scroll-btn");
  slideInexTop++;
  for (i = 0; i < slides.length; i++) {
    slides[i].className = slides[i].className.replace(
      " scroll-btn-active-new",
      ""
    );
  }
  if (slideInexTop > slides.length) {
    slideInexTop = 1;
  }
  slides[slideInexTop - 1].className += " scroll-btn-active-new";
  var servicesEl = document.querySelectorAll(".services-content-items");
  if (slideInexTop === 1) {
    servicesEl.forEach((service) => {
      service.style.transform = "translateY(0)";
    });
  } else if (slideInexTop === 2) {
    servicesEl.forEach((service) => {
      service.style.transform = "translateY(-100%)";
    });
  } else if (slideInexTop === 3) {
    servicesEl.forEach((service) => {
      service.style.transform = "translateY(-200%)";
    });
  } else if (slideInexTop === 4) {
    servicesEl.forEach((service) => {
      service.style.transform = "translateY(-300%)";
    });
  } else if (slideInexTop === 5) {
    servicesEl.forEach((service) => {
      service.style.transform = "translateY(-400%)";
    });
  } else if (slideInexTop === 6) {
    servicesEl.forEach((service) => {
      service.style.transform = "translateY(-500%)";
    });
  } else if (slideInexTop === 7) {
    servicesEl.forEach((service) => {
      service.style.transform = "translateY(-600%)";
    });
  }
  setTimeout(showSlidesTop, 5000);
}
function currentSlideServices(n) {
  showSlidesServices((slideInexTop = n));
}
function showSlidesServices(n) {
  var i;
  var slides = document.querySelectorAll(".services-content-scroll-btn");
  var servicesEl = document.querySelectorAll(".services-content-items");
  if (n > servicesEl.length) {
    slideInexTop = 1;
  }
  if (n < 1) {
    slideInexTop = servicesEl.length;
  }
  for (i = 0; i < servicesEl.length; i++) {
    slides[i].className = slides[i].className.replace(
      " scroll-btn-active-new",
      ""
    );
  }

  slides[slideInexTop - 1].className += " scroll-btn-active-new";
  if (n === 1) {
    servicesEl.forEach((service) => {
      service.style.transform = "translateY(0)";
    });
  } else if (n === 2) {
    servicesEl.forEach((service) => {
      service.style.transform = "translateY(-100%)";
    });
  } else if (n === 3) {
    servicesEl.forEach((service) => {
      service.style.transform = "translateY(-200%)";
    });
  } else if (n === 4) {
    servicesEl.forEach((service) => {
      service.style.transform = "translateY(-300%)";
    });
  } else if (n === 5) {
    servicesEl.forEach((service) => {
      service.style.transform = "translateY(-400%)";
    });
  } else if (n === 6) {
    servicesEl.forEach((service) => {
      service.style.transform = "translateY(-500%)";
    });
  }
}

//form validation

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

///show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

//show success outline

function showSuccess(input) {
  const formControl = input.parentElement;
  const btnEl = document.querySelector(".button-form-control");
  formControl.className = "form-control  success";
  btnEl.className = "form-control success";
  setTimeout(() => {
    btnEl.className = "form-control button-form-control";
    var inputs = document.querySelectorAll("input");

    inputs.forEach((input1) => (input1.value = ""));
  }, 2000);
}

//check email is valid
function checkEmail(input) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}
// check requeried fields function

function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}
// check input length

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be atleast ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

//check passwords match

function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Password do not match");
  }
}

// Get Field Name
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Evenlisteners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
});

const scrollBtns = document.querySelectorAll(".services-content-scroll-btn");

const contentItems = document.querySelector(".services-content-items");

scrollBtns.forEach((sbtn) => {
  sbtn.addEventListener("click", function () {
    for (let btns1 of scrollBtns) {
      btns1.classList.remove("scroll-btn-active");
    }
    sbtn.classList.add("scroll-btn-active");
  });
});
