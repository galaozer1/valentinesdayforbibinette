document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');
    const messageContainer = document.getElementById('messageContainer');
    const romanticImage = document.getElementById('romanticImage');
    const mainTitle = document.getElementById('mainTitle'); // On récupère le titre

    const imageInitiale = "./romantic_image.jpg";
    const imageTriste = "./angry_dudu.jpg";
    const imageOui = "./happy_victory.jpg";

    const messagesOui = [
        "OMG ! Quelle joie !",
        "Tu ne le regretteras pas !",
        "Tu as très bon goût !",
        "Normal bibinet le plus bg !",
        "Rendez-vous le 14 hihi",
        "Je t'aime ! ❤️",
        "Encore un petit clic ? ❤️",
        "Tu ne peux plus t'arrêter n'est-ce pas ?",
        "Bon, j'ai compris, tu m'aimes trop !"
    ];

    // On change aussi le texte du bouton Yes au fur et à mesure
    const boutonsTextes = [
        "Oui !",
        "Encore Oui !",
        "Toujours Oui !",
        "Absolument !",
        "À la folie !",
        "Pour la vie !"
    ];

    const messagesNon = [
        "Es-tu sûre de toi ?",
        "Réfléchis bien...",
        "Je te donne une autre chance !",
        "Bon ça suffit les conneries maintenant !!!!",
        "Tu te trouves drôle ?????",
        "CA SUFFIT J'AI DIT !!!",
        "Dernière chance !!!!",
        "Vraiment ? 🥺",
        "Non je rigole, t'as pas le choix de toute façon !",
        "Allez, clique sur oui maintenant !"
    ];

    let ouiIndex = 0;
    let nonIndex = 0;
    let currentFontSize = 1.5;

    noButton.addEventListener('click', () => {
        romanticImage.src = imageTriste;
        const newNoMsg = document.createElement('p');
        newNoMsg.textContent = messagesNon[nonIndex % messagesNon.length];
        newNoMsg.style.color = "#c71585";
        newNoMsg.style.fontSize = "1.3em";
        newNoMsg.style.fontWeight = "bold";
        newNoMsg.style.fontStyle = "italic";
        messageContainer.prepend(newNoMsg);
        nonIndex++;

        const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
        const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
        noButton.style.position = 'fixed';
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });

    yesButton.addEventListener('click', () => {
        romanticImage.src = imageOui;

        if (ouiIndex === 0) {
            messageContainer.innerHTML = '';
            noButton.style.display = 'none';
            mainTitle.textContent = "YAY ! Je savais ! 😍"; // On change le titre au premier clic
        }

        // --- LA MAGIE POUR CONTINUER À CLIQUER ---
        // 1. On change le texte du bouton pour donner envie de recliquer
        yesButton.textContent = boutonsTextes[ouiIndex % boutonsTextes.length];

        // 2. On crée le message de joie
        const newMsg = document.createElement('p');
        newMsg.textContent = messagesOui[ouiIndex % messagesOui.length];
        newMsg.style.fontSize = `${currentFontSize}em`;
        newMsg.style.color = "#ff4d6d";
        newMsg.style.fontWeight = "bold";
        newMsg.style.animation = "popIn 0.3s ease-out"; // Petite animation

        messageContainer.prepend(newMsg);

        // 3. On fait grossir le texte ET le bouton !
        currentFontSize += 0.3;
        yesButton.style.transform = `scale(${1 + ouiIndex * 0.1})`; // Le bouton grossit aussi légèrement
        
        ouiIndex++;
    });
});
