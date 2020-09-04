import React from 'react';
import './all.css'
import axios from 'axios'

class Login extends React.Component{
    state={
        email:'',
        password:'',
        loggedin:false,
        userdata:{
            name:null,
            email:null,
            image:"https://static.thenounproject.com/png/17241-200.png"
        },
        title:'',
        description:'',
        tags:'',
        articles:[]
    }
    componentDidMount(){
        
        this.setState({
            loggedin:Number(localStorage.getItem('loggedin'))
        })
        this.setState({
            userdata:
            {
            name:localStorage.getItem('name'),
            email:localStorage.getItem('email'),
            image:localStorage.getItem('image')
            }
        })
        axios.get("http://127.0.0.1:3001/blog/articles")
        .then(response=>{
            this.setState({
                articles:response.data
            })
            }
        )
    }
   
    handlesubmit=(event)=>{
        axios.post("http://127.0.0.1:3001/blog/articles",{
          "title":this.state.title,
          "description":this.state.description,
          "name":this.state.userdata.name,
          "tags":this.state.tags
        }).then(()=>{alert("Succesfull")})
        window.location.reload()
    }
    hadlechange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        });
    }
    handleLogin=(event)=>{
        const email=this.state.email
        const password=this.state.password
        axios.get("http://127.0.0.1:3001/blog/users/"+email+"/"+password)
        .then(response=>{
            response.status===200?alert("logged in "):alert("notlogged in")
            this.setState({
                loggedin:response.status,
                userdata:response.data
            })
            localStorage.setItem('name',this.state.userdata.name)
            localStorage.setItem('email',this.state.userdata.email)
            this.state.userdata.image===null?localStorage.setItem('image',"https://static.thenounproject.com/png/17241-200.png"):localStorage.setItem('image',this.state.userdata.image)
            localStorage.setItem('loggedin',this.state.loggedin)
        })
    }
    handlesignout=(event)=>{
        localStorage.setItem('loggedin',204)
        localStorage.setItem('name',null)
        this.setState({
            loggedin:204
        })
    }
    handleDelete=(id)=>{
        console.log(id)
        axios.delete("http://127.0.0.1:3001/blog/articles/"+id).then(response=>{console.log(response)})
        window.location.reload()
    }
    render(){
        const image=this.state.userdata.image
        const articles=this.state.articles
        const art=articles.length?(articles.map(article=>{
            if(article.name===this.state.userdata.name)
            {
            return(
            <div key={article._id} className="card-panel #7986cb indigo lighten-2 home">
               <h3>{article.title}</h3>
               <input type="button" value="Delete" className="waves-effect waves-light btn-large #f44336 red hh" onClick={()=>{this.handleDelete(article._id)}}/>
            </div>
            )
        }
        })):(<p>No posts to show</p>)
        if(this.state.loggedin===200)
        {
            return(
            <div className="container"> 
            <div className="user-profile">
            <img src={image}  alt=""/>
            <p className="text">Name:&nbsp;&nbsp;{this.state.userdata.name}</p>
            <p className="text">Email:&nbsp;&nbsp;{this.state.userdata.email}</p>
            </div>
            <div className="head"><h1>Create Post</h1></div>
            <div className="user-create">
            <input type="text" placeholder="Title of the blog" name="title" onChange={this.hadlechange} />
            <input type="text" placeholder="Description" name="description" onChange={this.hadlechange} />
            <input type="text" placeholder="Tags" name="tags" onChange={this.hadlechange} />
            <input type="submit" onClick={this.handlesubmit} className="btn #3d5afe indigo accent-3"/>
            </div><br/><br/><br/><br/> 
            <input type='submit' onClick={this.handlesignout} value='signout' className="waves-effect waves-light btn-large #f44336 red"/>
            <div className="posts">
                <h1>Posts By {this.state.userdata.name}</h1><br/>
                {art}
            </div>
            </div>   
            )
        }
        else{
        return(
            <div className="login">
                <form onClick={this.handleLogin}>
                    <input type='text' placeholder="Email" name="email" onChange={this.hadlechange} required/>
                    <input type='password' placeholder="Password" name="password" onChange={this.hadlechange} required/>
                    <input type='button' onClick={this.handleLogin} value="LOGIN"/>
                </form>
            </div>
        )}
    }
}
export default Login;