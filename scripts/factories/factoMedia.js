function mediaFactory(dataMedia) {
  // Notion destructuring est une expression JavaScript qui permet d'extraire (unpack) des données d'un tableau ou d'un objet grâce à une syntaxe dont la forme ressemble à la structure du tableau ou de l'objet.
  const {
    id,
    photographerId,
    title,
    tagline,
    image,
    likes,
    date,
    price,
  } = dataMedia
  // cons

  const linkPhotographer = `assets/images/${image}`
 

  //La function "createCardByPhotographerDOM" permettra d'éditer le DOM sans toucher au fichier HTML dans ce cas.
  function createCardByPhotographerDOM() {
    const article = document.createElement('article')

    const h2 = document.createElement('h2')
      h2.textContent = title
      article.appendChild(h2)

    // const searchParams = new URLSearchParams(location.search)
    // searchParams.get('photographerId')


    // const link = document.createElement('a')
    // link.setAttribute('href', linkPhotographer)
    // link.appendChild(article)

    // const img = document.createElement('img')
    // img.setAttribute('src', pictures)
    // article.appendChild(img)

    //  

    // DOM Elements

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

    //   const spanLocalisation = document.createElement('span')
    //   spanLocalisation.className = 'localisations'
    //   spanLocalisation.textContent = `${city}, ${country}`
    //   article.appendChild(spanLocalisation)

    //   const spanResume = document.createElement('span')
    //   spanResume.className = 'taglineResume'
    //   spanResume.textContent = tagline
    //   article.appendChild(spanResume)

    //   const cost = document.createElement('span')
    //   cost.className = 'priceByDay'
    //   cost.textContent = `${price}€/jour`
    //   article.appendChild(cost)

    return article
  }
  return { name, createCardByPhotographerDOM }
}
