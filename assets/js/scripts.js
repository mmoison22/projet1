function reverseDisplay (x) {
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
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
    reverseDisplay(x);
    switchIcons();
    // document.body.style.backgroundColor = "red";
}

// document.onclick = toggleSideNav;
// document.getElementById("nav-container").onclick = toggleSideNav;
// document.getElementById("nav-container").addEventListener("click", toggleSideNav);