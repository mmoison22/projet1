/**
 * On ajoute un listener à chaque image ciblée avec img[data-orig-url]
 * le lien des photos est écrit dans l'html en tant que data
 */

const _photos = document.querySelectorAll("img[data-orig-url]");

_photos.forEach((img) => {
    // console.log(img.dataset.origUrl);
    img.addEventListener("click", popup);
})

document.getElementById("popup__img").addEventListener("click", popout);

function popup(e) {
    if (window.innerWidth >= 1350) {  // la popup ne s'affiche que si la fenêtre est suffisamment grande
        const _url = e.target.dataset.origUrl;
        document.getElementById("popup__img").src = _url;
        document.getElementById("popup__overlay").classList.toggle("popup__show");
        document.getElementById("popup__container").classList.toggle("popup__show");
        document.getElementById("popup__img").classList.toggle("popup__show");
        setTimeout(() => {
            document.getElementById("popup__img").classList.toggle("popup__zoom-img");
        }, 10); // on est obligé de retarder le zoom pour voir l'animation
    }
}

function popout(e) {
    document.getElementById("popup__overlay").classList.toggle("popup__show");
    document.getElementById("popup__container").classList.toggle("popup__show");
    document.getElementById("popup__img").classList.toggle("popup__show");
    document.getElementById("popup__img").classList.toggle("popup__zoom-img");
}