import React, { useContext, useEffect, useState } from 'react'
import NewsCardList from './NewsCardList'
import Pagination from './Pagination'
import ViewContext from '../Context'
import NewsCardBlock from './NewsCardBlock'

const NewsPanel = () => {
  const [newsList, setNewsList] = useState()
  const [skip, setSkip] = useState(0)

  const context = useContext(ViewContext)

  const newsPerPage = context.view === 'list' ? 5 : 6

  const removeNews = newsId => {
    setNewsList(newsList.filter(news => news.id !== newsId))
  }

  useEffect(() => {
    const imgList = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg']
    fetch('https://api.first.org/data/v1/news')
      .then(res => res.json())
      .then(data => {
        const list = data.data
        for (let i = 0; i < list.length; i++) {
          list[i].img = imgList[i % 6]
        }
        setNewsList(list)
      })
  }, [])

  return (
    <div id="news-panel">
      <div id={`news-${context.view}`}>
        {newsList
          ?.slice(skip, skip + newsPerPage)
          ?.map(news =>
            context.view === 'list' ? (
              <NewsCardList key={news.id} news={news} removeNews={removeNews} />
            ) : (
              <NewsCardBlock
                key={news.id}
                news={news}
                removeNews={removeNews}
              />
            )
          )}
      </div>
      <div id="pagination">
        <Pagination
          count={Math.ceil(newsList?.length / newsPerPage)}
          setSkip={setSkip}
        />
      </div>
    </div>
  )
}

export default NewsPanel
