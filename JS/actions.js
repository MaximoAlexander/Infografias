document.getElementById('showTextButton').addEventListener('click', () => {
    const newTypewriter = document.getElementById('newTypewriter');
    newTypewriter.style.display = 'block';

    const text = newTypewriter.textContent;
    newTypewriter.textContent = '';
    let index = 0;

    function type() {
        if (index < text.length) {
            newTypewriter.textContent += text.charAt(index);
            index++;
            setTimeout(type, 75); // Ajusta la velocidad de escritura aquí
        }
    }

    type();
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.text-random-color');
    elements.forEach(element => {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        element.style.color = randomColor;
    });
});