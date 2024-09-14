import './assets/styles/global.scss' 
import Todo from './components/organisms/Todo';
import { TodoProvider } from './shared/context/TodoContext';


const App = () => {
  
  

  return (
    <div>
      <TodoProvider>
        <Todo />
      </TodoProvider>
    </div>
  );
};

export default App;
