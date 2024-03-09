document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('teste-valores');
    const campoA = document.getElementById('campo-A');
    const campoB = document.getElementById('campo-B');
    const errorMessage = document.querySelector('.error-mesage');
    const successMessage = document.querySelector('.success-message');

    formulario.addEventListener('submit', function (event) {
        event.preventDefault();

        const valorCampoA = parseFloat(campoA.value);
        const valorCampoB = parseFloat(campoB.value);

        if (!isNaN(valorCampoA) && !isNaN(valorCampoB) && valorCampoB > valorCampoA) {
            errorMessage.style.display = 'none';
            successMessage.textContent = 'Formulário válido! Campo B é maior que Campo A.';
            successMessage.style.display = 'block';

            campoA.value= '';
            campoB.value= '';


        } else {
            successMessage.style.display = 'none';
            errorMessage.style.display = 'block';
        }
    });
});
