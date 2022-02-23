function mediaFactory(dataMedia) {
  // Notion destructuring est une expression JavaScript qui permet d'extraire (unpack) des données d'un tableau ou d'un objet grâce à une syntaxe dont la forme ressemble à la structure du tableau ou de l'objet.
  const {
    id,
    photographerId,
    title,
    tagline,
    image,
    video,
    likes,
    date,
    price,
  } = dataMedia
  // cons

  // const linkPhotographer = `assets/images/${image}`

  const logoLikes = `assets/icons/Heart.png`
  

  //La function "createCardByPhotographerDOM" permettra d'éditer le DOM sans toucher au fichier HTML dans ce cas.
  function createCardByPhotographerDOM() {
    const article = document.createElement('article')
    article.className = 'article-wrapper'
    article.setAttribute('data-id', id)

    // const wrapperArticleContent = document.createElement('div')
    // wrapperArticleContent.className = 'article-wrapper'

    const picture = document.createElement('img')
    picture.src = `assets/images/${photographerId}/${image}`
    picture.className = 'media-image'
    article.appendChild(picture)

    // const movie = document.createElement('video')
    // movie.src = `assets/images/${photographerId}/${video}`
    // movie.className = 'media-video'
    // article.appendChild(movie)

    const wrapperUnderDetails = document.createElement('div')
    wrapperUnderDetails.className = 'rating-wrapper'
    article.appendChild(wrapperUnderDetails)

    const namePicture = document.createElement('span')
    namePicture.textContent = title
    namePicture.className = 'title-picture'
    wrapperUnderDetails.appendChild(namePicture)

    const like = document.createElement('span')
    like.textContent = likes
    like.className = 'likes-rating'
    wrapperUnderDetails.appendChild(like, logoLikes)
    
    const heart = document.createElement('img')
    heart.className = 'logo-heart'
    heart.setAttribute('src', logoLikes)
    wrapperUnderDetails.appendChild(heart)

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
  return { title, createCardByPhotographerDOM }
}
