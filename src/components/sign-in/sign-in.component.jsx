import React from 'react';
import FormInput from '../form-input/form-input.component';
import './sign-in.style.scss';
import CustomButton from '../CustomButton/custom-button.component';
import {Sign_In_With_Google,auth} from'../../firebase/firebase';



class SignIn extends React.Component{
   constructor(){
       super();

       this.state={
           email:'',
           password:''
       }


   }
   handleSubmit = async(event)=>{
           event.preventDefault();

                 const {email,password}=this.state;

    try{
    await auth.signInWithEmailAndPassword(email,password);
           this.setState({
               email:'',
               password:''
           })
       }
    catch(err){
           console.log('Error in signing in');
       }

             
   }
   handleChange=(event)=>{
       const {name,value}=event.target;
       this.setState({[name]:value})

   }
       render(){
           return (
                   <div className='sign-in'>
                          <h2>I already have an account</h2>
                          <span>Sign In with your email and password</span>

                          <form onSubmit={this.handleSubmit}>

                              <FormInput 
                              name='email' 
                              type='email' 
                              value={this.state.email} 
                              handleChange={this.handleChange} 
                              label='email'
                              required />
                              


                              <FormInput 
                              name='password' 
                              type='password' 
                              value={this.state.password} 
                              handleChange={this.handleChange} 
                              label='password'
                              required />
                              
                                <div className='buttons'>
                                <CustomButton type='submit'>Sign In</CustomButton>
                                <CustomButton onClick={Sign_In_With_Google} isGoogleSignIn>Sign In With Google</CustomButton>
                                </div>
                              
                        </form>
                   </div>
           )
       }


}

export default SignIn;