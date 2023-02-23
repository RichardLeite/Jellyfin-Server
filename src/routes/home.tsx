import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import classes from "./home.module.css"
import Service from './service';

const Home = () => {

    return (
        <div className={classes.home}>
          {/* <Navbar/> */}
          <Service/>
          <Outlet/>
        </div>
      );
}

export default Home;

