import './Navbar.css'
import PropTypes from 'prop-types';
import menu_icon from '../../assets/menu.png';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search.png';
import upload_icon from '../../assets/upload.png';
import more_icon from '../../assets/more.png';
import notifaction_icon from '../../assets/notification.png';
import profile_icon from '../../assets/jack.png';

const Navbar = ({setSidebar}) => {
    return (
        <nav className='flex-div'>
            <div className='nav-left flex-div'>
                <img src={menu_icon} className='menu-icon' onClick={()=>setSidebar(prev=>prev===false?true:false)} />
                <img src={logo} className='logo' />
            </div> 
            <div className="nav-middle flex-div">
                  <div className="search-box flex-div">
                  <input type='text' placeholder='Search'/>
                  <img src={search_icon} />
                  </div>
            </div>
            <div className="nav-right flex-div">
                <img src={upload_icon} />
                <img src={more_icon} />
                <img src={notifaction_icon} />
                <img src={profile_icon} className='user-icon' />
            </div>
        </nav>
    );
};

Navbar.propTypes = {
    setSidebar: PropTypes.bool.isRequired
}

export default Navbar;