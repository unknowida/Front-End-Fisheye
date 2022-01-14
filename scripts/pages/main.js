async function getPhotographers() {
  // 1 fois pour reccupération de la réponse
  const response = await fetch('./data/photographers.json')
  // 2 eme fois pour la requete transforme en JSON
  const photographersAndMediaJson = await response.json()

  // il s'agit de réccuperer uniquement le tableau ["photographers"] du fichier JSON
  return photographersAndMediaJson.photographers

  // Penser à remplacer par les données récupérées dans le json
  // const photographers = [
  //     {
  //         "name": "Ma data test",
  //         "id": 1,
  //         "city": "Paris",
  //         "country": "France",
  //         "tagline": "Ceci est ma data test",
  //         "price": 400,
  //         "portrait": "account.png"
  //     },
  //     {
  //         "name": "Autre data test",
  //         "id": 2,
  //         "city": "Londres",
  //         "country": "UK",
  //         "tagline": "Ceci est ma data test 2",
  //         "price": 500,
  //         "portrait": "account.png"
  //     },
  // ]
  // // et bien retourner le tableau photographers seulement une fois
  // return ({
  //     photographers: [...photographers, ...photographers, ...photographers]})
}

// async function displayData(photographers) {
//     const photographersSection = document.querySelector(".photographer_section");

//     photographers.forEach((photographer) => {
//         const photographerModel = photographerFactory(photographer);
//         const userCardDOM = photographerModel.getUserCardDOM();
//         photographersSection.appendChild(userCardDOM);
//     });
// };

// Fonction "loadAndDisplayPhotographers" (ou appelé autrement) est créée pour permettre l'initialisation de la page
async function loadAndDisplayPhotographers() {
  // Récupère les datas des photographes
  const photographers = await getPhotographers()

  // displayData(photographers);
  const photographerSectionElementHomepage = document.querySelector(
    '.photographer_section',
  )

  const photographerHeaderElementPhotographer = document.querySelector(
    'photographer_header',
  )

  // Création d'une boucle "for(const...of...){} qui va lire et associer dans l'ordre la variable "photograph" pour chaque accolade (ou tableau objet) du fichier JSON du la clé ["photographers"]
  for (const photograph of photographers) {
    const response = photographerFactory(photograph)

    photographerSectionElementHomepage.appendChild(
      response.createPhotographersCardDOM(),
    )
  }
}
// Page d'acceuil vide aprèes chargement HTML/CSS , ensuite on fait loadAndDisplayPhotographers() pour amorcer toutes les étapes contenues dans la (function loadAndDisplayPhotographers())
loadAndDisplayPhotographers()
