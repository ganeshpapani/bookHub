import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const Home = () => {
  const accessToken = Cookies.get('jwt_token')
  if (accessToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <Header />
      <div className="home-container">
        <h1 className="heading"> Find Your Next Favorite Books?</h1>
        <p className="content">
          You are in the right place. Tell us what titles or genres you have
          enjoyed in the past, and we will give you surprisingly insightful
          recommendations.
        </p>
        <div className="top-rated-book-container">
          <div className="content-container">
            <h1 className="top-rated-heading"> Top Rated Books</h1>
            <button type="button" className="find-button">
              Find Books
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
