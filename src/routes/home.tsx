import { Link, Outlet } from 'react-router-dom';
import classes from "./home.module.css"
import Service from './service';

const Home = () => {

    return (
        <div className={classes.home}>
          <Service/>
          <Outlet/>
        </div>
      );
}

export default Home;

