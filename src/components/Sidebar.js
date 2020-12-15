import '../App.css';
import {Link} from 'react-router-dom'
import logo from '../logo.svg'
import DashIcon from '../assets/img/dash-icon.svg'
import logoutIcon from '../assets/img/logoutIcon.svg'
import accountIcon from '../assets/img/account-settings-icon.svg'
import AuthContext from '../context/auth-context';
import {   useContext} from 'react';
let Sidebar = (props) => {

    const context=useContext (AuthContext)
    return(
        <div>
            <aside className="dash-sidebar">
            <img src={logo} className="dash-logo" alt="Logo"/>
                <div className="dash-nav-list">
                    <Link to="/dashboard" className="react-router-link-reset">
                        <div className={
                            props.active==="dashboard" ? 'nav-list-item nav-list-item-active' : 'nav-list-item'
                        }>
                            <img src={DashIcon} alt=""/>
                            <p>Dashboard</p>
                        </div>
                    </Link>
                    <Link to="/accountsettings" className="react-router-link-reset">
                        <div className={
                            props.active==="accountSettings" ? 'nav-list-item nav-list-item-active' : 'nav-list-item'
                        }>
                            <img src={accountIcon} alt=""/>
                            <p>Account Settings</p>
                        </div>
                    </Link>
                </div>
                <div className="dash-nav-list">
                    <Link to="#" className="react-router-link-reset" onClick={context.logout} >
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