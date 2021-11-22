function reverseDisplay (x) {
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function toggleDiv (element) {
    let _element_css = window.getComputedStyle(element);
    if (_element_css.height == "0px") {
        element.style.height = "20px";
    } else {
        element.style.height = "0px";
    }
}

function switchIcons() {
    let menu = document.getElementById("nav-menu-icon");
    let close = document.getElementById("nav-close-icon");
    reverseDisplay(menu);
    reverseDisplay(close);
}

function toggleSideNav() {
    let x = document.getElementById("nav-side");
    toggleDiv(x);
    switchIcons();
}

document.getElementById("burgermenu").addEventListener("click", toggleSideNav);