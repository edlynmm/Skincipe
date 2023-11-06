document.addEventListener("DOMContentLoaded", function () {
    // Function to create guide card
    function createGuideCard(number, title, description, index) {
        const guideCard = document.createElement('div');
        guideCard.className = 'guide-card';
        guideCard.setAttribute('data-aos', 'fade-up');
        guideCard.setAttribute('data-aos-delay', index * 50);

        const guideCardHead = document.createElement('div');
        guideCardHead.className = 'guide-card__head';

        const numberDiv = document.createElement('div');
        numberDiv.className = 'number';
        numberDiv.textContent = number;

        const titleDiv = document.createElement('div');
        titleDiv.className = 'title';
        titleDiv.textContent = title;

        guideCardHead.appendChild(numberDiv);
        guideCardHead.appendChild(titleDiv);

        const descriptionPara = document.createElement('p');
        descriptionPara.textContent = description;

        guideCard.appendChild(guideCardHead);
        guideCard.appendChild(descriptionPara);

        return guideCard;
    }

    // Array of guide card data
    const guideCardDataArray = [
        {
            number: '1',
            title: 'Identify Your Skin Type and Concerns',
            description: "Determine your skin type (e.g., oily, dry, combination, sensitive) and any specific concerns (e.g., acne, fine lines, dark spots) you want to address. Understanding your skin's needs is the first step in choosing suitable products."
        },
        {
            number: '2',
            title: 'Research Ingredients',
            description: "Learn about key skincare ingredients and their benefits. Look for ingredients that target your specific concerns. For example, if you have acne-prone skin, consider products with salicylic acid or benzoyl peroxide."
        },
        {
            number: '3',
            title: 'Read Product Labels',
            description: "Carefully read the labels of skincare products. Check for ingredients that are known to be effective for your concerns and skin type. Also, watch out for any ingredients that you may be allergic to or that could irritate your skin.."
        },
        {
            number: '4',
            title: 'Consider Your Routine',
            description: "Think about your daily skincare routine. Ensure that the products you choose fit into your routine seamlessly. This includes cleansers, toners, serums, moisturizers, and sunscreen.."
        },
        {
            number: '5',
            title: 'Patch Test New Products',
            description: "Before applying a new product to your entire face, perform a patch test. Apply a small amount of the product to a discreet area of your skin, such as your forearm, and wait to see if you experience any adverse reactions like redness or itching.."
        },
        {
            number: '6',
            title: 'Search for Recommendations',
            description: "Research online reviews and seek recommendations from friends, family, or skincare professionals. Hearing about others' experiences with specific products can provide valuable insights.."
        },
        // Add more guideCardData objects as needed
    ];

    // Select the guide descriptions container
    const guideDescriptions = document.querySelector('.guide-descriptions');

    // Create and append each guide card to the guide descriptions section
    guideCardDataArray.forEach((guideCardData, index) => {
        const guideCard = createGuideCard(guideCardData.number, guideCardData.title, guideCardData.description, index + 1);
        guideDescriptions.appendChild(guideCard);
    });

})