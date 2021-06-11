import React, { useState } from 'react'
import validator from 'validator'
import countryList from './countries'

const FeedbackForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [address, setAddress] = useState('')
  const [country, setCountry] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [countryCode, setCountryCode] = useState('')
  const [errorPhone, setErrorPhone] = useState('')
  const [errorEmail, setErrorEmail] = useState('')

  const formSubmitHandler = e => {
    e.preventDefault()
    if (!validator.isEmail(email)) {
      setErrorEmail('Please enter a valid email id')
      setTimeout(() => {
        setErrorEmail('')
      }, 5000)
      return
    }
    if (!validator.isMobilePhone(countryCode + phoneNumber)) {
      setErrorPhone('PLease enter a valid phone number')
      setTimeout(() => {
        setErrorPhone('')
      }, 5000)
      return
    }
  }

  return (
    <div id="feedback-form" className="not-active">
      <b style={{ fontSize: '1.5vw' }}>
        Thank you so much for taking the time!
      </b>
      <p style={{ fontSize: '1vw', margin: '1% 0 5% 0' }}>
        Please provide the below details!
      </p>
      <form
        style={{ width: '80%', flexGrow: '1' }}
        onSubmit={formSubmitHandler}
      >
        <label className="label" htmlFor="first-name">
          First Name:
        </label>
        <input
          type="text"
          name="firs-name"
          placeholder="John"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
        <label className="label" htmlFor="last-name">
          Last Name:
        </label>
        <input
          type="text"
          name="last-name"
          placeholder="Doe"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
        <label className="label" htmlFor="address">
          Address:
        </label>
        <textarea
          type="text"
          name="address"
          placeholder="Enter your full postal address"
          value={address}
          onChange={e => setAddress(e.target.value)}
        />
        <label className="label" htmlFor="country">
          Country:
        </label>
        <div className="input">
          <input
            type="search"
            name="country"
            list="countries"
            placeholder="Seach Country"
            autoComplete="none"
            value={country}
            onChange={e => setCountry(e.target.value)}
          />
          <img
            id="search-icon"
            src="search.svg"
            alt=""
            style={{ height: '1em' }}
          />
          <datalist id="countries">
            {countryList.map(country => (
              <option>{country}</option>
            ))}
          </datalist>
        </div>
        <label className="label" htmlFor="email">
          Email ID:
        </label>
        <div className="input">
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <p
            style={{
              color: 'red',
              margin: '0 0 0 1em',
              fontSize: '0.8vw',
              width: '40%',
              display: 'inline',
            }}
          >
            {errorEmail}
          </p>
        </div>
        <label className="label" htmlFor="phone-number">
          Phone Number:
        </label>
        <div className="input">
          <input
            id="country-code"
            type="number"
            name="country-code"
            placeholder="+91"
            value={countryCode}
            onChange={e => setCountryCode(e.target.value)}
          />
          <input
            id="phone-number"
            type="number"
            name="phone-number"
            placeholder="1234567890"
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
          />
          <p
            style={{
              color: 'red',
              margin: '0 0 0 1em',
              fontSize: '0.8vw',
              width: '40%',
              display: 'inline',
            }}
          >
            {errorPhone}
          </p>
        </div>
        <button>
          <b style={{ color: 'white' }}>Submit Feedback</b>
        </button>
      </form>
    </div>
  )
}

export default FeedbackForm
