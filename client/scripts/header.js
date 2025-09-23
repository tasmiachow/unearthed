const header = document.querySelector('header')

const headerContainer=document.createElement('div')
headerContainer.className = 'header-container'

const headerLeft = document.createElement('div')
headerLeft.className='header-left'

const headerImg = document.createElement('img')
headerImg.src = '/logo.png'

const headerH1 = document.createElement('h1')
headerH1.textContent="UnEarthed"

headerLeft.appendChild(headerImg)
headerLeft.appendChild(headerH1)

const headerRight = document.createElement('div')
headerRight.className='header-right'

const headerButton = document.createElement('Home')
headerButton.textContent='Home'
headerButton.addEventListener('click',function handleClick(event) {
    window.location='/'
})

headerRight.appendChild(headerButton)

headerContainer.appendChild(headerLeft)
headerContainer.appendChild(headerRight)

header.appendChild(headerContainer)