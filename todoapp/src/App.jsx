import Addtodo from "./component/AddTodo";
import AppName from "./component/AppName";
import Todoitem from "./component/Todoitem";
import Todoitem2 from "./component/Todoitem2";
import "./App.css"


function App() {
  return (
    <center className="todo-container">
      <AppName/>
      <Addtodo/>
      <div className="item-container">
        <Todoitem/>
        <Todoitem2/>
      </div>
      
    </center>
  );
}

export default App;
