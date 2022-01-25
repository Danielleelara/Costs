import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Contact from './Components/Pages/Contact';
import Company from './Components/Pages/Company';
import NewProject from './Components/Pages/NewProject';

function App() {
  return (
    <Router>
      <ul>
        <li>Home</li>
        <li>Contato</li>
      </ul>
      <Switch>
        <Route path='/' exact>
          <Home/>
        </Route>
        <Route path='/company' exact>
          <Company/>
        </Route>
        <Route path='/contact' >
          <Contact/>
        </Route>
        <Route path='/newproject' >
          <NewProject/>
        </Route>
      </Switch>
      <p>Footer</p>
    </Router>
  );
}

export default App;
