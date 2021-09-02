import './App.css';
import Payments from './components/payments'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Success from './components/Success';
import Cancel from './components/Cancel';

function App() {
  return (
    <main>
      <Switch>
        <div className="App">
          <Route path="/" component={Payments} exact />
          <Route path="/success" component={Success} />
          <Route path="/cancel" component={Cancel} />
        </div>
      </Switch>
    </main>
    
  );
}

export default App;
