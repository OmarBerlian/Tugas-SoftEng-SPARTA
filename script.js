document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');

    function setActiveLink() {
        let index = sections.length;
        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        links.forEach((link) => link.classList.remove('active'));
        if (index >= 0) {
            links[index].classList.add('active');
        }
    }

    function showSection(sectionId) {
        sections.forEach(section => {
            if (section.id === sectionId) {
                section.classList.remove('hidden');
                section.classList.add('fade-in');
            } else {
                section.classList.add('hidden');
                section.classList.remove('fade-in');
            }
        });
    }

    showSection('introduction');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            showSection(targetId);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    window.addEventListener('scroll', () => {
        setActiveLink();
    });
});
