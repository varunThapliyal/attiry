import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../CustomButton/custom-button.component';
import {auth,CreateUserProfileDocument} from '../../firebase/firebase';
import './sign-up.style.scss';


class SignUp extends React.Component{

constructor(){
    super();
    this.state={
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
    }
}
handleChange=(event)=>{
    
    const{name,value}=event.target;

    this.setState({
        [name]:value
    })
}
handleSubmit= async(event) => {
    event.preventDefault();
      const {displayName,email,password,confirmPassword}=this.state;
      
      if(password!==confirmPassword){
          alert("Password Doesn't Match");
          return;
      }
      try{
           const {user} =await auth.createUserWithEmailAndPassword(email,password);
          await CreateUserProfileDocument(user,{displayName});

           this.setState({
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        })
      }
      catch(err){
         console.log('Error On Submitting');
      }
   

}
render(){

    const {displayName,email,password,confirmPassword}=this.state;
      return(
          <div className='sign-up'>
               <h2 className='title'>I do not have a component</h2>
               <span>Sign Up with your email and password</span>

               <form onSubmit={this.handleSubmit}>
                    <FormInput
                      name='displayName'
                      type='text'
                      value={displayName}
                      onChange={this.handleChange}
                      label='displayName'
                      required
                    />
                    <FormInput
                      name='email'
                      type='email'
                      value={email}
                      onChange={this.handleChange}
                      label='Email'
                      required
                    />
                    <FormInput
                      name='password'
                      type='password'
                      value={password}
                      onChange={this.handleChange}
                      label='Password'
                      required
                    />
                    <FormInput
                      name='confirmPassword'
                      type='password'
                      value={confirmPassword}
                      onChange={this.handleChange}
                      label='Confirm Password'
                      required
                    />
                       <CustomButton type='submit'>Sign Up</CustomButton>
               </form>


          </div>

      );

}


}




export default SignUp;