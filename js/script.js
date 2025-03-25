const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
  event.preventDefault(); /* Impede o recarregamente da página */

  const weight = document.getElementById('weight').value;
  const height = document.getElementById('height').value;

  const imc = (weight / (height * height)).toFixed(2);

  if (!isNaN(imc)) {
    const value = document.getElementById('value');
    let description = '';

    value.classList.add('attention');

    document.getElementById('infos').classList.remove("hidden");

    if (imc < 18.5) {
      description = "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        description = "Peso normal";
        value.classList.remove('attention');
        value.classList.add('normal');
    } else if (imc > 24.9 && imc <= 29.9) {
      description = "Sobrepeso";
    } else if (imc > 29.9 && imc <= 34.9) {
      description = "Obesidade I";
    } else if (imc > 34.9 && imc <= 39.9) {
      description = "Obesidade II";
    } else if (imc >= 40) {
      description = "Obesidade III";
    }

    value.textContent = imc.replace('.', ',');
    document.getElementById("description").textContent = description;
  }
});

form.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    document.getElementById('calculate').click();
  }
});
