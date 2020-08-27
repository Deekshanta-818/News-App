import React, { useState, useEffect } from 'react';
import axios from 'axios';
import News from './News'
import './App.css';
 
function App() {
  const [news, setNews] = useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=7271e80c537c43f18621ebc193be7ca5',
      );
 
      setNews(result.data.articles);
      console.log(result.data.articles)
    };
 
    fetchData();
  }, []);


  return (
    <div className='container'>
    <section className='container mb-5'>
        <h1 className='text-center xs heading'>The Latest News Web Application</h1>
        
       

    </section>

    <div className='News'>
    {news.map(info => (
                   <News
                   key={info.title} 
                   author={info.author}
                   title={info.title}
                   description={info.description}
                   content={info.content}
                   urlToImage={info.urlToImage}
                   url={info.url}
                   publishedAt={info.publishedAt}
                   />
    ))}
    </div>
</div>
  )

}
 
export default App;