document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');
    const links = document.querySelectorAll('.sidebar a');

    links.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);

            sections.forEach(function (section) {
                section.style.display = 'none';
            });

            document.getElementById(targetId).style.display = 'block';
        });
    });
});