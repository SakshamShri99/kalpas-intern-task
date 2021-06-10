import React, { useState } from 'react'
import Sidebar from './sidebar/Sidebar'
import NewsPanel from './news panel/NewsPanel'
import ViewContext from './Context'

const Home = () => {
  const [view, setView] = useState('list')
  const [showSite, setShowSite] = useState('hidden')
  const [newsData, setNewsData] = useState({})

  const hideSiteHandler = () => {
    setShowSite('hidden')
    setNewsData({})
    document.getElementById('home-screen').style.filter = 'none'
  }

  return (
    <ViewContext.Provider value={{ view, setView, setShowSite, setNewsData }}>
      <div id="home-screen">
        <Sidebar />
        <NewsPanel />
      </div>
      <div
        className={`${showSite}`}
        id="iframe-container"
        onClick={hideSiteHandler}
      ></div>
      <iframe
        className={`${showSite}`}
        width="70%"
        height="70%"
        src={newsData.link}
        title={newsData.title}
      />
    </ViewContext.Provider>
  )
}

export default Home
