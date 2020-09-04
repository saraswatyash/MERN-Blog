import React from 'react';
import axios from 'axios';
class Article extends React.Component{
    
    state={
        articles:[],
        title:null,
        description:null,
        tags:null
    }
    componentDidMount(){
        const id=this.props.match.params.id
    axios.get('http://127.0.0.1:3001/blog/articles/'+id)
    .then(response=>{
        this.setState({
            articles:response.data
        })
    })
    }
    handleChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    handleClick=(event)=>{
        const articles=this.state.articles
        if(this.state.title==null)
        {
            this.setState({
                title:articles.title
            })
        }
        if(this.state.description==null)
        {
            this.setState({
                description:articles.description
            })
        }
        if(this.state.tags==null)
        {
            this.setState({
                tags:articles.tags
            })
        }
        if(this.state.title!=null&&this.state.description!=null&&this.state.tags!=null)
        {const id=this.props.match.params.id
        axios.put("http://localhost:3001/blog/articles/"+id,{
            "title":this.state.title,
            "description":this.state.description,
            "tags":this.state.tags
          })
        window.location.reload()}
    }
    render(){
        const articles=this.state.articles
        const name=localStorage.getItem('name')
        if(name!==articles.name)
        {
        return(
            <div className="Articles">
                <h1>{articles.title}</h1><br/><br/><br/><br/><br/><br/><br/><br/>
                <h4>Author:{articles.name}</h4>
                <div className="article-desc">
                <h5>{articles.description}</h5>
                </div>
            </div>
        )
        }
        else
        {
            return(
                <div>
                <div className="Articles">
                    <h1>{articles.title}</h1><br/><br/><br/><br/><br/><br/><br/>
                    <h4>Author:{articles.name}</h4>
                    <div className="article-desc">
                    <h5>{articles.description}</h5>
                </div>
                <div className='card-panel art'>
                    <form>
                        <label htmlFor="title">Title:</label>
                        <input type='text' placeholder={articles.title} name="title" onChange={this.handleChange} />
                        <label htmlFor="description">Description:</label>
                        <input type='text' placeholder={articles.description} name="description" onChange={this.handleChange}/>
                        <label htmlFor="tags">Tags</label>
                        <input type='text' placeholder={articles.tags} name="tags"  onChange={this.handleChange}/>
                        <input type='button' value='Edit' onClick={this.handleClick}/>
                    </form>
                    </div>
                </div>
            </div>
                
            )
        }
    }
}
export default Article;