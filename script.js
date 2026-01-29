document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');
    const messageContainer = document.getElementById('messageContainer');
    const romanticImage = document.getElementById('romanticImage');

    // --- CONFIGURATION DES IMAGES ---
    const imageInitiale = "./romantic_image.jpg"; // L'image au chargement
    const imageTriste = "./angry_dudu.jpg";       // L'image quand elle clique sur Non
    const imageOui = "./happy_victory.jpg";       // L'image quand elle clique sur Oui

    const messagesOui = [
        "OMG ! Quelle joie !",
        "Tu ne le regretteras pas !",
        "Tu as très bon goût !",
        "Normal bibinet le plus bg !",
        "Rendez-vous ce soir hihi",
        "Je t'aime ! ❤️"
    ];

    const messagesNon = [
        "Es-tu sûre de toi ?",
        "Réfléchis bien...",
        "Je te donne une autre chance !",
        "Bon ça suffit les conneries maintenant !!!!",
        "Tu te trouves drôle ?????",
        "CA SUFFIT J'AI DIT !!!",
        "Ultime chance !!!!",
        "Vraiment ? 🥺", // La virgule était manquante ici
        "Non je rigole, t'as pas le choix de toute façon !",
        "Allez, clique sur oui maintenant !"
    ];

    let ouiIndex = 0;
    let nonIndex = 0;
    let currentFontSize = 1.5;

    // GESTION DU BOUTON NON
    noButton.addEventListener('click', () => {
        // 1. Change l'image pour l'image triste/fâchée
        romanticImage.src = imageTriste;

        // 2. Création du message de doute
        const newNoMsg = document.createElement('p');
        newNoMsg.textContent = messagesNon[nonIndex % messagesNon.length];
        newNoMsg.style.color = "#c71585";
        newNoMsg.style.fontSize = "1.3em";
        newNoMsg.style.fontWeight = "bold";
        newNoMsg.style.fontStyle = "italic";

        // 3. AJOUT EN HAUT
        messageContainer.prepend(newNoMsg);
        nonIndex++;

        // 4. Déplace le bouton
        const padding = 20;
        const x = Math.random() * (window.innerWidth - noButton.offsetWidth - padding);
        const y = Math.random() * (window.innerHeight - noButton.offsetHeight - padding);
        
        noButton.style.position = 'fixed';
        noButton.style.left = `${Math.max(padding, x)}px`;
        noButton.style.top = `${Math.max(padding, y)}px`;
    });

    // GESTION DU BOUTON OUI
    yesButton.addEventListener('click', () => {
        // 1. Change l'image pour l'image de JOIE / VICTOIRE
        romanticImage.src = imageOui;

        // 2. Premier clic sur Oui : on nettoie les messages de "Non" et on cache le bouton
        if (ouiIndex === 0) {
            messageContainer.innerHTML = '';
            noButton.style.display = 'none';
            // On remet le bouton Yes au centre si besoin (optionnel)
            yesButton.style.margin = "0 auto";
        }

        // 3. Création du message de joie
        const newMsg = document.createElement('p');
        newMsg.textContent = messagesOui[ouiIndex % messagesOui.length];
        newMsg.style.fontSize = `${currentFontSize}em`;
        newMsg.style.color = "#ff4d6d";
        newMsg.style.fontWeight = "bold";

        // 4. AJOUT EN HAUT
        messageContainer.prepend(newMsg);

        // 5. Augmente la taille pour le prochain
        currentFontSize += 0.5;
        ouiIndex++;
    });
});

