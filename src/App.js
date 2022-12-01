import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
    <h1>TodoApp With Redux</h1>
     <AddTodo/>
     <TodoList/>
    </div>
  );
}

export default App;
