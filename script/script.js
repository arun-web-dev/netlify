"use sctrict";
const homeMainBefore = document.querySelector("#home-main-before");

homeMainBefore.addEventListener("click", function () {
  homeMain.classList.toggle("from-left");
  homeMain.classList.remove("from-right");
});
const homeMainAfter = document.querySelector("#home-main-after");
homeMainAfter.addEventListener("click", function () {
  homeMain.classList.toggle("from-right");
  homeMain.classList.remove("from-left");
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

hamburger.addEventListener("click", () => {
  navlinks.classList.toggle("nav-active");
  hamburger.classList.toggle("change");
});

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
// window.addEventListener("scroll", home_main_function);
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

// function home_main_function() {
//   const triggerBottom = (window.innerHeight / 5) * 4;
//   const homeStart = homeContent.getBoundingClientRect().top;
//   if (homeStart < triggerBottom) {
//     fromTopHome();
//   } else {
//     homeContent.classList.remove("from-top");
//   }
// }
// function fromTopHome() {
//   homeContent.classList.add("from-top");
// }
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
