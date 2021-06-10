import React, { useState } from 'react'

const FeedbackToggler = () => {
  const [formVisible, setFormVisible] = useState(false)

  const toggleFeedbackForm = e => {
    if (!formVisible) {
      document.getElementById('sidebar').classList.add('feedback-active')
      document.getElementById('feedback-form').classList.remove('not-active')
      document.getElementById('view-toggler').style.display = 'none'
      document.getElementById('feedback-button').style.background = '#F2A7A9'
      document.getElementById('news-panel').style.filter = 'blur(5px)'
      setFormVisible(true)
    } else {
      document.getElementById('sidebar').classList.remove('feedback-active')
      document.getElementById('view-toggler').style.display = ''
      document.getElementById('feedback-form').classList.add('not-active')
      document.getElementById('feedback-button').style.background = '#98efc9'
      document.getElementById('news-panel').style.filter = 'none'
      setFormVisible(false)
    }
  }

  return (
    <>
      <div id="feedback-toggler" className="sidebar-card">
        <b style={{ fontSize: '1.8vw' }}>Have a Feedback?</b>
        <div id="feedback-button" onClick={toggleFeedbackForm}>
          <b style={{ fontSize: '1.3vw' }}>We're Listening!</b>
        </div>
      </div>
    </>
  )
}

export default FeedbackToggler
