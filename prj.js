// Ouvrir les modales
document.getElementById('loginBtn').addEventListener('click', function () {
    openModal('loginModal');
});
document.getElementById('signupBtn').addEventListener('click', function () {
    openModal('signupModal');
});

// Fonction pour ouvrir une modale
function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

// Fonction pour fermer une modale
function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// Gestion de la connexion
function handleLogin() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (email && password) {
        alert(`Connexion réussie pour ${email}`);
        closeModal('loginModal');
    } else {
        alert("Veuillez remplir tous les champs.");
    }
}

// Gestion de l'inscription
function handleSignup() {
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    if (name && email && password) {
        alert(`Inscription réussie pour ${name}`);
        closeModal('signupModal');
    } else {
        alert("Veuillez remplir tous les champs.");
    }
}
