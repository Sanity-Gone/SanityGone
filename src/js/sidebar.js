document.querySelectorAll('.op-list li a').forEach((link) => {
    link.onclick = (event) => {
        event.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView();
        return false;
    };
});

const original_toc_position =
    document.querySelector('.op-list').getBoundingClientRect().top +
    document.documentElement.scrollTop;
checkScroll();
window.onscroll = () => {
    checkScroll();
};

function checkScroll() {
    // sticky nav bar
    const el = document.querySelector('.op-list');
    if (el.getBoundingClientRect().top < 0) {
        el.style.position = 'fixed';
        el.style.top = 0;
    }
    if (document.documentElement.scrollTop < original_toc_position) {
        el.style.position = 'relative';
    }

    checkSectionVisited();
}

function checkSectionVisited() {
    document.querySelectorAll('.op-list a').forEach((link) => {
        const el = document.querySelector(link.getAttribute('href'));
        const is_visited =
            el.getBoundingClientRect().top < window.innerHeight * 0.6;
        if (is_visited) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}
