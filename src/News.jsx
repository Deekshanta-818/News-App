import React from 'react';
import './News.css';

const News = ({author,title,description,content,url,urlToImage,publishedAt}) => {

    return (

        <div className='info'>
    <div className="card" style={{width:'100%',backgroundColor:'lightblue'}}>
      <img src={urlToImage} className="card-img-top"  alt={title}/>
      <div className="card-body">
    <h2 className="card-title text-center title">{title}</h2>
    <p className='card-text text-center content'>{description} {content}</p>
   
    <a className='text-center link' href={url} target='_blank' rel="noopener noreferrer">Click for more info</a>
    <p className='card-text text-center'>published IN: {publishedAt}</p>
    <p className="text-center">Author: {author}</p>
      </div>
    </div>
        </div>
    )
}
 
export default News;