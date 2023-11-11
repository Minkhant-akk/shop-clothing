
import {NavLink, Outlet } from 'react-router-dom';
import Directory from '../../components/directory/directory.components';

import './homepage.style.scss';

const HomePage = () => (
  <div className='homepage'>
    <Directory />
    <Outlet/>
    
  </div>
);

export default HomePage;