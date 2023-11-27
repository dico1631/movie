import { useState } from 'react';

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === ""){
      return;
    }
    setToDos(currentArray => [toDo, ...currentArray]);
    setToDo("");
  }
  console.log(toDos);

  return (
    <div className="App">
      <h1>My to Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          type="text"
          value={toDo}
          onChange={onChange}
          placeholder='Write your to do'
        />
        <button>add to do</button>
      </form>
      <hr />
      {toDos.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
}

export default App;
