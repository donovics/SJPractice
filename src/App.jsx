import { POSTEndpoint } from "./Endpoints.js"

function App() {
  return (
    <div className="App">
      <h3>Add person to database:</h3>
      <label>id: </label>
      <input type="number" id="id" name="id"></input><br></br>
      <label>Name: </label>
      <input type="text" id="name" name="name"></input><br></br>
      <label>age: </label>
      <input type="number" id="age" name="age"></input><br></br>
      <label>num: </label>
      <input type="number" id="num" name="num"></input><br></br>
      <button onClick={ POSTEndpoint }>Send</button><br></br><br></br>
      <script type="module" src="Endpoints.js"></script>
    </div>
  );
}

export default App;