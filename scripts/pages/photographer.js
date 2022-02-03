//Mettre le code JavaScript lié à la page photographer.html

async function getPhotographerAndMedia(photographerId) {
  // 1 fois pour reccupération de la réponse
  const response = await fetch('./data/photographers.json')
  // 2 eme fois pour la requete transforme en JSON
  const photographersAndMediaJson = await response.json()

  const photographers = photographersAndMediaJson.photographers

  let currentPhotographer
  // Boucle qui va s'itérer et permettra de vérifier reccuperer le photographe qui nous interesse de tout les photographers que l'on aura placer en paramettre.
  for (let photographer of photographers) {
    if (photographer.id === photographerId) {
      currentPhotographer = photographer
    }
  }

  const allMedias = photographersAndMediaJson.media

  let currentPhotographerMedias = []
  // l'iteration se fait sur tout les médias , si un media possede le même photographerId demandé par le
  for (let media of allMedias) {
    if (media.photographerId === photographerId) {
      // push permet d'ajouter l'arguùment (media) en paramettre du tableau --> ex: (let currentPhotographerMedias = [media])
      currentPhotographerMedias.push(media)
    }
  }

  return [currentPhotographer, currentPhotographerMedias]

  // il s'agit de réccuperer uniquement le tableau ["media"] du fichier JSON
  // return photographersAndMediaJson.media

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
  // Reccupération dans l'url , de l'id du photographe.

  // Depuis la page photographer.html , je reccupere l'id du du photographe "photographId" depuis l'URL (location.seearch) ex:"?photographerId=243"
  //? pourquoi mettre new pour cette variable?
  const searchParams = new URLSearchParams(location.search)
  // le parseInt permettra de convertir et spécifier que 'photographerId' sera un nombre
  const photographerId = parseInt(searchParams.get('photographerId'))

  // Récupère les datas des photographes et des medias du fichier JSON
  // le role de la fonction getPhotographerAndMedia est de me retourner les photographes et les medias par rapport à l'Id que je lui communique en argument (photographerId)
  // ?Comment s'appelle la technique de const [] ci-sessous
  const [photographer, medias] = await getPhotographerAndMedia(photographerId)

  const mainSectionElement = document.querySelector(
    '#main',
  )

  // debugger
  const responsePhotographer = photographerDetailsFactory(photographer)
  mainSectionElement.appendChild(
    responsePhotographer.createPhotographersDetailsDOM(),
  )

  // displayData(photographers);
  const mediaSectionElement = document.querySelector('#main')
  // Création d'une boucle "for(const...of...){} qui va lire et associer dans l'ordre la variable "photograph" pour chaque accolade (ou tableau objet) du fichier JSON du la clé ["photographers"]
  for (const media of medias) {
    const response = mediaFactory(media)
    mediaSectionElement.appendChild(response.createCardByPhotographerDOM())
    // debugger
  }
}

// Page d'acceuil vide aprèes chargement HTML/CSS , ensuite on fait loadAndDisplayPhotographers() pour amorcer toutes les étapes contenues dans la (function loadAndDisplayPhotographers())
loadAndDisplayMedia()



