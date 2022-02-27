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

async function loadPhotographerData() {
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

  return [photographer, medias]
}

async function loadAndDisplayMedia(photographer, medias) {
  const mainSectionElement = document.querySelector('#main')

  // debugger
  const responsePhotographer = photographerDetailsFactory(photographer)
  mainSectionElement.appendChild(
    responsePhotographer.createPhotographersDetailsDOM(),
  )

  const existingMediaSection = document.querySelector('.media-section')

  if (existingMediaSection) {
    //changer les proprietés des order elements

    let index = 0
    for (const media of medias) {
      const mediaElement = document.querySelector(`[data-id='${media.id}']`)
      mediaElement.style.order = index
      index += 1
    }
  } else {
    const mediaSectionElement = document.createElement('section')
    mediaSectionElement.className = 'media-section'
    mainSectionElement.appendChild(mediaSectionElement)
    // Création d'une boucle "for(const...of...){} qui va lire et associer dans l'ordre la variable "photograph" pour chaque accolade (ou tableau objet) du fichier JSON du la clé ["photographers"]
    for (const media of medias) {
      const response = mediaFactory(media)
      mediaSectionElement.appendChild(response.createCardByPhotographerDOM())
      // debugger
    }
  }
}

// displayData(photographers);

// const sortByLikesOnClickCallback

const registerSortByLikesClickListener = (medias) => {
  const sortByLikesOnClickCallback = () => {
    // debugger
    const sortedMedias = [...medias]
    sortedMedias.sort((media1, media2) => {
      return media2.likes - media1.likes
    })
    loadAndDisplayMedia(photographer, sortedMedias)
  }

  document
    .querySelector('.sort-by-likes')
    .addEventListener('click', sortByLikesOnClickCallback)
}

loadPhotographerData().then(([photographer, medias]) => {
  registerSortByLikesClickListener(photographer, medias)

  // Page d'acceuil vide aprèes chargement HTML/CSS , ensuite on fait loa+dAndDisplayPhotographers() pour amorcer toutes les étapes contenues dans la (function loadAndDisplayPhotographers())
  loadAndDisplayMedia(photographer, medias)
})
