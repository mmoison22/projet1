function reverseDisplay(x) {
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function toggleDiv(element) {
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
window.addEventListener("scroll", showGoToTopIcon);
document.getElementById("go_to_top").addEventListener("click", scrollToTop);

function scrollToTop() {
    document.documentElement.scrollTo(0, 0);
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

/**
 * Form Contact & Newsletter
 */
document.getElementById("form_contact").addEventListener("submit", showConfirmation);
document.getElementById("form_newsletter").addEventListener("submit", showConfirmation);

function showConfirmation(e) {
    e.preventDefault();

    let _idText = e.target.id == "form_contact" ? "confirmation_message_text" : "confirmation_newsletter_text";

    // Calcul de la hauteur totale de notre popup
    // hauteur totale = height + border-top + border-bottom
    // let _height = 
    // parseCssToInt(window.getComputedStyle(confirmation).getPropertyValue("height"))
    // + parseCssToInt(window.getComputedStyle(confirmation).getPropertyValue("border-top-width")) 
    // + parseCssToInt(window.getComputedStyle(confirmation).getPropertyValue("border-bottom-width"));

    // Pop Up
    document.getElementById("background_overlay").style.display = "block";
    document.getElementById(_idText).style.display = "block";
    document.getElementById("confirmation").style.bottom = "10px";

    // Pop out
    setTimeout(() => {
        document.getElementById("confirmation").style.bottom = "-210px";
        document.getElementById(_idText).style.display = "none";
        document.getElementById("background_overlay").style.display = "none";
    }, 3000);
}


// Cette fonction est nécessaire pour récupérer la valeur entière d'une propriété CSS de type taille d'unité px/em/rem
function parseCssToInt() {
    
}