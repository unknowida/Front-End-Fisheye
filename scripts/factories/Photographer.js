function photographerFactory(data) {
  // Notion destructuring est une expression JavaScript qui permet d'extraire (unpack) des données d'un tableau ou d'un objet grâce à une syntaxe dont la forme ressemble à la structure du tableau ou de l'objet.
  const { name, id, city, country, tagline, price, portrait } = data

  const picture = `assets/photographers/${portrait}`

  //La function "getUserCardDOM" permettra d'éditer le DOM sans toucher au fichier HTML dans ce cas.
  function getUserCardDOM() {
    const article = document.createElement('article')

    const img = document.createElement('img')
    img.setAttribute('src', picture)
    article.appendChild(img)

    const h2 = document.createElement('h2')
    h2.textContent = name
    article.appendChild(h2)

    //?   Pourquoi on ne peut pas inserer X2 element (ex.city+country)
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
    // €/jour

    return article
  }
  return { name, picture, getUserCardDOM }
}
