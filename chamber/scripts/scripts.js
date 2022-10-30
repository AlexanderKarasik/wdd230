function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    document.querySelector("#hamburgerBtn").classList.remove("open");
    document.querySelector("#primaryNav").classList.remove("open");
  })
);

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

const d = new Date();
const year = d.getFullYear();
// console.log(year);
document.getElementById("year").innerHTML = year;
let lastmodif = new Date(document.lastModified);
const options = {
  day: "numeric",
  month: "numeric",
  year: "numeric",
  time: "numeric",
};

document.getElementById("lastupdate").innerHTML = lastmodif.toLocaleDateString(
  "en-US",
  options
);
document.getElementById("time").innerHTML =
  lastmodif.toLocaleTimeString("en-US");

document.getElementById("lastupdate1").innerHTML = lastmodif.toLocaleDateString(
  "en-US",
  options
);
document.getElementById("time1").innerHTML =
  lastmodif.toLocaleTimeString("en-US");

document.getElementById("lastupdate2").innerHTML = lastmodif.toLocaleDateString(
  "en-US",
  options
);
document.getElementById("time2").innerHTML =
  lastmodif.toLocaleTimeString("en-US");

// Day today with week day name

const date1 = document.querySelector("#today");
try {
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  date1.innerHTML = `<span class="highlight">${new Date().toLocaleDateString(
    "en-UK",
    options
  )}</span>`;
} catch (e) {
  alert("Error with code or your browser does not support Locale");
}

// TEMPORAL BANNER
console.log(new Date().getDay());
if (new Date().getDay() == 1 || new Date().getDay() == 2) {
  document.querySelector("#bannertemp").style.display = "block";
} else {
  document.querySelector("#bannertemp").style.display = "none";
}

// DISCOVER, LAST VISIT
let lastVisit = Number(window.localStorage.getItem("lastVisitDate"));
if (lastVisit !== 0) {
  let date_1 = lastVisit;
  let date_2 = Date.now();
  let difference = date_2 - date_1;
  let result = Math.floor(difference / (1000 * 3600 * 24));
  if (result === 0) {
    document.querySelector("#lastVisit").textContent =
      "You have visited this page less than one day ago.";
  } else if (result === 1) {
    document.querySelector("#lastVisit").textContent =
      "You have visited this page one day ago.";
  } else {
    document.querySelector(
      "#lastVisit"
    ).textContent = `You have visited this page ${result} days ago.`;
  }
} else {
  result = "This is your first visit.";
  document.querySelector("#lastVisit").textContent = result;
}
localStorage.setItem("lastVisitDate", Date.now());


