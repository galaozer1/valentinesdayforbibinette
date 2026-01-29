document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');
    const messageContainer = document.getElementById('messageContainer');
    const romanticImage = document.getElementById('romanticImage');

    // Messages pour le bouton OUI (qui grossissent)
    const yesMessages = [
        "OMG ! Quelle joie !",
        "Je suis tellement heureux(se) !",
        "C'est la meilleure réponse !",
        "Je t'aime ! ❤️"
    ];

    // Messages pour le bouton NON
    const noMessages = [
        "Es-tu sûr de toi ?",
        "Réfléchis bien...",
        "Je te donne une autre chance !",
        "Mon petit cœur se brise... 💔",
        "Mauvais bouton, réessaie ! 😉"
    ];

    let yesIndex = 0;
    let noIndex = 0;
    let currentFontSize = 1.5;

    // Gère le bouton "Non"
    noButton.addEventListener('click', () => {
        // 1. Changer l'image pour une image triste/dubitative
        // Remplace l'URL par une image de ton choix
        romanticImage.src = "angry_dudu.jpg"; 

        // 2. Afficher un message de "No"
        messageContainer.innerHTML = `<p style="color: #555; font-style: italic;">${noMessages[noIndex % noMessages.length]}</p>`;
        noIndex++;

        // 3. Faire bouger le bouton (optionnel, mais drôle)
        const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
        const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
        noButton.style.position = 'absolute';
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });

    // Gère le bouton "Oui"
    yesButton.addEventListener('click', () => {
        // 1. Remettre l'image romantique de base
        romanticImage.src = "https://picsum.photos/id/1084/600/400"; 

        // 2. Créer le message qui grossit
        const msg = document.createElement('p');
        msg.textContent = yesMessages[yesIndex % yesMessages.length];
        msg.style.fontSize = `${currentFontSize}em`;
        msg.style.fontWeight = "bold";
        msg.style.color = "#ff69b4";
        msg.style.transition = "all 0.5s ease";
        
        // On nettoie les messages de "Non" avant d'ajouter les "Oui"
        if (yesIndex === 0) messageContainer.innerHTML = ''; 
        
        messageContainer.appendChild(msg);

        // 3. Augmenter la taille pour le prochain clic
        currentFontSize += 0.5;
        yesIndex++;

        // Remettre le bouton No à sa place si on veut
        noButton.style.position = 'static';
    });
});
