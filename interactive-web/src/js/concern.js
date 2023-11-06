document.addEventListener("DOMContentLoaded", function () {
    // Helper function to create concern cards
    function createConcernCard(data) {
        const {
            imagePath,
            altText,
            title,
            concerns,
            name
        } = data;

        // Create concern card
        const concernCard = document.createElement('div');
        concernCard.className = 'concern-card';
        concernCard.setAttribute('data-type', name);

        // Create concern card image
        const concernCardImage = document.createElement('div');
        concernCardImage.className = 'concern-card__image';

        const image = document.createElement('img');
        image.src = imagePath;
        image.alt = altText;

        const titleDiv = document.createElement('div');
        titleDiv.innerHTML = title;

        concernCardImage.appendChild(image);
        concernCardImage.appendChild(titleDiv);

        // Create concern card list
        const concernCardList = document.createElement('div');
        concernCardList.className = 'concern-card__list';

        const ul = document.createElement('ul');

        concerns.forEach(concern => {
            const li = document.createElement('li');
            li.textContent = concern;
            ul.appendChild(li);
        });

        concernCardList.appendChild(ul);

        // Append parts to the concern card
        concernCard.appendChild(concernCardImage);
        concernCard.appendChild(concernCardList);

        return concernCard;
    }

    // Create concern cards
    const concernsData = [
        {
            imagePath: './src/images/skin-1.png',
            altText: 'skin concern image',
            title: 'Acne-prone Skin',
            name: 'acne',
            concerns: [
                'frequent breakouts: whiteheads, blackheads, pustules, and cysts.',
                'appears oily and may have enlarged pores.',
                'Blemishes, redness, and uneven skin texture.'
            ]
        },
        {
            imagePath: './src/images/skin-2.png',
            altText: 'skin concern image',
            title: 'Dry Skin',
            name: 'dry',
            concerns: [
                "Feels tight, rough, or flaky",
                "May appear dull and can be sensitive to harsh weather conditions.",
                "Discomfort",
                "Itching",
                "Development of fine lines and wrinkles. ",
            ]
        },
        {
            imagePath: './src/images/skin-3.png',
            altText: 'skin concern image',
            title: 'Dark Spot',
            name: 'dark',
            concerns: [
                "Also known as hyperpigmentation",
                "Skin that appear darker than the surrounding skin",
                "May be caused by sun exposure, acne scars, hormonal changes, or inflammation.",
                "Uneven complexion. ",
            ]
        },
        {
            imagePath: './src/images/skin-4.png',
            altText: 'skin concern image',
            title: 'Sensitive Skin',
            name: 'sensitive',
            concerns: [
                "Irritation and discomfort.",
                "Genetics",
                "Allergies",
                "Redness",
                "Burning",
                "Itching",
                "Stinging. ",
            ]
        }
    ];

    // Select the existing concern container
    const existingConcernContainer = document.querySelector('.concern-container');

    // Create and append cards to the existing container
    concernsData.forEach((data, idx) => {
        const concernCard = createConcernCard(data);
        existingConcernContainer.appendChild(concernCard);

        // Add separators
        const separator = document.createElement('div');
        separator.className = 'separator';

        if (idx < concernsData.length - 1)
            existingConcernContainer.appendChild(separator);
    });

    // add listener for each card
    const concernCards = document.querySelectorAll(".concern-card")
    concernCards.forEach(element => {
        element.addEventListener('click', function () {
            handleChangeSection('1', this)
        })
    });

})