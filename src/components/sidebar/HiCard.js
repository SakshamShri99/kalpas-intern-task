import React from 'react'

const HiCard = () => {
  return (
    <div id="hi-card" className="sidebar-card">
      <img
        src="profile.jpg"
        alt=""
        style={{
          height: 'auto',
          width: '20%',
          borderRadius: '100%',
          marginLeft: '5%',
        }}
      />
      <span style={{ marginLeft: '5%', marginTop: '-3%' }}>
        <b
          style={{
            fontSize: '1.2vw',
            flexGrow: '1',
          }}
        >
          Hi Reader,
        </b>
        <p style={{ fontSize: '1vw', margin: '0' }}>Here's your News!</p>
      </span>
    </div>
  )
}

export default HiCard
