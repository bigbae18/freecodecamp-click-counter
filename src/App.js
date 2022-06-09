import ClickCounter from './components/ClickCounter';
import './App.css';

const App = () => (
    <div className="App">
        <div className="factoria-logo-container">
          <img className="factoria-logo" src="https://factoriaf5.org/wp-content/uploads/2021/07/logo-x2.png" alt="Logo Factoría F5" />
        </div>
        <div className="main-container">
          <ClickCounter />
        </div>
    </div>
  );

export default App;
