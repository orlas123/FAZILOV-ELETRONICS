let indiceAtual = 0; // Índice da imagem atual
const itens = document.querySelectorAll('.item'); // Seleciona todas as imagens na lista

// Exibe a imagem inicial
itens[indiceAtual].style.display = 'block';

document.getElementById('showImageButton').addEventListener('click', function() {
    // Oculta todas as imagens
    itens.forEach(item => item.style.display = 'none');

    // Verifica se o índice atual está dentro do array
    if (indiceAtual < itens.length) {
        // Exibe a imagem atual
        itens[indiceAtual].style.display = 'block';
        // Incrementa o índice para a próxima imagem
        indiceAtual++;
    } else {
        // Se todas as imagens foram exibidas, reseta o índice
        indiceAtual = 0;
    }
});
