/**
 * Fonctions pour le top header: burger menu et barre de navigation
 */

// Listener sur la div contenant les icones
document.getElementById("burgermenu").addEventListener("click", toggleSideNav);

function toggleSideNav() {
    document.getElementById("nav-side").classList.toggle("toggleNav");
    document.getElementById("nav-menu-icon").classList.toggle("toggleDisplayOff");  // from on to off
    document.getElementById("nav-close-icon").classList.toggle("toggleDisplayOn");  // from off to on
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
    document.getElementById("go_to_top").classList.toggle("toggleDisplayOn", _currentScroll > 600 );
}

/**
 * Form Contact & Newsletter
 */
document.getElementById("form_contact").addEventListener("submit", showConfirmation);
document.getElementById("form_newsletter").addEventListener("submit", showConfirmation);

function showConfirmation(e) {
    e.preventDefault();

    let _idText = e.target.id == "form_contact" ? "confirmation_message_text" : "confirmation_newsletter_text";

    // Calcul de la valeur de translation de notre popup
    // hauteur totale = height + border-top + border-bottom
    // reconverti en string pour le css
    let _height =
        "-"
        +
        (
            parseWidthToInt(window.getComputedStyle(confirmation).getPropertyValue("height"))
            + parseWidthToInt(window.getComputedStyle(confirmation).getPropertyValue("border-top-width"))
            + parseWidthToInt(window.getComputedStyle(confirmation).getPropertyValue("border-bottom-width"))
        )
        +
        "px";
    // console.log(_height);

    // Pop Up
    document.getElementById("background_overlay").style.display = "block";
    document.getElementById(_idText).style.display = "block";
    document.getElementById("confirmation").style.bottom = "10px";

    // Pop out
    setTimeout(() => {
        document.getElementById("confirmation").style.bottom = _height;
        document.getElementById(_idText).style.display = "none";
        document.getElementById("background_overlay").style.display = "none";
    }, 3000);
}

function showConfirmation2(e) {
	e.preventDefault();
	
	let _idText = e.target.id == "form_contact" ? "confirmation_message_text" : "confirmation_newsletter_text";
	document.getElementById(_idText).classList.toggle(".show_text");
	document.getElementById("confirmation").classList.toggle(".hide_confirmation");	
}


// Cette fonction est nécessaire pour récupérer la valeur entière d'une propriété CSS de type taille d'unité px/em/rem
// La valeur est arrondie à l'entier supérieur pour éviter tout débordement de pixels liés aux tailles de type float
// Compléxité O(n)
function parseWidthToInt(stringSize) {
    // console.log(stringSize);
    let _j = "";
    for (let i = 0; i < stringSize.length; i++) {
        if (stringSize[i] == 'p') {
            break;
        }
        else {
            _j += stringSize[i];
        }
    }
    // console.log(Math.ceil(_j));
    return Math.ceil(_j);
}