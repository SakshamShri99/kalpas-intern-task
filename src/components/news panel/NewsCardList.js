import React, { useContext } from 'react'
import ViewContext from '../Context'

const NewsCardList = ({ news, removeNews }) => {
  const context = useContext(ViewContext)

  const showSiteHandler = () => {
    context.setShowSite('visible')
    context.setNewsData({
      link: news.link,
      title: news.title,
    })
    document.getElementById('home-screen').style.filter = 'blur(5px)'
  }

  return (
    <>
      <div style={{ display: 'flex', flexFlow: 'row nowrap', height: '16%' }}>
        <div className="news-card-list">
          <img
            src={news.img}
            alt=""
            style={{
              height: '4vw',
              width: '4vw',
              borderRadius: '100%',
              marginLeft: '2%',
              cursor: 'pointer',
              objectFit: 'cover',
            }}
            onClick={showSiteHandler}
          />
          <span
            style={{
              marginTop: '0',
              marginLeft: '2%',
              width: '85%',
              cursor: 'pointer',
            }}
            onClick={showSiteHandler}
          >
            <p
              style={{
                fontSize: '1.2vw',
                margin: '0',
              }}
              className="news-lines-list"
            >
              <b>{news.title}</b>
            </p>
            <p
              style={{
                fontSize: '1vw',
                margin: '0',
              }}
              className="news-lines-list"
            >
              {news.summary}
            </p>
            <p
              style={{
                fontSize: '0.8vw',
                margin: '0',
                marginTop: '1%',
                color: '#CACACA',
              }}
              className="news-lines-list"
            >
              <b>{news.published}</b>
            </p>
          </span>
        </div>
        <div id="close-icon-list">
          <img
            src="close.svg"
            alt=""
            onClick={() => removeNews(news.id)}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>
    </>
  )
}

export default NewsCardList
