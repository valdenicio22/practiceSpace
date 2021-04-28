const random = (min, max) => {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min)
}

const waiting = (msg, time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => { // a função interna será executado condicionada ao tempo
      if (typeof msg !== 'string') {
        reject(new Error('The Message need to be a string'))
        return
      }

      resolve(msg, ' was resolved', time);
    }, time)
  })
}

// waiting('Checking the dataBase', random(1, 3))
//   .then(response => {
//     console.log(response)
//     return waiting('Filtering the information', random(1, 3))
//   })
//   .then(response => {
//     console.log(response)
//     return waiting('organizing the data', random(1, 3))
//   })
//   .then(response => console.log(response))
//   .catch(e => console.log(e))

async function exe() {
  try {
    const fase1 = await waiting('Acessing dataBase', random(1, 3))
    console.log(fase1)

    const fase2 = await waiting(2, random(1, 3))
    console.log(fase2)

    const fase3 = await waiting('Organizing the data', random(1, 3))
    console.log(fase3)
  } catch (e) {
    console.log(e)
  }


  console.log('We are finisished on the fase 3', fase3)
}

exe();