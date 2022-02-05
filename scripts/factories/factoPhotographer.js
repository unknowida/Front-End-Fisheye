function photographerFactory(dataPhotographers) {
  // Notion destructuring est une expression JavaScript qui permet d'extraire (unpack) des données d'un tableau ou d'un objet grâce à une syntaxe dont la forme ressemble à la structure du tableau ou de l'objet.
  const {
    name,
    id,
    city,
    country,
    tagline,
    price,
    portrait,
  } = dataPhotographers
  // cons

  const picture = `assets/photographers/${portrait}`
  // const pictures = `assets/images/${image}`

  //La function "createPhotographersCardDOM" permettra d'éditer le DOM sans toucher au fichier HTML dans ce cas.
  function createPhotographersCardDOM() {
    const article = document.createElement('article')

    const link = document.createElement('a')
    link.className = 'linkNamePicture'
    link.setAttribute('href', `photographer.html?photographerId=${id}`)

    const img = document.createElement('img')
    img.setAttribute('src', picture)
    link.appendChild(img)

    const h2 = document.createElement('h2')
    h2.textContent = name
    link.appendChild(h2)

    article.appendChild(link)

    const spanLocalisation = document.createElement('span')
    spanLocalisation.className = 'localisations'
    spanLocalisation.textContent = `${city}, ${country}`
    article.appendChild(spanLocalisation)

    const spanResume = document.createElement('span')
    spanResume.className = 'taglineResume'
    spanResume.textContent = tagline
    article.appendChild(spanResume)

    const cost = document.createElement('span')
    cost.className = 'priceByDay'
    cost.textContent = `${price}€/jour`
    article.appendChild(cost)

    return article
  }
  // debugger
  return { name, picture, createPhotographersCardDOM }
}

function photographerDetailsFactory(dataPhotographers) {
  // Notion destructuring est une expression JavaScript qui permet d'extraire (unpack) des données d'un tableau ou d'un objet grâce à une syntaxe dont la forme ressemble à la structure du tableau ou de l'objet.
  const { name, id, city, country, tagline, portrait } = dataPhotographers
  // cons

  const picture = `assets/photographers/${portrait}`
  // const pictures = `assets/images/${image}`

  //La function "createPhotographersCardDOM" permettra d'éditer le DOM sans toucher au fichier HTML dans ce cas.
  function createPhotographersDetailsDOM() {

    const headWrapper = document.createElement('div')
    headWrapper.className = 'photograph-header'


    const resumeWrapper = document.createElement('div')
    resumeWrapper.className = 'resume-wrapper'


    const title = document.createElement('h2')
    title.textContent = name
    resumeWrapper.appendChild(title)

    const spanLocalisation = document.createElement('span')
    spanLocalisation.className = 'localisations'
    spanLocalisation.textContent = `${city}, ${country}`
    resumeWrapper.appendChild(spanLocalisation)

    const spanResume = document.createElement('span')
    spanResume.className = 'taglineResume'
    spanResume.textContent = tagline
    resumeWrapper.appendChild(spanResume)

    headWrapper.appendChild(resumeWrapper)

    const button = document.createElement('button')
    button.className = 'contact_button'
    button.onclick = 'displayModal()'
    button.textContent = 'Contactez-moi'
    headWrapper.appendChild(button)

    const wrapperPortrait = document.createElement('div')
    wrapperPortrait.className = 'portrait-wrapper'


    const img = document.createElement('img')
    img.className = 'portrait'
    img.setAttribute('src', picture)
    wrapperPortrait.appendChild(img)

    headWrapper.appendChild(wrapperPortrait)


    return headWrapper
  }
  // debugger
  return { name, picture, createPhotographersDetailsDOM }
}
