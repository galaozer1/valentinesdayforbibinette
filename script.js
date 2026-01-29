document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');
    const messageContainer = document.getElementById('messageContainer');
    const romanticImage = document.getElementById('romanticImage');

    // Garde précieusement les URLs de tes images ici
    const imageInitiale = "Lien_De_Ton_Image_Romantique.jpg";
    const imageTriste = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHpueXp3eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/OPU6wUKARA3NTDCf8r/giphy.gif";

    const messagesOui = [
        "OMG ! Quelle joie !",
        "Je suis tellement heureux(se) !",
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
        // 1. Change l'image
        romanticImage.src = imageTriste;

        // 2. Affiche le message de doute (remplace le précédent)
        messageContainer.innerHTML = `<p style="color: #c71585; font-size: 1.5em; font-weight: bold;">${messagesNon[nonIndex % messagesNon.length]}</p>`;
        nonIndex++;

        // 3. Déplace le bouton pour le rendre difficile à cliquer
        const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
        const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
        noButton.style.position = 'fixed'; // 'fixed' pour qu'il bouge partout sur l'écran
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });

    // GESTION DU BOUTON OUI
    yesButton.addEventListener('click', () => {
        // 1. Remet l'image de base (ou une encore plus joyeuse)
        romanticImage.src = imageInitiale;

        // 2. Si c'est le premier clic sur "Oui", on vide les messages de doute
        if (ouiIndex === 0) {
            messageContainer.innerHTML = '';
            noButton.style.display = 'none'; // On cache le bouton "No" pour de bon
        }

        // 3. Crée le message qui grossit
        const newMsg = document.createElement('p');
        newMsg.textContent = messagesOui[ouiIndex % messagesOui.length];
        newMsg.style.fontSize = `${currentFontSize}em`;
        newMsg.style.color = "#ff69b4";
        newMsg.style.fontWeight = "bold";
        newMsg.style.margin = "10px 0";
        
        messageContainer.appendChild(newMsg);

        // 4. On fait grossir le texte pour le prochain coup
        currentFontSize += 0.5;
        ouiIndex++;
    });
});
