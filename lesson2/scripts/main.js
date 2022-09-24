const d = new Date();
const year = d.getFullYear();
console.log(year);
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