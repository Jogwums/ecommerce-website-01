import { Component } from 'react';
import {connect} from 'react-redux'
import 'bootstrap'
import {auth, handleUserProfile} from './firebase/firebaseUtils'
import {Switch, Route, Redirect} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

// components
import Navbar from './components/Navbar2/Navbar';
import AdminToolbar from './components/AdminToolbar'

//hoc
import { withAuth } from './hoc/withAuth'
import { withAdminAuth } from './hoc/withAdminAuth'

//layouts 
import MainLayout from './layouts/MainLayout'
import HomePageLayout from './layouts/HomePageLayout'

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
    this.authListener = auth.onAuthStateChanged( async userAuth => {
      if(userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot(snapshot =>{
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })
        
      };

      this.setState({
        ...initialState
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
        <div className="">
          <Switch>
            <Route exact path="/" render={() => (
              <HomePageLayout currentUser={currentUser}>
                <Homepage />
              </HomePageLayout>
            )} />
            <Route path="/registration" render={() => (
              <MainLayout currentUser={currentUser}>
                <Registration />
              </MainLayout>
            )} />
            <Route path="/login" 
              render={() => currentUser ? <Redirect to="/" /> : (
              <MainLayout currentUser={currentUser}>
                <Shop />
              </MainLayout>
            )} />
            <Route path="/admin"  render={() => (
              <MainLayout currentUser={currentUser}>
                <Admin />
              </MainLayout>
            )} />
            <Route path="/recovery" render={() => <Recovery />} />
          </Switch>
        </div>
      </div>  
    )
  }
}

export default App;
