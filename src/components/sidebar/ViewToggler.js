import React, { useContext } from 'react'
import ViewContext from '../Context'

const ViewToggler = () => {
  const context = useContext(ViewContext)

  const switchToBlockView = e => {
    e.preventDefault()
    document.getElementById('block-view-icon').classList.add('active-view')
    document.getElementById('list-view-icon').classList.remove('active-view')
    context.setView('block')
  }

  const switchToListView = e => {
    e.preventDefault()
    document.getElementById('block-view-icon').classList.remove('active-view')
    document.getElementById('list-view-icon').classList.add('active-view')
    context.setView('list')
  }

  return (
    <div id="view-toggler" className="sidebar-card">
      <b style={{ fontSize: '1.8vw' }}>View Toggle</b>
      <div id="toggle-icon">
        <div id="block-view-icon" onClick={switchToBlockView}>
          <img src="/grid.svg" alt="" />
        </div>
        <div
          id="list-view-icon"
          className="active-view"
          onClick={switchToListView}
        >
          <img src="/list.svg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default ViewToggler
