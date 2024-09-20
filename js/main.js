// progress scroller
let scroll = document.querySelector(".scroller");

let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  scroll.style.width = `${(scrollTop / height) * 100}%`;
});

// navebar
let toggle = document.getElementById("toggle");
let links = document.querySelector(".links");

links.style.maxHeight = "0px";
function showLinks() {
  if (links.style.maxHeight === "0px") {
    links.style.maxHeight = "600px";
  } else {
    links.style.maxHeight = "0px";
  }
}
toggle.addEventListener("click", showLinks);

// button go to section
let aboutBtn = document.getElementById("about");
let targetAbout = document.getElementById("target-about");

aboutBtn.addEventListener("click", () => {
  targetAbout.scrollIntoView({
    behavior: "smooth",
  });
});

let home = document.getElementById("home");
let targetHome = document.getElementById("target-home");

home.addEventListener("click", function () {
  targetHome.scrollIntoView({
    behavior: "smooth",
  });
});

let services = document.getElementById("services");
let targetServices = document.getElementById("target-services");
services.onclick = () => {
  targetServices.scrollIntoView({
    behavior: "smooth",
  });
};

const portfolio = document.getElementById("portfolio");
const targetPortfolio = document.getElementById("target-portfolio");
portfolio.addEventListener("click", () => {
  targetPortfolio.scrollIntoView({
    behavior: "smooth",
  });
});

const blog = document.getElementById("blog");
const targetBlog = document.getElementById("target-blog");
blog.addEventListener("click", () => {
  targetBlog.scrollIntoView({
    behavior: "smooth",
  });
});

let contact = document.getElementById("contact");
let targetContact = document.getElementById("target-contact");
contact.addEventListener("click", () => {
  targetContact.scrollIntoView({
    behavior: "smooth",
  });
});

// add button to top in page
let topBtn = document.createElement("span");
topBtn.id = "topBtn";
topBtn.innerHTML = `<i class="fa-solid fa-arrow-up"></i>`;
document.body.appendChild(topBtn);

topBtn.style.cssText =
  " position: fixed;right: 37px;bottom: 32px;padding: 12px 10px;border-radius: 8px;color: #0e9dc8;font-size: 38px;transition: background-color 0.3s;";

topBtn.addEventListener("mouseover", (e) => {
  topBtn.style.backgroundColor = "#447e9b42";
});
topBtn.addEventListener("mouseleave", (e) => {
  topBtn.style.backgroundColor = "transparent";
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    // console.log("Error");
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", topPage);

function topPage() {
  // console.log("log");
  window.document.documentElement.scrollTop = 0;
  window.document.body.scrollTop = 0;
}
