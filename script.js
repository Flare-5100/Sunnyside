const menu = document.getElementById("menu");
const nav_items = document.getElementsByClassName("nav-items")[0];
const hero_title = document.getElementsByClassName("hero-title")[0];
const down_arrow = document.getElementsByClassName("down-arrow")[0];

menu.addEventListener("click", (e) => {
    menu.classList.toggle("active");
    nav_items.classList.toggle("visible");
    hero_title.classList.toggle("visible");
    down_arrow.classList.toggle("visible");
}
);
