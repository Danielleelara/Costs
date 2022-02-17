import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Contact from './Components/Pages/Contact';
import Company from './Components/Pages/Company';
import NewProject from './Components/Pages/NewProject';

import Container from './Components/layout/Container';
import NavBar from './Components/layout/NavBar';
import Footer from './Components/layout/Footer';
import Projects from './Components/Pages/Projects';
import Project from './Components/Pages/Project';

function App() {
  return (
    <Router>
     <NavBar/>
      <Switch>
        <Container customClass="min-height">
        <Route path='/' exact>
          <Home/>
        </Route>
        <Route path='/projects'>
          <Projects/>
        </Route>
        <Route path='/company'>
          <Company/>
        </Route>
        <Route path='/contact' >
          <Contact/>
        </Route>
        <Route path='/newproject' >
          <NewProject/>
        </Route>
        <Route path='/project/:id' >
          <Project/>
        </Route>
        </Container>
      </Switch>
      <Footer/>
    </Router>

  );
}

export default App;
