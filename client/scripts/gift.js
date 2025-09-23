const renderGift = async () => {
    const gId = parseInt(window.location.href.split('/').pop())
    const response = await fetch('/gifts')
    const data = await response.json()
    const giftContent = document.getElementById('gift-content')
    let gift = data.find(gift => gift.id === gId)

    if(gift){

        const image = document.getElementById('image')
        image.src = gift.image

        const name = document.getElementById('name')
        name.innerHTML=gift.name 

        const by = document.getElementById('submittedBy')
        by.innerHTML = gift.submittedBy

        const on = document.getElementById('submittedOn')
        on.innerHTML = gift.submittedOn

        const price = document.getElementById('pricePoint')
        price.innerHTML = gift.pricePoint

        const audience = document.getElementById('audience')
        audience.innerHTML = gift.audience
        
        const desc = document.getElementById('description')
        desc.innerHTML = gift.description

    } else {
        const message = document.createElement('h2')
        message.textContent="No Gift Found 😞"
        giftContent.appendChild(message)
    }
}
renderGift()