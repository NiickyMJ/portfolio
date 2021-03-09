// Animation de translation lorsqu'on descend dans la page
window.addEventListener('scroll', RevelerElement);

function RevelerElement() {
    const ReleverElements = document.querySelectorAll('.reveler');

    for (let i = 0; i < ReleverElements.length; i++) {
        let GrandeurFenetre = window.innerHeight;
        let RevelerHaut = ReleverElements[i].getBoundingClientRect().top;
        let PointReveler = 150;

        if(RevelerHaut < GrandeurFenetre - PointReveler) {
            ReleverElements[i].classList.add('active');
        }    
        else {
            ReleverElements[i].classList.remove('active');
        }  
    }
}


// Menu Burger 
const Burger = document.querySelector('.Header .Menu-nav .Liste-nav .Burger');
const Menu_mobile = document.querySelector('.Header .Menu-nav .Liste-nav ul');
const Lien = document.querySelector('ul');
const Header = document.querySelector('.Header .conteneur')

// Fermer le menu en cliquant sur le x
Burger.addEventListener('click', () => {
    Burger.classList.toggle('active');
    Menu_mobile.classList.toggle('active');
});

// Fermer le menu en cliquant n'importe où dans le ul
Lien.addEventListener('click', () => {
    Burger.classList.toggle('active');
    Menu_mobile.classList.toggle('active');
});


// Filtre pour la galerie de projet 
const ListeProjet = document.querySelector('.Liste-projet');
const ItemGalerie = document.querySelectorAll('.Box-item');

ListeProjet.addEventListener('click', (event) => {
    // console.log(event.target);
    if (event.target.classList.contains('Liste-nom')) {
        // Désactiver la catégorie active
        ListeProjet.querySelector('.active').classList.remove('active');

        // Activer une nouvelle catégorie
        event.target.classList.add('active');

        // Si le data-filter est la même classe que l'image, alors il affichera slmt les images
        // avec la même classe
        const ValeurFiltre = event.target.getAttribute('data-filter');

        ItemGalerie.forEach(item => {
            if (item.classList.contains(ValeurFiltre) || ValeurFiltre === 'Tout') {
                item.classList.remove('hide');
                item.classList.add('show');
            }
            else {
                item.classList.remove('show');
                item.classList.add('hide');
            }
        });
    }
});