const handleChangeSection = (number, btn = null) => {
    setTimeout(() => {
        hideActiveSection();
        hideAllHomeSections();
        document.querySelector(`.section-${number}`).scrollIntoView();
        ScrollTrigger.refresh()

        const sections = document.querySelectorAll(`.section.section-${number}`);
        if (sections) {
            sections.forEach(element => {
                element.classList.add('active');
            })
        }

        // refresh animation trigger offset
        AOS.refresh()
    }, 100);    

    // check if user click the skin type
    if (number == 1) {
        const type = btn.getAttribute('data-type')
        const bookIcon = [1, 2, 3, 4, 5]

        // initialize the tooltip
        bookIcon.forEach((element, idx) => {
            document.querySelector(`#book-${element} img`)._tippy?.destroy()

            tippy(`#book-${element} img`, {
                content: skincareProducts[type][idx],
            });
        })
    }
};

// function to change home
const handleChangeHome = () => {
    hideActiveSection();
    showAllHomeSections();
    window.scrollTo(0, 0);
    ScrollTrigger.refresh()
};

// function to hide current active section
function hideActiveSection() {
    const activeSections = document.querySelectorAll(".section.active");
    if (activeSections) {
        activeSections.forEach(element => {
            element.classList.remove("active");
        })
    }
}

// function to hide home section
function hideAllHomeSections() {
    const homeSections = document.querySelectorAll('.home');
    homeSections.forEach((element) => {
        element.style.display = 'none';
    });
}

// function to show home section
function showAllHomeSections() {
    const homeSections = document.querySelectorAll('.home');
    homeSections.forEach((element) => {
        element.style.display = 'block';
    });
}

// function to initialize dialog component
function setDialogFunctionality(dialogElement) {
    const dialog = document.querySelector(dialogElement);
    const openButton = document.querySelector(`.open-dialog${dialogElement}`);
    const closeButton = dialog.querySelector('sl-button[slot="footer"]');

    openButton.addEventListener('click', () => dialog.show());
    closeButton.addEventListener('click', () => dialog.hide());
}

document.addEventListener("DOMContentLoaded", function () {
    const homeButtons = document.querySelectorAll('.home-button');
    
    // add event listener to all home buttons
    homeButtons.forEach(element => {
        element.addEventListener('click', () => {
            handleChangeHome();
        });
    });

    // initialize dialogs
    setDialogFunctionality('.dialog-aha');
    setDialogFunctionality('.dialog-bha');
    setDialogFunctionality('.dialog-vitc');
    setDialogFunctionality('.dialog-niacinamide');
    setDialogFunctionality('.dialog-retinoids');
    setDialogFunctionality('.dialog-benzoyl');
});
