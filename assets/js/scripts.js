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

/**
 * Go Top icon
 */
window.addEventListener("scroll",showGoToTopIcon);
document.getElementById("go_to_top").addEventListener("click",scrollToTop);

function scrollToTop() {
    document.documentElement.scrollTo(0,0);
}

function showGoToTopIcon() {
    let _currentScroll = document.documentElement.scrollTop;
    if (_currentScroll > 600) {
        document.getElementById("go_to_top").style.display = "block";
    }
    else {
        document.getElementById("go_to_top").style.display = "none";
    }
}