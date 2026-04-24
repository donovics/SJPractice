import { POSTEndpoint } from "./Endpoints.js"
import { GETEndpoint } from "./Endpoints.js"
import { DELETEEndpoint } from "./Endpoints.js"

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
      <button onClick={ POSTEndpoint }>Send</button><br></br>
      <br></br>
      <h3>List people from database:</h3>
      <button onClick={ GETEndpoint } >List people</button><br></br>
      <span id="textarea"></span>
      <h3>Delete person from database:</h3>
      <label>The id of the person: </label>
      <input type="number" id="delid" name="delid"></input><br></br>
      <button onClick={ DELETEEndpoint } >Delete</button><br></br>

    </div>
  );
}

export default App;