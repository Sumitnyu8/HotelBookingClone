import Button from '../Button/Button'
import './navbar.css'

function Navbar() {
  return (
    <>
        <div className="navbar primary-bg-color d-flex justify-content-center">
            <div className="navbar-container">
                <span className="logo txt-white">SumitBooking.com</span>
                <div className="nav-buttons">
                  <Button content='Register'/>
                  <Button content='Login'/>
                    {/* <button className='nav-btn bg-white primary-color'>Register</button>
                    <button className='nav-btn bg-white primary-color'>Login</button> */}
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar