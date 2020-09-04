import React,{Component} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
class Home extends Component{
    state={
        blogs:[],
        
        aname:null
    }
componentDidMount()
{
    axios.get('http://127.0.0.1:3001/blog/articles')
    .then(response=>{
        this.setState({
            blogs:response.data
        })
    })
}
handlechange=(event)=>{
    this.setState({
        aname:event.target.value
    })
}
handlesearch=(name)=>{  
    const art=this.state.blogs
    if (art.length){
        art.map(article=>{
        if(article.name===this.state.aname)
        { 
            this.setState({
             blogs:[article]
            })
        }
    })
    
}
}
render(){
    const art=this.state.blogs
    const blog=art.length?(art.map(article=>{
        return(
            <div className='card-panel #7986cb indigo lighten-2 home' key={article._id}>
               <h5><Link to={'/'+article._id} style={{ color: 'inherit', textDecoration: 'inherit'}}>{article.title}</Link></h5> 
                <p>Author:{article.name}</p>
            </div>
        )
    })):(<p>No posts to show</p>)
    return(
        <div className="App">
            <h1 className="homee">BLOGS</h1>
            <div className="search"><input type="text" placeholder="search" onChange={this.handlechange}/></div>
            <input type="button" className="waves-effect waves-light btn-large #f44336 red hh1" name="Author_name" onClick={this.handlesearch} value="Search"/>
            {blog} 
        </div>
    )
}
}
export default Home;