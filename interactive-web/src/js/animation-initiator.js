document.addEventListener("DOMContentLoaded", function () {
    // INITIATE GSAP
    gsap.from("#left-hero", { opacity: 0, x: 100, duration: 1 });
    gsap.from("#right-hero", { opacity: 0, x: -100, duration: 1 });

    // function to add the animation when in certaint screensize
    ScrollTrigger.matchMedia({
        "(min-width: 800px)": function () {
            gsap.from("#skin-concern", {
                scrollTrigger: "#skin-concern",
                opacity: 0,
            });
            gsap.from(".concern-container", {
                scrollTrigger: {
                    trigger: ".concern-container",
                    scrub: 1,
                    start: "top+=180px center",
                    pin: true,
                    marker: true
                },
                opacity: .5
            });
        }
    })

    // add gsao ti skincare recipes
    gsap.from("#skincare-recipes", {
        scrollTrigger: "#skincare-recipes",
        opacity: 0,
    });

    // add gsao ti shopping guides
    gsap.from("#shopping-guide", {
        scrollTrigger: "#shopping-guide",
        opacity: 0,
    });

    setTimeout(() => {
        ScrollTrigger.refresh();
    }, 1000);

    // initiate lenis
    const lenis = new Lenis({
        duration: 1, // speed
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
        direction: "vertical",
        gestureDirection: "vertical",
        smooth: true,
        mouseMultiplier: 0.5,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // initiate aos
    AOS.init();
});
