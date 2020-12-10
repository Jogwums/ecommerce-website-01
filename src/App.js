import 'bootstrap'

import {Switch, Route} from 'react-router-dom'

import {Homepage, Registration, Shop} from './Pages/index'

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar2/Navbar'



function App() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <Navbar />
      <div className="main">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/registration" component={Registration} />
          <Route path="/shop" component={Shop} />
        </Switch>
      </div>
    </div>  
  );
}

export default App;
