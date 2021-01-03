import { Component } from 'react';
import {connect} from 'react-redux'
import 'bootstrap'
import {auth, handleUserProfile} from './firebase/firebaseUtils'
import {Switch, Route, Redirect} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

//redux 
import { setCurrentUser } from './redux/User/userActions'

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

// use redux store instead of state 

class App extends Component {
  authListener = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.authListener = auth.onAuthStateChanged( async userAuth => {
      if(userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot(snapshot =>{
          setCurrentUser({
            id: snapshot.id,
              ...snapshot.data()
          })
        })
        
      };

      setCurrentUser(userAuth)
    })
  }

  componentWillUnmount() {
    this.authListener(); //to unsubscribe
  }
  
  render() {
    const { currentUser } = this.props;

    return (
      
      <div className="jumbotron jumbotron-fluid">
        <div className="">
          <Switch>
            <Route exact path="/" render={() => (
              <HomePageLayout >
                <Homepage />
              </HomePageLayout>
            )} />
            <Route path="/registration" render={() => currentUser ? <Redirect to="/" /> : (
              <MainLayout >
                <Registration />
              </MainLayout>
            )} />
            <Route path="/login" 
              render={() => currentUser ? <Redirect to="/" /> : (
              <MainLayout >
                <Shop />
              </MainLayout>
            )} />
            <Route path="/admin"  render={() => (
              <MainLayout >
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

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
