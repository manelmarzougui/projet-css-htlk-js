const toggle = document.querySelector(".toggle");
const banner = document.querySelector(".banner");
const menu = document.querySelector(".menu");

console.log(toggle);
toggle.onclick = function () {
  toggle.classList.toggle("active");
  banner.classList.toggle("active");
  menu.classList.toggle("show");
};

function parallax(e) {
  this.querySelectorAll(".elements1").forEach((layer) => {
    const speed = layer.getAttribute("data-speed");
    const x = (window.innerWidth - e.pageX * speed) / 100;
    layer.style.transform = `translateX($(x)px)`;
  });
}
document.addEventListener("mousemove", parallax);
