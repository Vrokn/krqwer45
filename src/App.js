import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas, tachar y destacharlas y error de validacion en el input

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [
        { id: 1, name: "Sacar la ropa", done: false },
        { id: 2, name: "Hacer la cama", done: true },
        { id: 3, name: "Leer un rato", done: false }
      ],
      newTask: '',
      error: ''
    }
  }
  addTask = (event) => {
    event.preventDefault();
    if (this.state.newTask === '') {
      this.setState({ error: 'error' })
    } else {
      let oldTasks = this.state.tasks
      let newTask = { name: this.state.newTask, done: false };
      this.setState({
        tasks: [...oldTasks, newTask],
        newTask: ''
      })
    }
  }
  updateTask = (event) => {
    this.setState({
      newTask: event.target.value,
    })
  }
  toggleClass = (event) => {
    let modifiedTasks = this.state.tasks.map((val) => {
      if (event.target.innerHTML === val.name) {
        val.done = !val.done;
      }
      return val;
    })
    this.setState({
      tasks: modifiedTasks
    });
  }
  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.tasks.map((task, index) =>
              <li className={task.done ? 'done' : null}
                onClick={this.toggleClass} key={index}>{task.name}</li>)}
          </ul>
          <form onSubmit={(event) => this.addTask(event)}>
            <input
            className={this.state.error}
            type="text"
            id="new-task"
            placeholder="Ingresa una tarea y oprime Enter"
            value={this.state.newTask}
            onChange={this.updateTask.bind(this)} />
          </form>
      </div>
      </div >
    )
  }
}

export default App;
