import React, { useState, useEffect } from 'react';
import axios from 'axios';
import News from './News'
import './App.css';
 
function App() {
  const [news, setNews] = useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://api.currentsapi.services/v1/latest-news?apiKey=Mco_kOtGw8n3i4TDXSVRQ_dai9-gZ1KdAvxIBZCJ6H0GOz6G',
      );
 
      setNews(result.data.news);
      console.log(result.data.news)
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
                   key={info.id} 
                   author={info.author}
                   title={info.title}
                   description={info.description}
                   category={info.category}
                   urlToImage={info.image}
                   url={info.url}
                   publishedAt={info.published}
                   />
    ))}
    </div>
</div>
  )

}
 
export default App;