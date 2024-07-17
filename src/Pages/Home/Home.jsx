import Sidebar from '../../Components/Sidebar/Sidebar';
import './Home.css';
import PropTypes from 'prop-types';

function Home({sidebar}) {
  return (
    <div>
      <Sidebar sidebar={sidebar}></Sidebar>
    </div>
  )
}

Home.propTypes ={
  sidebar: PropTypes.bool.isRequired
}

export default Home
