import logo from './logo.svg';
import CakeContainer from './components/CakeContainer'
import CakeContainerHooksexample from './components/CakeContainer_using_Hooks'
import { Provider } from 'react-redux';
import store from './redux/Store'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer/>  
        <CakeContainerHooksexample/>  
      </div>
    </Provider>
  );
}

export default App;
