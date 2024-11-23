import React, { useEffect, useState } from 'react';
import './LastNews.css';
import ip from '../../config';

const LastNews = () => {
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        // Fetch data from the API
        fetch(`${ip}api/News`)
            .then(response => response.json())
            .then(data => setNewsData(data))
            .catch(error => console.error('Error fetching news:', error));
    }, []);

    return (
        <div className='LastNews--Container Component'>
            <div>
                <h1>Последние новости</h1>
            </div>

            <div className='LastNews--Coontainer__NewsList'>
                {newsData.length > 0 ? (
                    <>
                        <div className='LastNews--Coontainer__NewsList--NewsBig'>
                            <img src={newsData[0].imageUrl || 'https://specpartner.ru/upload/news/bashkrian.jpeg'} alt='photo' />
                            <div className='LastNews--Coontainer__NewsList__Content'>
                                <h2>{newsData[0].title}</h2>
                                <div>
                                    <p>{newsData[0].category}</p>
                                    <p>{new Date(newsData[0].date).toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                                    <p>{newsData[0].comments === 0 ? 'Без комментариев' : `${newsData[0].comments} комментариев`}</p>
                                </div>
                            </div>
                        </div>

                        <div className='LastNews--Coontainer__NewsList--Mini'>
                            {newsData.slice(1, 3).map(news => (
                                <div key={news.id} className='LastNews--Coontainer__NewsList--News'>
                                    <img src={news.imageUrl || 'https://specpartner.ru/upload/news/bashkrian.jpeg'} alt='photo' />
                                    <div className='LastNews--Coontainer__NewsList__Content'>
                                        <h2>{news.title}</h2>
                                        <div>
                                            <p>{news.category}</p>
                                            <p>{new Date(news.date).toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                                            <p>{news.comments === 0 ? 'Без комментариев' : `${news.comments} комментариев`}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>

            <div className='Service--Container--Block__More'>
                <h2>Ознакомьтесь со всеми нашими новостями</h2>
                <button>ПОСМОТРЕТЬ ВСЕ НОВОСТИ</button>
            </div>
        </div>
    );
}

export default LastNews;