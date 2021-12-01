/**
 * Fonctions pour le top header: burger menu et barre de navigation
 */

// Listener sur la div contenant les icones
document.getElementById("menu-open").addEventListener("click", toggleNavBar);
document.getElementById("menu-close").addEventListener("click", toggleNavBar);

function toggleNavBar() {
    document.getElementById("nav-menu").classList.toggle("toggleNav");
    document.getElementById("menu-open").classList.toggle("toggleDisplayOff");  // from on to off
    document.getElementById("menu-close").classList.toggle("toggleDisplayOn");  // from off to on
}

/**
 * Go Top icon
 */

// Listeners
window.addEventListener("scroll", showGoToTopIcon);
document.getElementById("go_to_top").addEventListener("click", scrollToTop);

function scrollToTop() {
    document.documentElement.scrollTo(0, 0);
}

function showGoToTopIcon() {
    let _currentScroll = document.documentElement.scrollTop;
    document.getElementById("go_to_top").classList.toggle("toggleGoTop", _currentScroll > 600 );
}

/**
 * Form Contact & Newsletter
 */
document.getElementById("form_contact").addEventListener("submit", showConfirmation);
document.getElementById("form_newsletter").addEventListener("submit", showConfirmation);

function showConfirmation(e) {
	e.preventDefault();
    
    let _idText = e.target.id == "form_contact" ? "confirmation_message_text" : "confirmation_newsletter_text";

    // Pop Up
    popMessage(_idText);

    // Pop out
    setTimeout(() => {
        popMessage(_idText);
    }, 3000);
}

function popMessage(_idText) {
    document.getElementById("background_overlay").classList.toggle("toggleDisplayOn");
    document.getElementById("confirmation").classList.toggle("show_confirmation");
	document.getElementById(_idText).classList.toggle("toggleDisplayOn");
}