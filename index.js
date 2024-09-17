let currentImageIndex = 0;
const images = document.querySelectorAll('.item');
const showImageButton = document.getElementById('showImageButton');

// Inicializa todas as imagens como invisíveis, exceto a primeira
images.forEach((image, index) => {
    image.style.display = index === 0 ? 'block' : 'none';
});

function showNextImage() {
    // Esconde a imagem atual
    if (currentImageIndex >= 0 && currentImageIndex < images.length) {
        images[currentImageIndex].style.display = 'none';
    }

    // Mostra a próxima imagem
    currentImageIndex++;
    
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0; // Reinicia para a primeira imagem
    }

    images[currentImageIndex].style.display = 'block'; // Exibe a próxima imagem
}

// Adiciona um evento de clique ao botão
showImageButton.addEventListener('click', showNextImage);
