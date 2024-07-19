const sections = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(section => {
        const top = window.scrollY;
        const offset = section.offsetTop - 150;
        const height = section.offsetHeight;

        if(top >= offset && top  < offset + height) {
            section.classList.add('show-animate');
        } else {
            section.classList.remove('show-animate');
        }
    });
};