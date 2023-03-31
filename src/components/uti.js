// liste des jeux en ligne

const listeUser = [
    {
        id: "63e91ed1aa8607500004d004",
        login: "essaiavec",
        email: "joueur3@mail.com",
        password: "essaie",
        role: "user"
    },
    {
        id: "aaaaaaaaaaaaaa",
        login: "toto",
        email: "joueur2@mail.com",
        password: "essaie2",
        role: "user"
    }
];

//fonction get pour récuperer l'integralité de la liste
function getListeUser() {
    return listeUser;
}

// fonction pour recuperer un user avec son id
function getUser(id) {
    let Jeu = {};
    console.log(id);
    console.log(listeUser);

    listeUser.forEach((element) => {
        console.log(element.id.toString());

        if (element.id.toString() === id) {
            console.log(element.id);

            Jeu = element;
        }
    });
    return Jeu;
}

// fonction pour mettre à jour un user avec ses nouvelles informations
function updateUser(user) {
    for (let i = 0; i < listeUser.length; i++) {
        if (listeUser[i].id === user.id) {
            listeUser[i] = user;
            break;
        }
    }
}

export default { getListeUser, getUser, updateUser };
