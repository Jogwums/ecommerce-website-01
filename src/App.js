import { Component } from 'react';
import {connect} from 'react-redux'
import 'bootstrap'
import {auth, handleUserProfile} from './firebase/firebaseUtils'
import {Switch, Route, Redirect} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

//redux 
import { setCurrentUser } from './redux/User/userActions'

// components
// import AdminToolbar from './components/AdminToolbar'
import Carousel from './components/Carousel/Carousel'


//hoc
// import { withAuth } from './hoc/withAuth'
import WithAdminAuth from './hoc/withAdminAuth'

//layouts 
import MainLayout from './layouts/MainLayout'
import HomePageLayout from './layouts/HomePageLayout'
import SiteBackground from './layouts/SiteBackground'

//pages
import {Homepage, Registration, Shop,
         Dashboard, Admin, Recovery, Payment, Error, CartPage} from './Pages/index'
import { WomensProducts, ProductDetailsPage } from './Pages/Products'
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
      <div className="jumbotron ">
        <div className="">
          <Switch>
            <Route exact path="/" render={() => (
              <HomePageLayout >
                <Homepage />
              </HomePageLayout>
            )} />
            <Route path="/registration" render={() => currentUser ? <Redirect to="/" /> : (
              <MainLayout >
                <SiteBackground>
                  <Registration />
                </SiteBackground>
              </MainLayout>
            )} />
            <Route path="/login" 
              render={() => currentUser ? <Redirect to="/" /> : (
              <MainLayout >
                <SiteBackground>
                  <Shop />
                </SiteBackground>
              </MainLayout>
            )} />
            <Route path="/dashboard"  render={() => (
              <withAdminAuth>
                <MainLayout >
                  <Dashboard />
                </MainLayout>
              </withAdminAuth>
            )} />
            <Route path="/admin"  render={() => (
              <WithAdminAuth>
                <MainLayout >
                  <Admin />
                </MainLayout>
              </WithAdminAuth>
            )} />
            <Route path="/payment"  render={() => (
                <MainLayout >
                  <Payment />
                </MainLayout>
            )} />
            <Route path="/product" render={() => (
                <MainLayout>
                  <WomensProducts />
                </MainLayout>
            )} />
            <Route path="/prdt" render={() => (
                <MainLayout>
                  <ProductDetailsPage />
                </MainLayout>
            )} />
            <Route path="/shop" render={() => (
                <MainLayout>
                  <WomensProducts />
                </MainLayout>
            )} />
            <Route path="/women" render={() => (
                <MainLayout>
                  <WomensProducts />
                </MainLayout>
            )} />
            <Route path="/cart" render={() => currentUser ? (
                <MainLayout>
                  <CartPage />
                </MainLayout>
            ) : (<Redirect to="/login"  />)} />

            <Route path="/recovery" render={() => (
              <MainLayout>
                <Recovery />
              </MainLayout>
            )} />
            <Route path="*" render={() => <Error />} />
            <Route path="/slider" render={() => <Carousel />} />
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
