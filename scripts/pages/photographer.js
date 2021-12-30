//Mettre le code JavaScript lié à la page photographer.html

async function getPhotographers() {
    // 1 fois pour reccupération de la réponse
    const response = await fetch('./data/photographers.json')
    // 2 eme fois pour la requete transforme en JSON
    const photographersAndMediaJson = await response.json()
  
    // il s'agit de réccuperer uniquement le tableau ["media"] du fichier JSON
    return photographersAndMediaJson.media
    
  
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
  
async function loadAndDisplayMedia() {
    // Récupère les datas des photographes
    const medias = await getPhotographers()
  
    // displayData(photographers);
    const mediaSectionElement = document.querySelector(
      '#main',
    )
  // Création d'une boucle "for(const...of...){} qui va lire et associer dans l'ordre la variable "photograph" pour chaque accolade (ou tableau objet) du fichier JSON du la clé ["photographers"]
    for (const media of medias) {
      const response = mediaFactory(media)
      mediaSectionElement.appendChild(response.getUserCardDOM())
      // debugger
    }
  }
  
  // Page d'acceuil vide aprèes chargement HTML/CSS , ensuite on fait loadAndDisplayPhotographers() pour amorcer toutes les étapes contenues dans la (function loadAndDisplayPhotographers())
  loadAndDisplayMedia()