import '../App.css';
import {Link} from 'react-router-dom'
import logo from '../logo.svg'
import DashIcon from '../assets/img/dash-icon.svg'
import logoutIcon from '../assets/img/logoutIcon.svg'
import accountIcon from '../assets/img/account-settings-icon.svg'

let Sidebar = () => {
    return(
        <div>
            <aside className="dash-sidebar">
            <img src={logo} className="dash-logo" alt="Logo"/>
                <div className="dash-nav-list">
                    <Link to="#" className="react-router-link-reset">
                        <div className='nav-list-item nav-list-item-active'>
                            <img src={DashIcon} alt=""/>
                            <p>Dashboard</p>
                        </div>
                    </Link>
                    <Link to="#" className="react-router-link-reset">
                        <div className='nav-list-item'>
                            <img src={accountIcon} alt=""/>
                            <p>Account Settings</p>
                        </div>
                    </Link>
                </div>
                <div className="dash-nav-list">
                    <Link to="#" className="react-router-link-reset">
                        <div className='nav-logout'>
                            <img src={logoutIcon} alt=""/>
                            <p>Logout</p>
                        </div>
                    </Link>
                </div>
            </aside>
        </div>
    )
}


export default Sidebar;