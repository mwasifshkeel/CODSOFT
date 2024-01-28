let lastScroll = 0;
window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 79) {
        if (currentScroll > lastScroll) {
            document.getElementById("site-header").style.transform = "translateY(-100%)";
        } else {
            document.getElementById("site-header").style.transform = "translateY(0)";
        }
    }else{
        if (!(currentScroll > lastScroll)) {
            document.getElementById("site-header").style.transform = "translateY(0)";
        }
    }

    lastScroll = currentScroll;
});
document.addEventListener("DOMContentLoaded", function () {
    const triggerElement = document.querySelector('#wsf_pf_s4');
    const element = document.querySelector('#wsf_pf_s4 h1');

    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateElement();
                observer.unobserve(triggerElement);
            }
        });
    }

    function animateElement() {
        element.classList.add('visible');
    }

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

    observer.observe(triggerElement);
});
document.addEventListener("DOMContentLoaded", function () {
    const triggerElement = document.querySelector('#wsf_pf_s4');
    const element = document.querySelector('.fadein');

    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateElement();
                observer.unobserve(triggerElement);
            }
        });
    }

    function animateElement() {
        element.classList.add('visible');
    }

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

    observer.observe(triggerElement);
});
document.addEventListener("DOMContentLoaded", function () {
    const triggerElement = document.querySelector('#wsf_pf_s5');
    const element = document.querySelector('#wsf_pf_s5 h1');

    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateElement();
                observer.unobserve(triggerElement);
            }
        });
    }

    function animateElement() {
        element.classList.add('visible');
    }

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

    observer.observe(triggerElement);
});
document.addEventListener("DOMContentLoaded", function () {
    const triggerElement = document.querySelector('#wsf_pf_s2');
    const element = document.querySelector('#wsf_pf_s2 h1');

    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateElement();
                observer.unobserve(triggerElement);
            }
        });
    }

    function animateElement() {
        element.classList.add('visible');
    }

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

    observer.observe(triggerElement);
});
document.addEventListener("DOMContentLoaded", function () {
    const triggerElement = document.querySelector('#wsf_pf_s1');
    const element = document.querySelector('#wsf_pf_s1 h1');

    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateElement();
                observer.unobserve(triggerElement);
            }
        });
    }

    function animateElement() {
        element.classList.add('visible');
    }

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

    observer.observe(triggerElement);
});
document.addEventListener("DOMContentLoaded", function () {
    const triggerElement = document.querySelector('#wsf_pf_s3');
    const element = document.querySelector('#wsf_pf_s3 h1');

    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateElement();
                observer.unobserve(triggerElement);
            }
        });
    }

    function animateElement() {
        element.classList.add('visible');
    }

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

    observer.observe(triggerElement);
});
function visitRepo1() {
    // Change the URL to the desired website
    var websiteURL = 'https://github.com/mwasifshkeel/CODSOFT';

    // Open the website in a new tab
    window.open(websiteURL, '_blank');
}
function visitRepo2() {
    // Change the URL to the desired website
    var websiteURL = 'https://github.com/mwasifshkeel/candy-crush-cpp';

    // Open the website in a new tab
    window.open(websiteURL, '_blank');
}