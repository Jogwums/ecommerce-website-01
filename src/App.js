import { Component } from 'react';
import {connect} from 'react-redux'
import 'bootstrap'
import {auth} from './firebase/firebaseUtils'
import {Switch, Route, Redirect} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

// components
import Navbar from './components/Navbar2/Navbar';
import AdminToolbar from './components/AdminToolbar'

//hoc
import { withAuth } from './hoc/withAuth'
import { withAdminAuth } from './hoc/withAdminAuth'

//pages
import {Homepage, Registration, Shop, Login, Admin, Recovery} from './Pages/index'





const initialState = {
  currentUser: null
}

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      ...initialState,

    };

  }

  authListener = null;


  componentDidMount() {
    this.authListener = auth.onAuthStateChanged(userAuth => {
      if(!userAuth) {
        this.setState({
          ...initialState
        });
      };

      this.setState({
        currentUser: userAuth
      })
    })
  }

  componentWillUnmount() {
    this.authListener(); //to unsubscribe
  }
  


  render() {
    const { currentUser } = this.state;

    return (
      
      <div className="jumbotron jumbotron-fluid">
        <AdminToolbar />
        <Navbar />
        <div className="main">
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/registration" component={Registration} />
            <Route path="/shop" component={Shop} />
            <Route path="/login" 
              render={() => currentUser ? <Redirect to="/" /> : (
              <Login />
            )} />
            <Route path="/admin"  render={() => (
              <Admin />
            )} />
            <Route path="/recovery" render={() => <Recovery />} />
          </Switch>
        </div>
      </div>  
    )
  }
}

export default App;
