import React,{useState} from 'react';
import './App.css'
import News from './News.jsx'
const App = () => {

    const [news,setNews] = useState([])

   

const getNews = async () => {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=7271e80c537c43f18621ebc193be7ca5`)
    const data= await response.json();
    setNews(data.articles)
    console.log(news)
    
 }


    return (
        <div className='container'>
            <section className='container mb-5'>
                <h1 className='text-center xs heading'>The Latest News Web Application</h1>
                
                <button type="button" className="btn btn-outline-primary btn-lg " style={{marginLeft:'450px',marginTop:'10px'}} onClick={getNews}>Get The Latest News</button>

            </section>

            <div className='News'>
            {news.map(info => (
                           <News
                           key={info.author} 
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

export default App