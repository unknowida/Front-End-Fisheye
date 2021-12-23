function photographerFactory(data) {
  //*? */ Pourquoi il y a seulement name et portrait dans l'accolade (eclaircicement ligne 3)
  const { name, portrait } = data

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
    spanLocalisation.textContent = data.city
    article.appendChild(spanLocalisation)

      const resume = document.createElement('p')
      resume.textContent = data.tagline
      article.appendChild(resume)

      const cost = document.createElement('h3')
    

    return article
  }
  return { name, picture, getUserCardDOM }
}
