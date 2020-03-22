import React from 'react';
import {Route, Switch,Redirect} from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import shop from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import {auth,CreateUserProfileDocument} from './firebase/firebase';
import {setCurrentUser} from './Redux/user/actions';
import {connect} from 'react-redux';
import CheckOutPage from './pages/checkout/checkout.component'

class App extends React.Component {
       
        unsubscribeFromAuth=null;

       componentDidMount(){
         const {setCurrentUser}=this.props;
         this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth =>{
           if(userAuth){
                 
            const userRef=await CreateUserProfileDocument(userAuth);
            userRef.onSnapshot(snapshot =>{
                setCurrentUser({
                  
                    id:snapshot.id,
                    ...snapshot.data()
          
                })
                console.log(this.state);
            })
           }
           else{
             setCurrentUser(userAuth);
           }
         })
       }
       componentWillUnmount(){
         this.unsubscribeFromAuth();
       }

       render(){
                 
        return (
          <div>
            <Header />
            <Switch>
              <Route exact path='/' component={Homepage} />
              <Route path='/shop' component={shop} />
              <Route path='/signin' render={()=> this.props.currentUser?(<Redirect to='/'/>):(<SignInAndSignUpPage/>)} />
              <Route path='/checkout' component={CheckOutPage} />

            </Switch>
          </div>
        )

       }
}


const mapStateToProps=({user})=>({
  currentUser:user.currentUser
})
const mapDispatchToProps=dispatch =>({

  setCurrentUser: user => dispatch(setCurrentUser(user))
}
);
export default connect(mapStateToProps,mapDispatchToProps)(App);
