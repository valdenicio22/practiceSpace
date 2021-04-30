const random = (min, max) => {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min)
}

const waiting = (msg, time) => {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') {
      reject(new Error('Error'))
      return
    }
    setTimeout(() => { // a função interna será executado condicionada ao tempo
      resolve(msg.toUpperCase() + ' pass', time);
    }, time)
  })
}

// waiting('Promise 1', random(1, 3))
//   .then(response => {
//     console.log(response)
//     return waiting(123, random(1, 3))
//   })
//   .then(response => console.log(response))
//   .catch(e => console.log(e))


const promises = [
  'First value',
  waiting('Promise 1', 2000),
  waiting('Promise 2', 500),
  waiting('Promise 3', 1000),
  // waiting(123, 123),
  'another value'
]

//.race -> retorna o primeira a ser resolvido
Promise.all(promises)
  .then((response) => {
    console.log(response)
  })
  .catch((e) => console.log(e))


// waiting('Hello Promises 1', random(1, 3), () => {
//   waiting('Hello Promises 2', random(1, 3), () => {
//     waiting('Hello Promises 3', random(1, 3))
//   })
// })