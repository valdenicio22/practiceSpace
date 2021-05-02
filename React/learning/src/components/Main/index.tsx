import React from 'react'
import { Employee } from '../Employee'
import axios from 'axios'

interface todosInfo{
  completed: boolean,
  id: number,
  title: string,
  userID: number,
}


export const Main = () => {
 

  const employeeInfo = [
    {
      id: '1',
      firstName: "Jack",
      lastName: "Smith",
      age: '21'
    },
    {
      id: '2',
      firstName: "Stephanie",
      lastName: "A",
      age: '22'
    },
    {
      id: '3',
      firstName: "George",
      lastName: "B",
      age: '23'
    },
    {
      id: '4',
      firstName: "Val",
      lastName: "Ferreira",
      age: '28'
    }
  ]
  const employeeHome = [
    {
      name: "Teste",
      age: "28"
    }
  ]

  // const [logged, setLogged] = React.useState(false)
  const [isActive, setIsActive] = React.useState(false);
  const [todos, setTodo] = React.useState<todosInfo[]>([])

  React.useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos`)
      .then((response) => {
        console.log(response)
        const todosData = response.data
        console.log(todosData)
        setTodo(todosData)
      })
  }, [])

  return (
    <div className="peopleContainer">
      <p>Wanna count the employees ?</p>
      <button onClick={() => setIsActive(!isActive)}>
        {isActive ? 'Im done' : 'Yes'}
      </button>
      {isActive && (<Employee />)}
      
        {/* {todos.map(todo => {
          console.log(todo)
          return (
          <ul key={todo.id}>
            <li>{todo.userID}</li>
            <li>{todo.id}</li>
            <li>{todo.title}</li>
            <li>{todo.completed}</li>
          </ul>
          )
        })} */}
      <ul>
      {todos && todos.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
      </ul>

    </div>

  )
}

{/* <h2>{logged ? 'You are logged' : 'Please Log in'} </h2>
      <button onClick={() => setLogged(!logged)}>
       {logged ? 'Log out' : 'Login' }
      </button>
      {logged && (
       <h1>Hey you</h1>
     )}
     
     

        <button onClick={() => handleChange()}>{number}</button>
       
      {employees && employeeInfo.length > 0 && (
        <>
        {console.log(employees)}
         <h2>Employee Informations</h2>
         {employeeInfo.map(employee => (
           <Employee key={employee.id} {...employee} />
         ))}
       </>
      )} */}