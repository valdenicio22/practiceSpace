function escope() {
  const resultList = document.querySelector('.resultList')
  const btnSubmit = document.querySelector('.btnSubmit')

  const people = [];

  function createLi() {
    return document.createElement('li');
  }

  const clear = (name, lastname, weight, height) => {
    name.value = ''
    lastname.value = ''
    weight.value = ''
    height.value = ''
  }

  const handleClick = (e) => {
    e.preventDefault();

    const formName = document.querySelector('.formName')
    const formLastname = document.querySelector('.formLastname')
    const formWeight = document.querySelector('.formWeight')
    const formHeight = document.querySelector('.formHeight')

    people.push({
      name: formName.value,
      lastname: formLastname.value,
      weight: formWeight.value,
      height: formHeight.value,
    })

    console.log(people);

    const li = createLi();
    li.innerHTML += `${formName.value} ${formLastname.value} ${formWeight.value} ${formHeight.value}`
    resultList.appendChild(li);

    clear(formName, formLastname, formWeight, formHeight);
    formName.focus();

  }

  btnSubmit.addEventListener('click', handleClick)

}
escope();