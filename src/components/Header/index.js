import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props

    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="image-container-home">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dyu5n5spk/image/upload/v1688390306/Group_7730_pgg3xb.png"
              className="icon"
              alt="website logo"
            />
          </Link>
          <p className="image-text">ook Hub</p>
        </div>
        <ul className="nav-menu">
          <li className="nav-menu-Home">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-menu-bookshelves">
            <Link to="/shelf" className="nav-link">
              Bookshelves
            </Link>
          </li>
        </ul>
        <button className="logout-button" type="button" onClick={onClickLogout}>
          Logout
        </button>
      </div>
    </nav>
  )
}

export default withRouter(Header)
