import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';

import './App.css';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/page1' component={Page1} />
          <Route path='/page2' component={Page2} />
          <Route path='/page3' component={Page3} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
