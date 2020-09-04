import React,{Component} from 'react';
import axios from 'axios';
class Signup extends Component{
    state={
        name:'',
        image:null,
        email:'',
        password:''
    }
    handlechange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        });    
    }
    handleSignup=(event)=>{
        
        axios.post(" http://127.0.0.1:3001/blog/users",{
            'name':this.state.name,
            'image':this.state.image,
            'email':this.state.email,
            'password':this.state.password       
        }).then(data=>{data.data.name==="MongoError"?alert("Email id should be different"):alert("success")})
    }
    render(){
        return(
            <div className="login">
               <form onSubmit={this.handleSignup}>
               <input type='text' placeholder="Name" name="name" onChange={this.handlechange} required/>
               <input type='text' placeholder="Image url" name="image" onChange={this.handlechange}/>
               <input type='text' placeholder="Email" name="email" onChange={this.handlechange} required/>
               <input type='password' placeholder="Password" name="password" onChange={this.handlechange} required/>
               <input type='button' onClick={this.handleSignup} value="Sign Up"/>
               </form>
            </div>
        )
    }
}
export default Signup;