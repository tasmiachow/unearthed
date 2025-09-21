const renderGifts = async () => {
    const response = await fetch('/gifts');
    const data = await response.json();
    const mainContent = document.getElementById('main-content');

    if (data) {
        data.map(gift => {
            const card = document.createElement("div");
            card.classList.add("card");
            
            const topContainer = document.createElement("div");
            topContainer.classList.add("top-container");
            
            const bottomContainer = document.createElement("div");
            bottomContainer.classList.add("bottom-container");

            topContainer.style.backgroundImage = `url(${gift.image})`;

            const name = document.createElement("h3");
            name.textContent = gift.name;
            bottomContainer.appendChild(name);

            const price = document.createElement("p");
            price.textContent = `Price: ${gift.price}`;
            bottomContainer.appendChild(price);
            
            const audience = document.createElement("p");
            audience.textContent = `Audience: ${gift.audience}`;
            bottomContainer.appendChild(audience);

            const link = document.createElement("a");
            link.textContent = "Read More >";
            link.href = `/gifts/${gift.id}`;
            link.setAttribute("role", "button");
            bottomContainer.appendChild(link);

            card.appendChild(topContainer);
            card.appendChild(bottomContainer);
            mainContent.appendChild(card);
        });
    } else {
        const message = document.createElement("h2");
        message.textContent = "No Gifts Available 😞";
        mainContent.appendChild(message);
    }
};

renderGifts();