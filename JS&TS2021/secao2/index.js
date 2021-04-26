function escope() {

  const formInformations = document.querySelector('.formInformations')
  const resultList = document.querySelector('.resultList')
  const btnSubmit = document.querySelector('.btnSubmit')

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
    const lastname = document.querySelector('.lastname')
    const formWeight = document.querySelector('.formWeight')
    const formHeight = document.querySelector('.formHeight')
    const people = [];

    people.push({
      name: formName.value,
      lastname: lastname.value,
      weight: formWeight.value,
      height: formHeight.value,
    })

    people.map(person => {
      resultList.appendChild(
        `<li>
          ${person.name}
          ${person.lastname}
          ${person.weight}
          ${person.height}
        </li>`
      )
    }

    // const li = createLi();
    // li.innerHTML += `${name.value} ${lastname.value} ${weight.value} ${height.value}`
    // resultList.appendChild(li);

    clear(formName, lastname, formWeight, formHeight);
    formName.focus();

  }

  btnSubmit.addEventListener('click', handleClick)

}
escope();