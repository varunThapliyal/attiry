import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import shop from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import {auth,CreateUserProfileDocument} from './firebase/firebase';


class App extends React.Component {
       constructor(){
         super();
          this.state={
            currentUser:''
          }

       }
        unsubscribeFromAuth=null;

       componentDidMount(){
         this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth =>{
           if(userAuth){
                 
            const userRef=await CreateUserProfileDocument(userAuth);
            userRef.onSnapshot(snapshot =>{
                this.setState({
                   currentUser:{
                     id:snapshot.id,
                     ...snapshot.data()
                   }
                })
                console.log(this.state);
            })
           }
           else{
             this.setState({
               currentUser:userAuth
             })
           }
         })
       }
       componentWillUnmount(){
         this.unsubscribeFromAuth();
       }

       render(){
                 
        return (
          <div>
            <Header currentUser={this.state.currentUser} />
            <Switch>
              <Route exact path='/' component={Homepage} />
              <Route path='/shop' component={shop} />
              <Route path='/signin' component={SignInAndSignUpPage} />
            </Switch>
          </div>
        )

       }
}

export default App;
