const btn = document.querySelector('.btn');

const getIMC = (peso, altura) => {
  const IMC = peso / altura ** 2
  return IMC.toFixed(1);
}

const getImcLevel = (imc) => {
  const results = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']
  if (imc >= 40) return results[5];
  if (imc >= 35) return results[4];
  if (imc >= 30) return results[3];
  if (imc >= 25) return results[2];
  if (imc >= 18.5) return results[1];
  if (imc <= 18.4) return results[0];
}

const createP = (msg, flag) => {
  const p = document.createElement('p');
  p.innerHTML = `${msg}`
  flag ? p.classList.add('isActive') : p.classList.add('invalidActive')

  return p;
}

const setResult = (msg, flag) => {
  console.log(msg, flag);
  const resultList = document.querySelector('.resultList');
  resultList.innerHTML = '';

  const p = createP(msg, flag);
  resultList.appendChild(p);
}

const handleClick = (e) => {
  e.preventDefault();

  const inputPeso = Number(document.querySelector('.inputPeso').value);
  const inputAltura = Number(document.querySelector('.inputAltura').value);

  if (!inputPeso || !inputAltura) {
    setResult('Weight or Height invalid', false)
    return
  }

  const imcValue = getIMC(inputPeso, inputAltura);
  const imcLevel = getImcLevel(imcValue);

  return setResult(`Your IMC is ${imcValue} ${imcLevel}`, true)
}

btn.addEventListener('click', handleClick);

