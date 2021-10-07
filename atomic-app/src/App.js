import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Service from './pages/Service';
import Gallary from './pages/Gallary'
import Contact from './pages/Contact'
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
      <Header/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route  path="/about" component={About}/>
      <Route  path="/service" component={Service}/>
      <Route  path="/gallary" component={Gallary}/>
      <Route  path="/contact" component={Contact}/>
      </Switch>
      <Footer/>
      </Router>
       </div>
  );
}

export default App;
