import './news.css';

function News() {
    const admin = require('./admin.json');
    const news = admin.news;
    // onClick={() => {handleButtonClick(`/startup/${index}`)}}
    return (
        <div className="news-list">
            {
                Object.keys(news).map((key, index) => {//[x]
                    return (
                        <div className="news-list-item" key={index}>
                            <div className="news-side">
                                <div className="news-title">
                                    <b>{news[key].title}</b>
                                </div>
                                <div className="news-date">
                                    {news[key]["date"]}
                                </div>

                                <div className="news-text">
                                    <p>{news[key]["news"]}</p>
                                </div>

                                <div className="news-correspondent">
                                    {news[key]["correspondent"]}
                                </div>
                            </div>
                            <div className="ui divider" id="adaptive-divider-column-news"></div>
                            <div className="photo-side">
                                <div className="news-photo">
                                    <img src={news[key]["picture"]} alt="startup-photo"/>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default News;