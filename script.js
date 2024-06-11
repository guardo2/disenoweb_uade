document.getElementById('input').addEventListener('change', () => {
    document.body.classList.toggle('light-mode');
    const elements = document.querySelectorAll('header, nav a, section, footer');
    elements.forEach(element => {
        element.classList.toggle('light-mode');
    });
});
