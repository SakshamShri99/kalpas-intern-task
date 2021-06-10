import React from 'react'
import HiCard from './HiCard'
import ViewToggler from './ViewToggler'
import FeedbackToggler from './FeedbackToggler'
import FeedbackForm from './FeedbackForm'

const Sidebar = () => {
  return (
    <div id="sidebar">
      <div id="sidebar-menu">
        <HiCard />
        <ViewToggler />
        <FeedbackToggler />
      </div>
      <FeedbackForm />
    </div>
  )
}

export default Sidebar
