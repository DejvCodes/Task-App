import "./AllTasks.css"
import data from "../data"
import { useState } from "react"

const AllTasks = () => {
  const [myTask, setMyTask] = useState(data)

  // Mazání jednodlivých úkolů
  const taskHandler = (id) => {
    const filteredTasks = myTask.filter((oneTask) => {
      return oneTask.id !== id
    })
    setMyTask(filteredTasks)
  }

  // Mazání všech úkolů najednou
  const deleteAll = () => {
    setMyTask([])
  }

  return <div>
    {
      myTask.map((oneTask) => {
        const {id, name}= oneTask

        return <div className="one-task" key={id}>
          <h4>{name}</h4>
          <button onClick={() => taskHandler(id)}>Vymazat</button>
        </div>
      })
    } 
    <br/>
    <button className="main-button" onClick={() => deleteAll()}>Vymazat vše</button>
  </div>
}
export default AllTasks