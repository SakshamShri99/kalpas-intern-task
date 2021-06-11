import React, { useState } from 'react'

const Pagination = ({ count, setSkip }) => {
  const [prev, setPrev] = useState(1)
  const [current, setCurrent] = useState(2)
  const [next, setNext] = useState(3)

  const nextPage = e => {
    setSkip(current)
    if (next < count) {
      setPrev(prev => prev + 1)
      setCurrent(current => current + 1)
      setNext(next => next + 1)
    }
    if (next === count) {
      document
        .getElementById('pagination')
        .childNodes.forEach(child => child.classList.remove('page-active'))

      document
        .getElementById('pagination')
        .childNodes[3].classList.add('page-active')

      document.getElementById('pagination').childNodes[4].style.visibility =
        'hidden'
    } else {
      document
        .getElementById('pagination')
        .childNodes.forEach(child => child.classList.remove('page-active'))

      document
        .getElementById('pagination')
        .childNodes[2].classList.add('page-active')

      document.getElementById('pagination').childNodes[4].style.visibility =
        'visible'
      document.getElementById('pagination').childNodes[0].style.visibility =
        'visible'
    }
  }

  const prevPage = e => {
    setSkip(current)
    if (prev > 1) {
      setPrev(prev => prev - 1)
      setCurrent(current => current - 1)
      setNext(next => next - 1)
    }
    if (prev === 1) {
      document
        .getElementById('pagination')
        .childNodes.forEach(child => child.classList.remove('page-active'))

      document
        .getElementById('pagination')
        .childNodes[1].classList.add('page-active')

      document.getElementById('pagination').childNodes[0].style.visibility =
        'hidden'
    } else {
      document
        .getElementById('pagination')
        .childNodes.forEach(child => child.classList.remove('page-active'))

      document
        .getElementById('pagination')
        .childNodes[2].classList.add('page-active')

      document.getElementById('pagination').childNodes[0].style.visibility =
        'visible'
      document.getElementById('pagination').childNodes[4].style.visibility =
        'visible'
    }
  }

  const midPage = e => {
    setSkip(current)
    if (!e.target.classList.contains('page-active')) {
      document
        .getElementById('pagination')
        .childNodes.forEach(child => child.classList.remove('page-active'))

      document
        .getElementById('pagination')
        .childNodes[2].classList.add('page-active')
    }
  }

  return (
    <>
      <div className="page-no-box">
        <img src="prev.svg" alt="" onClick={prevPage} />
      </div>
      <div className="page-no-box  page-active">
        <div className="page-no" onClick={prevPage}>
          <p>{prev}</p>
        </div>
      </div>
      <div className="page-no-box">
        <div className="page-no" onClick={midPage}>
          <p>{current}</p>
        </div>
      </div>
      <div className="page-no-box">
        <div className="page-no" onClick={nextPage}>
          <p>{next}</p>
        </div>
      </div>
      <div className="page-no-box">
        <img src="next.svg" alt="" onClick={nextPage} />
      </div>
    </>
  )
}

export default Pagination
