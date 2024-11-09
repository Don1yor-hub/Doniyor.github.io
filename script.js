document.querySelectorAll('.icon').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.classList.add('hovered');
    });
    icon.addEventListener('mouseleave', () => {
        icon.classList.remove('hovered');
    });
});
