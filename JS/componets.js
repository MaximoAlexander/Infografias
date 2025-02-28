const typewriterDivs = document.querySelectorAll('.typewriter');

typewriterDivs.forEach((typewriterDiv) => {
  const text = typewriterDiv.textContent;
  typewriterDiv.textContent = '';
  let index = 0;

  function type() {
    if (index < text.length) {
      typewriterDiv.textContent += text.charAt(index);
      index++;
      setTimeout(type, 75); // Ajusta la velocidad de escritura aquí
    }
  }

  type();
});