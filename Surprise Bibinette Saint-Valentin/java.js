document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');
    const messageContainer = document.getElementById('messageContainer');
    const romanticImage = document.getElementById('romanticImage');

    const messages = [
        "OMG ! Quelle joie !",
        "Je suis tellement heureux(se) !",
        "C'est la meilleure réponse !",
        "Mon cœur s'envole !",
        "Tu es la personne la plus incroyable !",
        "Je t'aime !"
    ];

    let messageIndex = 0;
    let currentFontSize = 1.5; // Taille de base en em

    // Fonction pour générer un nombre aléatoire entre min et max (inclus)
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Gère le bouton "Non"
    noButton.addEventListener('mouseover', () => {
        // Déplace le bouton "Non" de manière aléatoire
        const containerRect = noButton.parentElement.getBoundingClientRect();
        const buttonRect = noButton.getBoundingClientRect();

        let newX = getRandomNumber(0, containerRect.width - buttonRect.width);
        let newY = getRandomNumber(0, containerRect.height - buttonRect.height);

        // Assurez-vous que le bouton ne sorte pas du conteneur et ne chevauche pas trop le bouton Yes
        // Très basique, mais mieux que rien pour éviter le Yes
        if (newX + buttonRect.width > yesButton.offsetLeft && newX < yesButton.offsetLeft + yesButton.offsetWidth) {
             newX = (newX < yesButton.offsetLeft) ? newX - buttonRect.width : newX + buttonRect.width;
        }


        noButton.style.position = 'absolute';
        noButton.style.left = `${newX}px`;
        noButton.style.top = `${newY}px`;
    });

    noButton.addEventListener('click', (event) => {
        event.preventDefault(); // Empêche toute action par défaut si le bouton avait un lien
        // Simule un clic sur le bouton "Yes"
        yesButton.click();
    });


    // Gère le bouton "Oui"
    yesButton.addEventListener('click', () => {
        // Réinitialise la position du bouton "No"
        noButton.style.position = 'static'; // Remet le bouton "No" à sa place normale
        noButton.style.left = '';
        noButton.style.top = '';


        // Crée un nouveau message
        const messageElement = document.createElement('p');
        messageElement.classList.add('message');
        messageElement.textContent = messages[messageIndex % messages.length]; // Boucle sur les messages

        // Augmente la taille de la police et la marge pour les prochains messages
        currentFontSize += 0.3; // Augmente la taille de 0.3em à chaque clic
        messageElement.style.fontSize = `${currentFontSize}em`;
        messageElement.style.marginTop = `${30 + (messageIndex * 5)}px`; // Augmente la marge

        messageContainer.appendChild(messageElement);

        // Affiche le message avec une petite animation
        setTimeout(() => {
            messageElement.classList.add('show');
        }, 50); // Un léger délai pour l'animation

        messageIndex++;

        // Optionnel : changer l'image après plusieurs clics ?
        // if (messageIndex === 3) {
        //     romanticImage.src = 'another-romantic-image.jpg';
        // }
    });

    // Charger une image romantique par défaut (vous pouvez la remplacer)
    romanticImage.src = 'https://picsum.photos/id/1084/600/400'; // Exemple d'image aléatoire
    romanticImage.alt = 'Un couple romantique se tenant la main au coucher du soleil';
});