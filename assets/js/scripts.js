function reverseDisplay (x) {
    if (x.style.display == "none") {
        x.style.display = "unset";
    } else {
        x.style.display = "none";
    }
}

function switchIcons() {
    var menu = document.getElementById("nav-menu-icon");
    var close = document.getElementById("nav-close-icon");
    reverseDisplay(menu);
    reverseDisplay(close);
}

function toggleSideNav() {
    var x = document.getElementById("nav-side");
    reverseDisplay(x);
    switchIcons();
    // document.body.style.backgroundColor = "red";
}

// document.onclick = toggleSideNav;
// document.getElementById("nav-container").onclick = toggleSideNav;
// document.body.addEventListener("click", toggleSideNav);
// document.getElementById("nav-container").addEventListener("click", toggleSideNav);
//   document.getElementById("nav-menu-icon").addEventListener("click", toggleSideNav);