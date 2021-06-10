import React, { useContext } from 'react'
import ViewContext from '../Context'

const NewsCardBlock = ({ news, removeNews }) => {
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
      <div style={{ width: '33%', height: '50%', position: 'relative' }}>
        <div className="news-card-block">
          <img
            src="close.svg"
            alt=""
            style={{
              height: '10%',
              position: 'absolute',
              right: '12%',
              top: '1%',
              cursor: 'pointer',
            }}
            onClick={() => removeNews(news.id)}
          />
          <span
            style={{ width: '80%', marginTop: '8%', cursor: 'pointer' }}
            onClick={showSiteHandler}
          >
            <p
              style={{
                fontSize: '1.1vw',
                margin: '0',
              }}
              className="news-lines-block"
            >
              <b>{news.title}</b>
            </p>
            <p
              style={{
                fontSize: '0.9vw',
                margin: '0',
              }}
              className="news-lines-block"
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
              className="news-lines-block"
            >
              <b>{news.published}</b>
            </p>
          </span>
          <img
            src={news.img}
            alt=""
            style={{
              height: '50%',
              width: '70%',
              margin: 'auto',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
            onClick={showSiteHandler}
          />
        </div>
      </div>
    </>
  )
}

export default NewsCardBlock
