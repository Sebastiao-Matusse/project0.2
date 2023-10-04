function toggleMenu() {
  // console.log("It worked");
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburguerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburguerBtn");
x.onclick = toggleMenu;

const firstOptions = {
  weekdays: "short",
  day: "numeric",
  month: "numeric",
  year: "numeric",
};
const options = {
  weekdays: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
};
document.getElementById("currentdate").textContent = new Date().toLocaleString(
  "en-Uk",
  firstOptions
);
