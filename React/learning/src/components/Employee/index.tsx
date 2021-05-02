import React from 'react'

// interface Employee{
//     firstName: string,
//     lastName: string,
//     age: string,
// }

// export const Employee = (props: Employee) => {
//   const {firstName, lastName, age} = props;
//   return (
//     <h5>{`Employees: ${firstName} ${lastName} ${age}`}</h5>
//   )
// }

export const Employee = () => {
  const [count, setCount] = React.useState(0)
  // const [count2, setCount2] = React.useState(0)

  // React.useEffect(() => {
  //   console.log('component mounted')
  // }, [])

  // React.useEffect(() => {
  //   console.log('Component updating')
  // }, [count])

  // React.useEffect(() => {
  //   console.log('Component mounted')
  //   return () => (console.log('Component will UnMount'))
  // }, [])

  return (
    <>
      <h2>Count the employees <span>{count}</span> </h2>
      <button onClick={() => setCount(count + 1)}>Add Counter</button>
      <button onClick={() => setCount(count - 1)}>Decrease Counter</button>
    </>
  )
}
