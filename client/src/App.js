import "./App.css";
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

const App = () => {
  return (
    <>
      <div className="container">
        <InputTodo />
        <ListTodos />
      </div>
    </>
  );
};

export default App;
