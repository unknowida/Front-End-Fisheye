function photographerFactory(dataPhotographers) {
  // Notion destructuring est une expression JavaScript qui permet d'extraire (unpack) des données d'un tableau ou d'un objet grâce à une syntaxe dont la forme ressemble à la structure du tableau ou de l'objet.
  const { name, id, city, country, tagline, price, portrait } = dataPhotographers
  // cons

  const picture = `assets/photographers/${portrait}`
  // const pictures = `assets/images/${image}`

  //La function "createAllphotographersDOM" permettra d'éditer le DOM sans toucher au fichier HTML dans ce cas.
  function createAllphotographersDOM() {
    const article = document.createElement('article')

    // const searchParams = new URLSearchParams(location.href)
    // searchParams.get('photographerId')

    const link = document.createElement('a')
    link.setAttribute('href','photographer.html')

    const img = document.createElement('img')
    img.setAttribute('src', picture)
    link.appendChild(img)

    const h2 = document.createElement('h2')
    h2.textContent = name
    link.appendChild(h2)
    
    article.appendChild(link)


    // DOM Elements

    // const link = document.createElement('a')
    // link.setAttribute('href', photographer.html?id=${id})
    
    // const article = document.createElement('article')
    // link.appendChild(article)

    // const focusPhotographer = document.querySelectorAll(`${img} , ${h2}`)

    // sensé permettre d'ecouter une zone cliquable.
    // focusPhotographer.forEach((btn) => btn.addEventListener('click'))
    // location.href

    // const a = document.createElement('a');
    // const linkPictureAndText = document.createTextNode("my title text");
    // a.appendChild(a);
    // a.textContent = `${name}, ${picture}`

    // a.title = "my title text";
    // a.href = "http://example.com";
    // document.`${h2}+ ${img}`.appendChild(a);

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
  return { name, picture, createAllphotographersDOM }
}
