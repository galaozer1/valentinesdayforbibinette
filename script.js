document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');
    const messageContainer = document.getElementById('messageContainer');
    const romanticImage = document.getElementById('romanticImage');

    // Chemins vers tes images
    const imageInitiale = "./romantic_image.jpg";
    const imageTriste = "./angry_dudu.jpg";

    const messagesOui = [
        "OMG ! Quelle joie !",
        "Je suis tellement heureux !",
        "C'est la meilleure réponse !",
        "Je t'aime ! ❤️"
    ];

    const messagesNon = [
        "Es-tu sûr de toi ?",
        "Réfléchis bien...",
        "Je te donne une autre chance !",
        "Vraiment ? 🥺"
    ];

    let ouiIndex = 0;
    let nonIndex = 0;
    let currentFontSize = 1.5;

    // GESTION DU BOUTON NON
    noButton.addEventListener('click', () => {
        // 1. Change l'image pour l'image triste
        romanticImage.src = imageTriste;

        // 2. Création du message de doute
        const newNoMsg = document.createElement('p');
        newNoMsg.textContent = messagesNon[nonIndex % messagesNon.length];
        newNoMsg.style.color = "#c71585";
        newNoMsg.style.fontSize = "1.3em";
        newNoMsg.style.fontWeight = "bold";
        newNoMsg.style.fontStyle = "italic";

        // 3. AJOUT EN HAUT (Prepend)
        messageContainer.prepend(newNoMsg);
        nonIndex++;

        // 4. Déplace le bouton n'importe où sur l'écran
        const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
        const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
        noButton.style.position = 'fixed';
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });

    // GESTION DU BOUTON OUI
    yesButton.addEventListener('click', () => {
        // 1. Remet l'image de base
        romanticImage.src = imageInitiale;

        // 2. Premier clic sur Oui : on nettoie les messages de "Non" et on cache le bouton
        if (ouiIndex === 0) {
            messageContainer.innerHTML = '';
            noButton.style.display = 'none';
        }

        // 3. Création du message de joie
        const newMsg = document.createElement('p');
        newMsg.textContent = messagesOui[ouiIndex % messagesOui.length];
        newMsg.style.fontSize = `${currentFontSize}em`;
        newMsg.style.color = "#ff4d6d";
        newMsg.style.fontWeight = "bold";

        // 4. AJOUT EN HAUT (Prepend)
        messageContainer.prepend(newMsg);

        // 5. Augmente la taille pour le prochain
        currentFontSize += 0.5;
        ouiIndex++;
    });
});
