import './LastNews.css';

const LastNews = () => {
    return(
        <div className='LastNews--Container Component'>
            <div>
                <h1>Последние новости</h1>
            </div>

            <div className='LastNews--Coontainer__NewsList'>

                <div className='LastNews--Coontainer__NewsList--NewsBig'>
                    <img src="https://specpartner.ru/upload/news/bashkrian.jpeg" alt='photo'/>
                    <div className='LastNews--Coontainer__NewsList__Content'>
                        <h2>Заголовок</h2>
                        <div>
                            <p>Инновации</p>
                            <p>Ноябрь 21, 204</p>
                            <p>Без комментариев</p>
                        </div>
                    </div>
                </div>

                <div className='LastNews--Coontainer__NewsList--Mini'>
                    <div className='LastNews--Coontainer__NewsList--News'>
                        <img src="https://specpartner.ru/upload/news/bashkrian.jpeg" alt='photo'/>
                        <div className='LastNews--Coontainer__NewsList__Content'>
                            <h2>Заголовок</h2>
                            <div>
                                <p>Инновации</p>
                                <p>Ноябрь 21, 204</p>
                                <p>Без комментариев</p>
                            </div>
                        </div>
                    </div>
                    <div className='LastNews--Coontainer__NewsList--News'>
                        <img src="https://specpartner.ru/upload/news/bashkrian.jpeg" alt='photo'/>
                        <div className='LastNews--Coontainer__NewsList__Content'>
                            <h2>Заголовок</h2>
                            <div>
                                <p>Инновации</p>
                                <p>Ноябрь 21, 204</p>
                                <p>Без комментариев</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='Service--Container--Block__More'>
                <h2>Ознакомьтесь со всеми нашими новостями</h2>
                <button>ПОСМОТРЕТЬ ВСЕ НОВОСТИ</button>
            </div>
        </div>
    );
}
export default LastNews;