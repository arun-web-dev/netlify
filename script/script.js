"use sctrict";
const homeMainBefore = document.querySelector("#home-main-before");

const homeMainAfter = document.querySelector("#home-main-after");

const arrowLeft = document.querySelectorAll(".home-main-before");
const arrowRight = document.querySelectorAll(".home-main-after");

homeMainAfter.addEventListener("click", function () {
  homeMainAfter.classList.toggle("arrow-active");
  homeMainBefore.classList.toggle("arrow-active");

  if (homeMain.classList.contains("from-left")) {
    homeMain.classList.toggle("from-left1");
  } else {
    homeMain.classList.remove("from=right");
    homeMain.classList.remove("from-right1");
    homeMain.classList.add("from-left");
  }
});
homeMainBefore.addEventListener("click", function () {
  homeMainAfter.classList.toggle("arrow-active");
  homeMainBefore.classList.toggle("arrow-active");
  if (homeMain.classList.contains("from-right")) {
    homeMain.classList.remove("from-right");
    homeMain.classList.remove("from-left");
    homeMain.classList.remove("from-left1");
    homeMain.classList.add("from-right1");
  } else {
    homeMain.classList.add("from-right");
  }
});
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
const btns = document.getElementsByClassName("menu_button");
const links = document.querySelectorAll(".nav-links-menu li");

hamburger.addEventListener("click", () => {
  navlinks.classList.toggle("nav-active");
  hamburger.classList.toggle("change");
});

for (const btn of btns) {
  btn.addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    navlinks.classList.remove("nav-active");
    hamburger.classList.remove("change");
  });
}

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
  } else {
    historyContent.classList.remove("from-top");
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
  } else {
    recentContent.classList.remove("from-top");
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
  } else {
    pricingSectionContainer.classList.remove("from-top");
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
  } else {
    ourTeamContainer.classList.remove("from-top");
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
  } else {
    ourBlogContainer.classList.remove("from-top");
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
  } else {
    keepInTouchContianer.classList.remove("from-top");
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
      }, 1000);
    });
  });
});

// loading animation

const loading = document.querySelectorAll(".list-items-content h2");
let loadingfirst = loading[0].innerText;
let loadingSecond = loading[1].innerText;
let loadingThird = loading[2].innerText;
let loadingFourth = loading[3].innerText;
let loadingFivth = loading[4].innerText;
let load = 0;
let int = setInterval(blurring, 30);
function blurring() {
  load++;
  if (load > 99) {
    clearInterval(int);
  }
  loading.forEach((loads) => {
    loads.innerText = load;
    loads.style.opacity = scale(loads, 0, 100, 0, 1);
  });
}
const loadingTimeout = setTimeout(loadingDone, 3976);

function loadingDone() {
  loading[0].innerText = loadingfirst;
  loading[1].innerText = loadingSecond;
  loading[2].innerText = loadingThird;
  loading[3].innerText = loadingFourth;
  loading[4].innerText = loadingFivth;
}
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

const scrollBtns = document.querySelectorAll(".services-content-scroll-btn");

const contentItems = document.querySelector(".services-content-items");

scrollBtns.forEach((sbtn) => {
  sbtn.addEventListener("click", function () {
    for (let btns1 of scrollBtns) {
      btns1.classList.remove("scroll-btn-active");
    }
    sbtn.classList.add("scroll-btn-active");

    //scroll btn
    if (contentItems.classList.contains("services-active1")) {
      contentItems.classList.remove("services-active1");
      contentItems.classList.add("services-active2");
    } else if (contentItems.classList.contains("services-active2")) {
      contentItems.classList.remove("services-active2");

      contentItems.classList.add("services-active3");
    } else if (contentItems.classList.contains("services-active3")) {
      contentItems.classList.remove("services-active3");
      contentItems.classList.add("services-active1");
    }
  });
});

// gray circle auto scroll animation
var slideIndex = 0;
showSlides();
function showSlides() {
  var i;
  var dots = document.querySelectorAll(".small-circle-read-more");
  slideIndex++;
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" gray-circle-new", "");
  }
  if (slideIndex > dots.length) {
    slideIndex = 1;
  }
  dots[slideIndex - 1].className += " gray-circle-new";
  setTimeout(showSlides, 5000);
}

var slideInexTop = 0;
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
  setTimeout(showSlidesTop, 5000);
}
