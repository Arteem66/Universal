let recommendedItem = document.querySelectorAll('.recommen__item')



console.log(recommendedItem);

recommendedItem.forEach(item => {
  item.addEventListener('click', function (){
    recommendedItem.forEach(items => {
      items.classList.remove('recommen__item-active')
    })
    item.classList.add('recommen__item-active')
    item.classList.add('recommen__news-music')
  })
})

// ==============First add music icon===========

// let newsWithMusic = document.querySelectorAll('.recommen__news-music')

// newsWithMusic.forEach(musicNews => {
//   let musicIcon = document.createElement('img')
//   musicIcon.setAttribute("src","img/recommen-block/mini-Play.svg")

//   musicNews.append(musicIcon)
// })

// ==============Second add music icon===========

let news = document.querySelectorAll('.recommen__news')

news.forEach(elem =>{
  if (elem.classList.contains('recommen__news-music')){
    let musicIcon = document.createElement('img')
		musicIcon.setAttribute('src', 'img/recommen-block/mini-Play.svg')

		elem.append(musicIcon)
  }
})