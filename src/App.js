import './App.css';
import Goal from './Components/Goal';
import TodosList from './Components/TodoList';

function App() {
  return (
    <div className='all'>
    <div className="todo-app todo-apps">
      <TodosList />
      <Goal />
    </div>
    </div>
  );
}

export default App;
