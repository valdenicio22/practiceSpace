import React from 'react'
import { Employee } from '../Employee'
import axios from 'axios'
import styles from './styles.module.scss'
import {Switch, Route, Link} from 'react-router-dom'
import { About } from '../About'
import { Contact } from '../Contact'
import App from '../../App'
import { useHistory } from 'react-router-dom'

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

  const [isActive, setIsActive] = React.useState(false);
  const [todos, setTodo] = React.useState<todosInfo[]>([])

  React.useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos`)
      .then((response) => {
        const todosData = response.data
        setTodo(todosData)
      })
  }, [])

  const history = useHistory();
  return (
    // <div className="peopleContainer">
    //   <p>Wanna count the employees ?</p>
    //   <button onClick={() => setIsActive(!isActive)}>
    //     {isActive ? 'Im done' : 'Yes'}
    //   </button>
    //   {isActive && (<Employee />)}
      
    //   <ul>
    //   {todos && todos.map(todo => (
    //     <li key={todo.id}>{todo.title}</li>
    //   ))}
    //   </ul>

    // </div>
    <div className={styles.btn}>
      <Link to='/about'>About Us</Link>
      <button onClick={() => history.push('/contact')}>Contact Us</button>
      <button onClick={() => history.push('/')}>Home Page</button>

      <Switch>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/'>
          <App />
        </Route>
      </Switch>
    </div>

  )
}