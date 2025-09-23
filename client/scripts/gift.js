const renderGift = async () => {
    const id = parseInt(window.location.href.split('/').pop())
    const response = await fetch('/gifts')
    const data = await response.json()
    const giftContent = document.getElementById('gift-content')
    const gift = data.find(gift => gift.id === id)

    if(gift){

        const imageContainer = document.createElement('div')
        imageContainer.classList.add('image-container')
        
        const image = document.createElement('img')
        image.src=gift.image

        const details = document.createElement('div')
        details.classList.add('details')

        const name = document.createElement('h2')
        name.id='name'

        const submittedBy = document.createElement('p')
        submittedBy.id='submittedBy'

        const submittedOn = document.createElement('p')
        submittedOn.id='submittedOn'

        const pricePoint = document.createElement('p')
        pricePoint.id='pricePoint'

        const audience = document.createElement('p')
        audience.id='audience'

        const description = document.createElement('p')
        description.id='description'

        details

    } else {
        const message = document.createElement('h2')
        message.textContent="No Gift Found 😞"
        giftContent.appendChild(message)
    }
}
renderGift()