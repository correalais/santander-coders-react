import { useEffect, useState } from "react"

function App() {

  const [todos, setTodos] = useState([]);

  useEffect( () => {
    async function buscaDados(){
      const result = await fetch('https://jsonplaceholder.typicode.com/todos');
      const resultadoFinal = await result.json();

      return resultadoFinal;
    }

    buscaDados().then(res => setTodos(res));
  }, [])

  return (
    <div className='App'>
      <h1>Buscando dados</h1>
      <ol>
        {todos.map( (todo) => {
          return(

               <li key={todo.id}>{todo.title} - 
               {todo.completed ? 'Tarefa Concluída' : null}</li>

           
          )         
        })}
      </ol>
    </div>
  )
}

export default App
