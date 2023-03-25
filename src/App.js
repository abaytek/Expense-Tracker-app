import './App.css';
import AddTransaction from './component/AddTransaction/AddTransaction';
import Header from './component/Header/Header';
import History from './component/History/History';
import Total from './component/Total/Total';

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="right">
          <Header />
          <Total />
          <History />
        </div>
        <div className="left">
          <AddTransaction />
        </div>
      </div>
    </div>
  );
}

export default App;
