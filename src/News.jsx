import React from 'react';
import './News.css';

const News = ({author,title,description,url,urlToImage,publishedAt,category}) => {

    return (

        <div className='info'>
    <div className="card" style={{width:'100%',backgroundColor:'lightblue'}}>
      <img src={urlToImage} className="card-img-top"  alt={title}/>
      <div className="card-body">
    <h2 className="card-title text-center title">{title}</h2>
    <p className='card-text text-center content'>{description}</p>
    
    <a className='text-center link' href={url} target='_blank' rel="noopener noreferrer">Click for more info</a>
    <p className='card-text text-center' style={{marginTop:'10px'}} >published IN: {publishedAt}</p>
    <p className='card-text text-center content'>Category: {category}</p>
    <p className="text-center">Author: {author}</p>
      </div>
    </div>
        </div>
    )
}
 
export default News;