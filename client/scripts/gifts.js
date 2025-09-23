const renderGifts = async () => {
    const response = await fetch('/gifts')
    const data = await response.json()
    const mainContent = document.getElementById('main-content')
    if (data){
        data.map(gift => {
            const card = document.createElement('div')
            card.classList.add('card')

            const topContainer = document.createElement('div')
            topContainer.classList.add("top-container")
            
            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add("bottom-container")

            topContainer.style.backgroundImage = `url(${gift.image})`


            const h3Elem = document.createElement('h3')
            h3Elem.textContent = gift.name 
            bottomContainer.appendChild(h3Elem)

            const price = document.createElement('p')
            price.textContent= 'Price: ' + gift.pricePoint
            bottomContainer.appendChild(price)

            const audience = document.createElement('p')
            audience.textContent= gift.audience
            bottomContainer.appendChild(audience)

            const readMore = document.createElement('a')
            readMore.textContent="Read More >"
            readMore.setAttribute('role','button')
            readMore.href=`/gifts/${gift.id}`
            bottomContainer.appendChild(readMore)

            card.appendChild(topContainer)
            card.appendChild(bottomContainer)

            mainContent.appendChild(card)
        })
    }else {
        const message = document.createElement('h2')
        message.textContent="No Gifts Available 😞"
        mainContent.appendChild(message)
    }
}

renderGifts()